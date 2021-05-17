require("dotenv").config();

module.exports=
{
    appKey: process.env.APP_KEY,
    appURL: process.env.APP_URL,
    appPort: process.env.APP_PORT
}