const mongoose = require('mongoose');
const {mongo_atlas} = require('./keys.js');
const mongo_URI = process.env.NODE_ENV === 'production'? mongo_atlas : 'mongodb://localhost:27017/restaurant'
mongoose.connect(mongo_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(()=>console.log('Successfully conected to MongoDB'))
.catch(console.error)