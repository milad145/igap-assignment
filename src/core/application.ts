import {DatabaseService} from '../data/db';

const databaseService = new DatabaseService();

const application = {

    /**
     * create collection
     * @param collectionName {string}
     */
    async createCollection(collectionName: string) {
        try {
            await databaseService.createCollection(collectionName)
            return true;
        } catch (e) {
            throw e
        }
    },

    /**
     * delete specific collection by name
     * @param collectionName {string}
     */
    async deleteCollection(collectionName: string) {
        try {
            await databaseService.deleteCollection(collectionName)
            return true
        } catch (e) {
            throw e
        }
    },

    async addRecord(collectionName: string, record: { foo: string, bar: string, baz: number }) {
        try {
            await databaseService.addRecord(collectionName, record)
            return true
        } catch (e) {
            throw e
        }
    },

    async getRecords(tableName: string, limit: number, skip: number) {
        try {
            return await databaseService.getRecords(tableName, limit, skip)
        } catch (e) {
            throw e
        }
    },

    async deleteRecord(tableName: string, baz: number) {
        try {
            await databaseService.deleteRecord(tableName, baz)
            return true
        } catch (e) {
            throw e
        }
    },

    async updateRecord(tableName: string, baz: number, record: { foo?: string, bar?: string }) {
        try {
            await databaseService.updateRecord(tableName, baz, record)
            return true
        } catch (e) {
            throw e
        }
    }
}

export default application