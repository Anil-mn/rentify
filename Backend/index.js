import express from 'express';
import cors from 'cors';
import indexRouter from './routes/index.js'; 
import bodyParser from "body-parser";
import './config/db.js'

// const cookieParser = require("cookie-parser");


const app = express();





const PORT = 4001;



app.use(cors());

app.use(bodyParser.json());



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api',indexRouter)


app.get('/', (req, res) => {
  res.send('Rentify!');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// export default app;