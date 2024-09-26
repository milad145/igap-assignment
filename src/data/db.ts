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
                reject('Collection already exists!');
            else {
                data[tableName] = [];
                resolve(this.writeData(data))
            }
        })
    }

    // delete collection by name
    deleteCollection(tableName: string) {
        return new Promise((resolve, reject) => {
            const data = this.readData();
            if (data[tableName]) {
                delete data[tableName]
                resolve(this.writeData(data))
            } else
                reject("Collection doesn't exists!")
        })
    }

    // add record to collection
    addRecord(tableName: string, record: { foo: string, bar: string, baz: number }) {
        return new Promise((resolve, reject) => {
            const data = this.readData();
            if (data[tableName]) {
                let index = data[tableName].findIndex((d: any) => d.baz === record.baz)
                if (index === -1) {
                    data[tableName].push(record)
                    resolve(this.writeData(data))
                } else
                    reject(new Error("Duplicated record! 'baz' have to be unique!"))
            } else
                reject(new Error("Collection doesn't exists!"))
        })
    }

    getRecords(tableName: string, limit: number, skip: number) {
        return new Promise((resolve, reject) => {
            const data = this.readData();
            if (data[tableName]) {
                resolve(data[tableName].slice(skip, skip + limit))
            } else
                reject("Collection doesn't exists!")
        })
    }

    deleteRecord(tableName: string, baz: number) {
        return new Promise((resolve, reject) => {
            const data = this.readData();
            if (data[tableName]) {
                let index = data[tableName].findIndex((d: any) => d.baz === baz)
                if (index !== -1) {
                    data[tableName].splice(index, 1)
                    resolve(this.writeData(data))
                } else
                    reject(new Error("Record doesn't exists at this collection!"))
            } else
                reject("Collection doesn't exists!")
        })
    }

    updateRecord(tableName: string, baz: number, record: { foo?: string, bar?: string }) {
        return new Promise((resolve, reject) => {
            const data = this.readData();
            if (data[tableName]) {
                let index = data[tableName].findIndex((d: any) => d.baz === baz)
                if (index !== -1) {
                    data[tableName][index] = {...data[tableName][index], ...record}
                    resolve(this.writeData(data))
                } else
                    reject(new Error("Record doesn't exists at this collection!"))
            } else
                reject(new Error("Collection doesn't exists!"))
        })
    }

    // Read data from the file
    private readData(): any {
        try {
            if (!fs.existsSync(this.dataPath)) return {};
            const fileContent = fs.readFileSync(this.dataPath, 'utf-8');
            return this.storageType === 'yaml' ? yaml.load(fileContent) : JSON.parse(fileContent);
        } catch (e) {
            throw e
        }
    }

    // Write data to the file
    private writeData(data: any) {
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
