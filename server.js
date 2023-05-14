import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import DefaultData from './default.js'
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';

dotenv.config();

// connection to mongodb
// const dbURL = `mongodb://127.0.0.1:27017/flipkartClone`;
const dbURL = process.env.MONGODB_URI;
try {
    mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('connected to db');
    })
}catch(error){
    console.log('Error while connecting to database', error.message);
};

const app = express();
app.use(cors());
app.use(bodyParser.json({ extendend: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => (
    console.log(`Listening on port ${PORT}`)
));

DefaultData(); 

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'callback'
paytmParams['EMAIL'] = 'mohitFlip@gmail.com'
paytmParams['MOBILE_NO'] = '1234567890';
