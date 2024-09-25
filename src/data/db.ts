import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export class DatabaseService {
    private storageType: string = process.env.SDD_STORE_TYPE || 'json';
    private dataPath: string = path.join(__dirname, 'data.json');


    constructor() {
        if (this.storageType === 'yaml') {
            this.dataPath = path.join(__dirname, 'data.yaml');
        }
    }

    //check the database file, if it doesn't exist, create it
    connectToDatabase() {
        return new Promise((resolve) => {
            if (!fs.existsSync(this.dataPath)) {
                resolve(this.writeData({}))
            } else
                resolve(true)
        })
    }

    // Create a new collection
    createCollection(tableName: string) {
        return new Promise((resolve, reject) => {
            const data = this.readData();
            if (data[tableName])
                reject('Collection already exists');
            data[tableName] = [];
            resolve(this.writeData(data))
        })
    }

    // Read data from the file
    private readData(): Record<string, any> {
        try {
            if (!fs.existsSync(this.dataPath)) return {};
            const fileContent = fs.readFileSync(this.dataPath, 'utf-8');
            return this.storageType === 'yaml' ? yaml.load(fileContent) : JSON.parse(fileContent);
        } catch (e) {
            throw e
        }
    }

    // Write data to the file
    private writeData(data: Record<string, any>) {
        return new Promise((resolve, reject) => {
            try {
                const content = this.storageType === 'yaml' ? yaml.dump(data) : JSON.stringify(data, null, 2);
                fs.writeFileSync(this.dataPath, content)
                resolve(true)
            } catch (e) {
                reject(e)
            }
        })
    }

    // Add additional methods for inserting, deleting, and finding records...
}
