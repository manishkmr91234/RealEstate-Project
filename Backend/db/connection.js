const mongoose = require('mongoose');

module.exports = async () => {

    try {
        await mongoose.connect(
           process.env.MONGO_URI
        )
    }
    catch (err) {
        console.log(err.message);
    };

}