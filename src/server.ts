import http from 'http';

import express, {} from "express";
import dotenv from 'dotenv';
dotenv.config()

import {exception, unhandled} from "./routes/error";
import api from "./routes/api";
import {DatabaseService} from './data/db';

let databaseService = new DatabaseService();

databaseService.connectToDatabase()
    .then(() => initiateServer())
    .catch(err => console.error(err))

function initiateServer() {
    const app = express();

    app.use(express.text());
    app.use(express.urlencoded({limit: "0.4mb", extended: true}));
    app.use(express.json({limit: "2.0mb"}));


    app.use('/api', api);

    app.use(unhandled);
    app.use(exception);

    let server = http.createServer({}, app);

    server
        .listen(process.env.port, () => {
            console.log('Express HTTPS server listening on port %d!', process.env.port)
        })
        .on('error', function (err: Error) {
            console.error("HTTPS server error:", err.message);
            process.exit(1);
        })

}
