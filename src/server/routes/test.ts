import * as express from 'express'

export const testEndpoint = (router) => {
    router.get('/test', (req, res, next) => {
        res.send("You're in homie.");
    });
};
