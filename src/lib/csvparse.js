const csv = require('csv-parser')
const fs = require('fs')
import path from 'path';

export async function getData() {
    return new Promise((resolve, reject) => {
        const results = [];
        const filePath = path.join(process.cwd(), 'src/data', 'data.csv');
        if (!fs.existsSync(filePath)) {
            throw new Error('File not found');
        }
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data, index) => {
                const keys = Object.values(data);
                const format =
                {
                    created: keys[0],
                    filename: keys[1]
                }

                results.push(format);
            })
            .on('end', () => {
                resolve(results);
            });
    })
}
