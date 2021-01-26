import express from "express";
import config from './config'

const { ENV, PORT } = config;

const app = express()

app.get('*', (req, res) => {
    res.send({
        hello: 'express'
    })
})

app.listen(PORT, (err) => {
    if (err) console.error(err)
    else console.log(`Server running on port ${PORT}`)
})