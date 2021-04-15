const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECREET
})


const from = "SavanaPoint"
const to = "258849350920"
const text = 'SavanaPoint Is new Startup'

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})

const dotenv = require('dotenv')
dotenv.config()
const { Client } = require('@paymentsds/mpesa');

const client = new Client({
    apiKey: process.env.API_KEY,             // API Key
    publicKey: process.env.PUBLIC_KEY,         // Public Key
    serviceProviderCode: process.env.SERVICE_PROVIDE_CODE // input_ServiceProviderCode
})

const paymentData = {
    from: '848222772',               // input_CustomerMSISDN
    reference: '11115',              // input_ThirdPartyReference
    transaction: 'T12344CC',          // input_TransactionReference
    amount: '10'                     // input_Amount
};
 
client.receive(paymentData).then(r => {
    console.log('Success')
 }).catch(e =>{
    console.log(e)
 });