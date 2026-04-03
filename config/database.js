const mongoose=require('mongoose');

require('dotenv').config();

const url=process.env.Database_url;

const dBConnect= () => {
    mongoose.connect(url)
    .then( () => console.log("DB Connected Successfully"))
    .catch( (err) => {
        console.error(err);
        console.log("Issue in Connection with DB");
        process.exit(1);
    })
}

module.exports=dBConnect;
