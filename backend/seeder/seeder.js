import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";

// mongoose.set('strictQuery', true); 
const seedProducts = async()=>{
    try{
        await mongoose.connect("mongodb+srv://amankesharwani56781:WCjI0WNEpjayFYvc@digitaltechnology.sxmbb0j.mongodb.net/digitalTechnology?retryWrites=true&w=majority&appName=DigitalTechnology")

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
