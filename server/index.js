import  Express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/student.js";

// create Express Object 
const app = Express();

// use bodyparser middleware 
app.use(bodyParser.json({limit:"20mb", extended : true}));  // limit : 20mb will set the max size of JSON file 20mb
app.use(bodyParser.urlencoded({limit:"20mb", extended : true})); 

// use cors middlewares
app.use(cors());

//create port number
const PORT = process.env.PORT || 5000;

// to connect mongoDB 
const CONNECTION_URL = "<mongodb-url>";
mongoose.connect(CONNECTION_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {
    console.log("DB connected");
})
.catch(() => {
    console.log("DB not connected");
});
// mongoose.set("useFindAndModify",false);

//middleware routes
app.use("/students", studentRoutes);


// server 
app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
});
