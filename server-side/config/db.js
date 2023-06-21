const mongoose = require("mongoose");


const uri = process.env.DATABASE_URL || process.env.MONGO_URI;


const connectDB = async () => {

    try {

        console.log(`MONGO_URI: ${uri}`.green.underline.bold);

        const conn = await mongoose.connect(uri);

        console.log(`MONGO_URI: ${uri}`.green.underline.bold);

        console.log(

            `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold

        );

    } catch (error) {

        console.log(error);

        process.exit(1);

    }

};

module.exports = connectDB;
