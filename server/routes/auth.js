import express from "express";
import mongoose from "mongoose";
import '../../server/models/user.js'
import bcryptjs from "bcryptjs"

const router = express.Router();
const User = mongoose.model("User")

router.get('/', (req,res)=>{
    res.send("hello from routes/auth.js")
});

router.post('/signup',(req,res)=>{
    const {name, email, password}= req.body;
    if(!email || !password || !name){
        return res.status(422).json({error:"please add all details"})
    }
    User.findOne({email:email})
        .then((savedUser) => {
            if(savedUser){
                res.json({error:"user already Exists with that email"})
            }
            bcryptjs.hash(password,12)
            .then(hashedpassword =>{
                const user = new User({
                    name : name,
                    email : email,
                    password : hashedpassword
                })
                user.save()
                    .then(user => {
                        res.json({message:"saved successfully on DB"})
                    })
                    .catch(err =>{
                        console.log(err);
                    })
            })
            
        })
        .catch(err => {
            console.log(err);
        })

});

export default router;