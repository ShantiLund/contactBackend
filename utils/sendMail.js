const nodemailer=require("nodemailer");
const path = require("path");

module.exports = async function (from, to, subject, html) {
    try {
        const transporter=nodemailer.createTransport({
            service:'gmail',
            host: "smtp.gmail.com",
        
        
            auth:{
                
                    type: "OAuth2",
                    user:'shanti.cs15@iba-suk.edu.pk',
                    clientId:'462013622902-t8g5jm0kljreudaghm6efohnk62p9mkq.apps.googleusercontent.com',
                    clientSecret:'LgRxv5c29xJRra1x25Sq5olG',
                    refreshToken:'1//04B-Kmaq7MkKzCgYIARAAGAQSNwF-L9IrFCpJDBbCjPT1uzKFv28vojJK-QYE8Zf3YVq6yOy6VnIRh0_JdrmGz3xVh4PElRIfcks'
                
               
            }
           
        });
        const data = { from, to, subject, html };
     console.log(data);
       // const result = await transporter.sendMail(data);
        transporter.sendMail(data,function(error,info){
            if(error)
            {
                console.log(error);
            }
            else
            {
                console.log('Email Sent'+info.response)
            }
        })
    
    
          }catch(error)
        {
                console.log(error)
        }
        
    
    //     return {
            
    //       success: true,
    //       message: result,
    //     };
    //   } catch (error) {
    //     return {
    //       success: false,
    //       message: "Failed to sent.",
    //       error: error,
    //     };
    //   }
};
