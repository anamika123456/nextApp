"use client"
import { useState } from 'react';
import * as uploadFileServices from '../plugins/uploadFileServices'

export default  function Page(){
    const [fileData, setFiledata] = useState();
    const uploadFile=async(e)=>{
        e.preventDefault();
        let data = new FormData();
        data.set('file', fileData);
        let response = await uploadFileServices.uploadDocument(data)
        if(response){
            alert('File upload successfully!')
        }else{
            alert('There is some error to upload file')
        }
    }
    return(
        <div className="container-md">
            <form onSubmit={uploadFile} enctype="multipart/form-data">
                <h3 className="text-center my-3">Upload File</h3>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="file" name="file" className="form-control" id="exampleFormControlInput1"  onChange={(e)=> setFiledata(e.target.files)} />
                </div>
                <div className="mb-3 d-md-flex justify-content-md-center">
                    <button  type="submit" className="btn btn-primary mx-3">Submit</button>
                </div>
            </form>
        </div>
    );
}