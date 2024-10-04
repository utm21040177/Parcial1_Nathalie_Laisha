import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/controller_alumno";

dotenv.config()

mongoose.connect(process.env.urlbase)
.then(()=>{
    console.log("La base de datos funciona correctamente")
})
.catch((error)=>{
    console.log("No funciono nuestra base de datos", error)
})

const app=express()
app.use(cors())

app.listen(4000,()=>{
    console.log("Se esta escuchando correctamente")
})

test()