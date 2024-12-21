"use client"
import * as services from "../plugins/productServices";
export default function Page(props){
    
    const deleteFunc= async()=>{
        let response = await services.productDeleteById(props.productId);
        if(response){
            alert('data delete successfully')
        }
    }
    return(
        <button className="btn btn-danger" type="button" onClick={deleteFunc}>Delete</button>
    );
}