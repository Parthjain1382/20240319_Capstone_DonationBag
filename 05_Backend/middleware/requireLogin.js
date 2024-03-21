import 'dotenv/config'
import jwt from 'jsonwebtoken'
import Users from '../model/Users.js'

//Require Function to Login
const requireLogin = (req,res,next)=>{
    const{authorization} = req.headers
    
    if(!authorization){
        res.status(401).json({error:"you are not logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,process.env.SECRET_KEY,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"you must be logged in"})
        }
        const userdata = payload
        req.user = userdata
        next()
        })
    }


// Middleware to check if the user is an admin
const isAdmin = async (req, res, next) => {
  const{authorization} = req.headers
  if(!authorization){
    res.status(401).json({error:"you are not logged in"})
  }
  const token = authorization.replace("Bearer ","")
  try {
    const email = req.decoded.email;
    const user = await Users.findOne({ email });

    if (!user || user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Permission denied. Only admins can perform this action.",
      });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
    
export default {requireLogin,isAdmin}