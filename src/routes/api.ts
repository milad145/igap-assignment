import express, {Request, Response} from "express"

let router = express.Router();

import {setErrorResponse, setResponseCode} from '../utils/utility'
import {createCollection} from '../core/application'

//*********************** POST ***********************//
router.post("/create", (req: Request, res: Response) => {
    let {tableName} = req.body;
    createCollection(tableName)
        .then(payload => res.json({payload}))
        .catch(err => setErrorResponse(req, res, err))
});


//*********************** GET ***********************//
router.get("/", (req: Request, res: Response) => {
    res.json({result: true})
});

export default router;
