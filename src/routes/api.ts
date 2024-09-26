import express, {Request, Response} from "express"

let router = express.Router();

import {setErrorResponse, setResponseCode} from '../utils/utility'
import application from '../core/application'
import {isNumber} from "@nestjs/common/utils/shared.utils";

//*********************** POST ***********************//
router.post("/create", async (req: Request, res: Response) => {
    let {tableName} = req.body;
    try {
        let result = await application.createCollection(tableName)
        res.json({result})
    } catch (err) {
        setErrorResponse(req, res, err as Error)
    }
});

router.post("/record/:tableName", async (req: Request, res: Response) => {
    let {tableName} = req.params;
    let {foo, bar, baz} = req.body;
    if (
        (typeof foo === "string" && foo) &&
        (typeof bar === "string" && bar) &&
        (typeof baz === "number")
    ) {
        try {
            let record = {foo, bar, baz}
            let result = await application.addRecord(tableName, record)
            res.json({result})
        } catch (err) {
            setErrorResponse(req, res, err as Error)
        }
    } else
        setResponseCode(req, res, 400)
});


//*********************** PUT ***********************//
router.put("/record/:tableName/:recordBaz", async (req: Request, res: Response) => {
    let {tableName, recordBaz} = req.params;
    let {foo, bar} = req.body;
    let baz = Number(recordBaz)
    if (
        ((typeof foo === "string" && foo) || typeof foo === "undefined") &&
        ((typeof bar === "string" && bar) || typeof bar === "undefined") &&
        (!isNaN(baz))
    ) {
        try {
            let record: { foo?: string, bar?: string } = {}
            if (foo)
                record.foo = foo;
            if (bar)
                record.bar = bar;
            let result = await application.updateRecord(tableName, baz, record)
            res.json({result})
        } catch (err) {
            setErrorResponse(req, res, err as Error)
        }
    } else
        setResponseCode(req, res, 400)
});


//*********************** DELETE ***********************//
router.delete('/table', async (req: Request, res: Response) => {
    let {tableName} = req.body;
    if (typeof tableName === "string" && tableName.length > 0) {
        try {
            let result = await application.deleteCollection(tableName)
            res.json({result})
        } catch (err) {
            setErrorResponse(req, res, err as Error)
        }
    } else
        setResponseCode(req, res, 400)
})

router.delete('/record/:tableName/:recordBaz', async (req: Request, res: Response) => {
    let {tableName, recordBaz} = req.params;
    let baz = Number(recordBaz)
    if (!isNaN(baz)) {
        try {
            let result = await application.deleteRecord(tableName, baz)
            res.json({result})
        } catch (err) {
            setErrorResponse(req, res, err as Error)
        }
    } else
        setResponseCode(req, res, 400)
})

//*********************** GET ***********************//
router.get("/", (req: Request, res: Response) => {
    res.json({result: true})
});

router.get('/records/:tableName', async (req: Request, res: Response) => {
    let {tableName} = req.params;
    let {limit, skip} = req.query
    const limitNumber: number = (typeof limit === 'string' && Number(limit) > 0) ? parseInt(limit) : 10;
    const skipNumber: number = (typeof skip === "string" && Number(skip) > 0) ? parseInt(skip) : 0;
    let result = await application.getRecords(tableName, limitNumber, skipNumber)
    res.json({result})
})

export default router;
