const mongoose=require('mongoose');
const dotenv=require('dotenv');
const options={
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: true
}

const database=mongoose.connect(process.env.MONGODB_URL,options).then(
   console.log("DB connected")
).catch(err=>{
    console.log("DB error here");
});
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });
module.exports=database;