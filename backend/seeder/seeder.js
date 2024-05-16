import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";

// mongoose.set('strictQuery', true); 
const seedProducts = async()=>{
    try{
        await mongoose.connect("mongodb+srv://amankesharwani1234:amankesharwani4321@cluster2.rzwbldc.mongodb.net/Cluster2?retryWrites=true&w=majority&appName=Cluster2")

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
