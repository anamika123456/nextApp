import { NextResponse } from "next/server";
import {connectionString} from '../../databaseLibrary/db';
import {Product} from '../../databaseLibrary/model/product';
import mongoose from "mongoose";

export async function GET(){
    await mongoose.connect(connectionString);
    const data = await Product.find();
    return NextResponse.json({'response':data, 'success': true},{status : 200})
}

export async function POST(request){
    let payload = await request.json();
    await mongoose.connect(connectionString);
    let product = new Product(payload)
    const data = await product.save();
    // const data = await new Product(payload).save(); minified way to save data in mongo db
    return NextResponse.json({'response':data, 'success': true},{status : 200})
}