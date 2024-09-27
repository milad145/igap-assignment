// cli.js

import yargs from 'yargs';
import application from './core/application';

// Configure yargs to parse command-line arguments
const argv: any = yargs
    .command('add', 'Add a record to a table', {
        table: {
            description: 'the name of the table',
            alias: 't',
            type: 'string',
            demandOption: true,
        },
        record: {
            description: 'the record to add in JSON format',
            alias: 'r',
            type: 'string',
            demandOption: true,
        },
    })
    .command('del', 'Delete a record from a table', {
        table: {
            description: 'the name of the table',
            alias: 't',
            type: 'string',
            demandOption: true,
        },
        baz: {
            description: 'the baz value of the record to delete',
            alias: 'b',
            type: 'number',
            demandOption: true,
        },
    })
    .command('get', 'Get all records from a table', {
        table: {
            description: 'the name of the table',
            alias: 't',
            type: 'string',
            demandOption: true,
        },
    })
    .help()
    .alias('help', 'h')
    .argv;

// Function to add a record
const addRecord = async (tableName: string, recordString: string) => {
    try {
        const record = JSON.parse(recordString);
        const result = await application.addRecord(tableName, record);
        console.log(`Record added: ${JSON.stringify(result)}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error adding record: ${error.message}`);
        } else {
            console.error(`Unknown error occurred: ${String(error)}`);
        }
    }
};

// Function to delete a record
const deleteRecord = async (tableName: string, baz: number) => {
    try {
        const result = await application.deleteRecord(tableName, baz);
        console.log(`Record with baz ${baz} deleted from ${tableName}: ${result}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error deleting record: ${error.message}`);
        } else {
            console.error(`Unknown error occurred: ${String(error)}`);
        }
    }
};

// Function to get records
const getRecords = async (tableName: string) => {
    try {
        const records = await application.getRecords(tableName, 100, 0); // Adjust limits as needed
        console.log(`Records in ${tableName}:`, JSON.stringify(records, null, 2));
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error getting records: ${error.message}`);
        } else {
            console.error(`Unknown error occurred: ${String(error)}`);
        }
    }
};

// Main execution based on the command
const command = argv._[0];

if (command === 'add') {
    addRecord(argv.table, argv.record);
} else if (command === 'del') {
    deleteRecord(argv.table, argv.baz);
} else if (command === 'get') {
    getRecords(argv.table);
} else {
    console.log('Unknown command. Please use add, del, or get.');
}
