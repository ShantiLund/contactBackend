const mongoose=require("mongoose");
const mongodb=require("../../../Mongodb/db.connect").database;
const User = require('../../../Mongodb/models/user.model');
const sendMail=require('../sendNotificationEmail');
module.exports=async (request)=>{
   
  let { body } = request;
  console.log(body);
  const user=new User(body);
 
  await user.save();
  await sendMail(body);
  const token=await user.generateAuthToken();
  return {
    success: true,
    message: "New user Added ",
    token:token
  };
}