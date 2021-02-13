const sendMail=require('../../utils/sendMail');
const ejs = require("ejs");
module.exports = async function (body) {
console.log(body);
    const {name, email}=body;
    const from="shanti.cs15@iba-suk.edu.pk";
    const subject="Registration Confirmation";
    data={
        name:name,
        email:email

    }
    let emailbody;
    
    ejs.renderFile("./views/notificationEmail.ejs",{data:data},function(err,str){
        if(str)
        {  console.log(str);
            //console.log(emailbody);
            emailbody=str
        }
        else if(err){
            console.log(err);
        }
    })
    sendMail(from, email,subject,emailbody);

    return {

        success:true

    };
}