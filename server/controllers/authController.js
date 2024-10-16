import User from "../models/User.js"
import bcrypt from 'bcrypt' 

const login = async(req,res) => {
  try{
        const{email,password} = req.body;
        const user = await User.findOne({email})
        if(!user){
          res.status(404).json({success:false ,error:"User Not Found" })
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
          res.status(404).json({success:False,error:"Wrong Password"})
        }
  }catch(error)
  {
    console.log(error.message)
  }

}

export {login} 