const express=require('express')
const morgan=require('morgan')
require('colors')
require('dotenv').config({path:'dev.env'})
const connectDB =require('./db/db')
connectDB()
const app=express()

app.use(express.json())
const PORT=process.env.PORT||5000

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}

const userRoutes=require('./routes/userRoutes')
const noteRoutes=require('./routes/notesRoutes')
app.use('/api/users',userRoutes)
app.use('/api/notes',noteRoutes)


app.listen(PORT,()=>{console.log(`Server listening on port ${PORT}`.yellow)})