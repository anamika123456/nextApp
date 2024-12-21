import { connectionString } from "@/app/databaseLibrary/db";
import { Login } from "@/app/databaseLibrary/model/login";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request){
    await mongoose.connect(connectionString);
    const data = await Login.find();
    let request1 = await request.json() ;
    
    let returnData =  data.filter((element)=> element.name == request1.username && element.password == request1.password);
    let responseData = (returnData.length > 0) ? {'response': 'login', 'success': true} : {'response': 'record not found', 'success': false}
    return NextResponse.json(responseData,{status: 200})
} 