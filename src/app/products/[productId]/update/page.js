'use client'
import Link from "next/link";
import * as services from "../../../plugins/productServices";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Page(props){
    const Router = useRouter();
    const [productId,setId]= useState();
    const [name,setName]= useState();
    const [price,setPrice]= useState();
    const [company,setCompany]= useState();
    const [color,setColor]= useState();
    const [category,setCategory]= useState();
    const updatedetailfunc = async() =>{
        console.log(name, price, company, color, category);
        let json = {name, price, company, color, category} ; 
        let response =  await services.productUpdateById(json, productId);
        if(response){
            Router.push('/products')
        }
    }
    useEffect(()=>{
        const fetchData = async()=>{
            const Id = (await  props.params).productId ;
            setId(Id)
            let response =  await services.productDetail(Id);
            setName(response.name)
            setPrice(response.price)
            setCompany(response.company)
            setColor(response.color)
            setCategory(response.category)
        }

        fetchData().catch(console.error); 
    },[])
    return(
        <div className="container-md">
            <h3 className="text-center my-3">Update Products</h3>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" value={name || ''} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Price</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" value={price  || ''} onChange={(e)=>setPrice(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Company</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" value={company  || ''} onChange={(e)=>setCompany(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Color</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" value={color || ''} onChange={(e)=>setColor(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" value={category || ''} onChange={(e)=>setCategory(e.target.value)} />
            </div>
            <div className="mb-3 d-md-flex justify-content-md-center">
                <button  className="btn btn-primary  mx-3" type="button" onClick={updatedetailfunc}>Submit</button>
                <Link  href="/products" className="btn btn-danger  " type="button">Back</Link>
            </div>
        </div>
    );
}