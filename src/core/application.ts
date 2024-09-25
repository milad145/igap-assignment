import {DatabaseService} from '../data/db';

const databaseService = new DatabaseService();

/**
 * create collection with custom collection name
 * @param collectionName {string}
 */
export function createCollection (collectionName: string) {
    return new Promise((resolve, reject) => {
        databaseService.createCollection(collectionName)
            .then(() => resolve(true))
            .catch(err => reject(err))
    })
}


