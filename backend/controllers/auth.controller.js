import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
export const signup= async(req, res)=>{
    try {
        const {fullName, username, email, password}=req.body;
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({error: "Invalid email format"});
        }

        const existingUser=await User.findOne({username});
        if(existingUser){
            return res.status(400).json({error: "username already taken!"});
        }
        const existingEmail=await User.findOne({email});
        if(existingEmail){
            return res.status(400).json({error: "Already have an account by this email"})
        }

        if(password.length<6){
            return res.status(400).json({error:"Password must be at least 6 characters long."})
        }
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password, salt);
        const newUser=new User({
            username,
            fullName,
            email,
            password:hashPassword
        })
        if(newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();
            return res.status(201).json({
                _id:newUser._id,
                username:newUser.username,
                email:newUser.email,
                profileImg:newUser.profileImg,
                coverImg:newUser.coverImg,
                followers:newUser.followers,
                following:newUser.following,
            })
        }else{
           return res.status(400).json({error: "Invalid user data."})
        }
    } catch (error) {
        console.log("error in controller signup", error.message);
        return res.status(500).json({error:"Internal server error."});
    }
}


export const login= async(req, res)=>{
    try {
        const{username, password}=req.body;
        const user=await User.findOne({username});
        const isPasswordCorrect=await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password."});
        }

        generateTokenAndSetCookie(user._id, res);

        return res.status(201).json({
            _id:user._id,
            username:user.username,
            email:user.email,
            profileImg:user.profileImg,
            coverImg:user.coverImg,
            followers:user.followers,
            following:user.following,
        })

    } catch (error) {
        console.log("error in login controller", error.message);
        return res.status(500).json({error:"Internal server error."});
    }
}


export const logout= async(req, res)=>{
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged out successfully."})
    } catch (error) {
        console.log("error in logout controller", error.message);
        return res.status(500).json({error:"Internal server error."});
    }
}

export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.user._id).select("-password");
		res.status(200).json(user);
	} catch (error) {
		console.log("Error in getMe controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
