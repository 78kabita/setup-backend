// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import connectDB from "./db/indexs.js";


dotenv.config({
   path: './env'
})

connectDB()








/* dababase connection 1
import express from "express";
( async () => {
   try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      application.on("error", (error) => {
         console.log("ERRR:",error);
         throw error
      })

      application.listen(process.env.PORT, () =>{
         console.log(`App is listening on port ${process.env.PORT}`);
      })
   }catch(error){
      console.log("ERROR:", error)
      throw err
   }
})()
   */