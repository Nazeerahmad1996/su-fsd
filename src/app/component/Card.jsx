export default function Card({ item }) {
    return (

        <div className="m-5 text-gray-900">
            <div className="card bg-white w-96 rounded-xl">
                <div className="card-body">
                    <h2 className="card-title ">{item.created}</h2>
                    <p>{item.filename}</p>
                </div>
            </div>
        </div>
    )
}
