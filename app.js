const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const mongoose = require("mongoose")
// const bodyParser = require('body-parser');
const cors = require("cors")
const transactionRouter = require('./routes/transactionRoutes')
const userRouter = require('./routes/userRoutes')
// require('dotenv').config();


app.use(express.json())


app.use(cors())

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json());

app.use((req,res,next)=>{
    console.log("HTTPS Method" + req.method + " , URL" +req.url)
    next();
})
// app.use("/transactions",transactionRouter)
// app.use("/users",userRouter)



// mongoose.connect(process.env.MONGO_URL, () => {
//     console.log("Connected successfully");
// })
// mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://mokshkukreja999:moksh90@cluster0.frzozja.mongodb.net/expense?retryWrites=true&w=majority&appName=Cluster0", () => {
    console.log("Connected successfully");
})
mongoose.set('strictQuery', true);



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
