const jwt = require('jsonwebtoken')
const User = require('../../Mongodb/models/user.model')

const auth = async(req, res, next) => {

    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, process.env.JWT_KEY)
    try {
        const user = await User.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        return{
            success:false,
            message:"Not authorized to access this resource"
        }
        
    }

}
module.exports = auth