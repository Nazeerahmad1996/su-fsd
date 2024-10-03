'use client'
import { useEffect, useState } from 'react'
import Dropdown from './Dropdown';
import Card from './Card';
import { sortByCreated, sortByFilename, sortByFilenameDesc } from '@/lib/helper';

export default function Layout(props) {
    const [sortby, setSortby] = useState({ value: 'Select', id: 0 });
    const [data, setData] = useState(props.data)


    useEffect(() => {
        switch (sortby?.id) {
            case 1:
                {
                    const res = sortByCreated(data);
                    setData(res);
                    break;
                }
            case 2:
                {
                    const res = sortByFilename(data);
                    setData(res);
                    break;
                }
            case 3:
                {
                    const res = sortByFilenameDesc(data);
                    setData(res);
                    break;
                }

            default:
                break;
        }
    }, [sortby])

    console.log(data);

    return (
        <div className='mr-40 ml-40 overflow-y-auto h-[90vh] m-10'>
            <div className="card glass shadow-lg rounded-sm">
                <div className="flex justify-center mt-5">
                    <Dropdown setSortby={setSortby} sortby={sortby} />
                </div>
                <div className="flex flex-wrap justify-center p-10">
                    {
                        data.map((item, index) => <Card key={item?.filename} item={item} index={index} />)
                    }
                </div>
            </div>
        </div>
    )
}
