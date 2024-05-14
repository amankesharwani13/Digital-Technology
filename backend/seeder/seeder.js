import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";

const seedProducts = async()=>{
    try{
        await mongoose.connect("mongodb://amankesharwani56781:WCjI0WNEpjayFYvc@ac-rhzvafh-shard-00-00.sxmbb0j.mongodb.net:27017,ac-rhzvafh-shard-00-01.sxmbb0j.mongodb.net:27017,ac-rhzvafh-shard-00-02.sxmbb0j.mongodb.net:27017/?ssl=true&replicaSet=atlas-f61pnv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=DigitalTechnology");

        await Product.deleteMany();
        console.log("Products are deleted");

        await Product.insertMany(products);
        console.log("Products are added");

        process.exit();
    }catch(error){
        console.log(error.message);
        process.exit();
    }
};

seedProducts();
