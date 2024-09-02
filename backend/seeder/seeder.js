import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";

// mongoose.set('strictQuery', true); 
const seedProducts = async()=>{
    try{
        await mongoose.connect("mongodb+srv://amankesharwani1309:amankesharwani1309@digital.21id0.mongodb.net/?retryWrites=true&w=majority&appName=Digital")

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
