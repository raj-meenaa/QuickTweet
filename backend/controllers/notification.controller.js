import Notification from "../models/notification.model.js";
import User from "../models/user.model.js";


export const getNotification=async (req, res)=>{
    try {
        const userId=req.user._id;
        const notification=await Notification.find({to: userId}).sort({createdAt: -1}).populate({path: "from", select: "username profileImg"});

        await Notification.updateMany({to: userId}, {read: true});


        res.status(200).json(notification);
    } catch (error) {
        console.log("error in getNotification controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const deleteNotifications=async (req, res)=>{
    try {
        const userId=req.user._id;
        await Notification.deleteMany({to:userId});
        res.status(200).json({message: "Notifications delete successfully."});
    } catch (error) {
        console.log("error in deleteNotifications controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const deleteNotification=async (req, res)=>{
    try {
        const notificationId=req.params.id;
        const userId=req.user._id;
        const notification=await Notification.findById(notificationId);
        if(!notification) return res.status(404).json({error:"Notification not found."});

        if(notification.to.toString() !== userId.toString()){
            return res.status(403).json({message: "You are not allowed to delete this message. "});
        }
        await Notification.findByIdAndDelete(notificationId);
        res.status(200).json({message: "Notification delete successfully."});
    } catch (error) {
        console.log("error in deleteNotification controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}