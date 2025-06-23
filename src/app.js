import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentails: true
}))
//app.use for configuration and for using middleware like cors is middle ware
 
//security config like  

app.use(express.json({limit: "16kb"}))
app.user(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))// public is the public folder in ur project
app.use(cookieParser())

export { app }



