import { NextResponse } from "next/server";
import {connectionString} from '../../../databaseLibrary/db';
import {Product} from '../../../databaseLibrary/model/product';
import mongoose from "mongoose";

export async function GET(request,content){
    await mongoose.connect(connectionString);
    let productId = content.params.productId
    const data = await Product.findById({"_id": productId});
    return NextResponse.json({'response':data, 'success': true},{status : 200})
}


export async function DELETE(request,content){
    await mongoose.connect(connectionString);
    let productId = content.params.productId
    const data = await Product.deleteOne({"_id": productId});
    return NextResponse.json({'response':data, 'success': true},{status : 200})
}

export async function PUT(request,content){
    await mongoose.connect(connectionString);
    let payload = await request.json();
    let productId = content.params.productId
    const data = await Product.findOneAndUpdate({"_id": productId},payload);
    return NextResponse.json({'response':data, 'success': true},{status : 200})
}