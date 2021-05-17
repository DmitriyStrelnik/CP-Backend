require("dotenv").config();

module.exports=
{
    appKey: process.env.KEY,
    appURL: process.env.URL,
    appPort: process.env.PORT
}