import mongoose from "mongoose"

let isconnected=false;

export const connectdb=async()=>{
    mongoose.set('strictQuery',true)

    if(isconnected){
        console.log("mongo is already connected");
        return;
    }
    try{
        await mongoose.connect('mongodb://localhost:27017/NextLogin');
        isconnected=true;
        console.log("mongo is connected");
    }
    catch(e){
        console.log(e);
    }
}