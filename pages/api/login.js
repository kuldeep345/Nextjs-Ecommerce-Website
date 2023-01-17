import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'

const handler = async(req,res) =>{
    if(req.method == 'POST'){
        const user = await User.findOne({email:req.body.email})
      
        if(user){
            console.log(user)
            let bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
            let decryptpassword = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
          
    
            if(req.body.email == user.email && req.body.password == decryptpassword){
                let token = jwt.sign({email:user.email , name:user.name } , process.env.JWT_SECRET,{ expiresIn:'2d'})
                res.status(200).json({ success:true , token})
            }
            else{
                return res.status(400).json({error:"Invalid credentials"})
            }
        }
        else{
            return res.status(400).json({error:"Invalid credentials"})
        }

    }
    else{
        res.status(400).json({error:"Internal server error"})
    }
}

export default connectDb(handler)