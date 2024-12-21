// import mongoose from "mongoose";
// import { connectionString } from "@/app/databaseLibrary/db";
import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises';

export async function POST(request){
    const data = await request.formData();
    const file = data.get('file');
    console.log('file===========', file)
    if(!file){
        return NextResponse.json({"response":"no image found", "success": false},{status: 200})
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `../../../../public/${file.name}`
    await writeFile(path, buffer)
    return NextResponse.json({"response":"file uploaded", "success": true},{status: 200})
}