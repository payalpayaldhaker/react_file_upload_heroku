import axios from 'axios';
import React, { useState } from 'react';
//import swal from 'sweetalert';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config = require('../config.json');

//RFC
export default function FileUploaded() {
    //1. State/Hoook Variable
    const [file,setFile] = useState('')
    const [data,setData] = useState({ 
        precent:0,
        loading:false
    })


    //2. Function
    let handleChange = (e)=>{
        console.log('Changed',e[0])
        setFile(e[0])
    }
    let uploadImage = async (e)=>{ //Fat Arrow Function / Arrow function ES6  e=event
        e.preventDefault();
        console.log('OKOKOK');

        
        
        //let object = new ClassName();
        let data = new FormData();
        data.append('files',file);

            try {
                setData({ 
                    
                    percent:0,
                    loading:true
                });
               
                
                let upload_response =   await axios({
                    method: 'POST',
                    url:`${ config.dev_url }/api/upload`,
                    data,
                    onUploadProgress:(progress) =>{
                        console.log(progress);
                        setData({ 
                            loading:true,
                            precent:Math.ceil(progress.loaded / progress.total *100)
                        })


                    }
                })
                setData({ 
                    
                    loading:false
                });
                toast("file uploaded succesfullyyy");
              console.log('file upload response ',upload_response);
              
      
            } catch (error) {
                console.log(error);
            }
        //await always wait for PO / Promise Object
       


    }

    //3. Return Statement JSX
    return (
        <>
            <div className="row">
                <div className="col-6 offset-3 ">
                    <h1>File Uploaded with  Axios api</h1>
                    <form  onSubmit={(e)=>{ uploadImage(e) }}>
                        <div className="mb-3">
                            <label htmlFor="file" className="form-label"> File uploaded</label>
                            <input onChange={ (e)=>{ handleChange(e.target.files) } } type="file" accept="image/*" name="files" className="form-control" id="file"/>
                        </div>
                        <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                       
                    </form>
                    { 
                            data.loading &&
                       <div className="progress mt-5">
                                 <div className="progress-bar progress-bar-striped  bg-info" role="progressbar" style={{width: data.precent+'%'}} aria-valuenow={data.precent} aria-valuemin={0} aria-valuemax={100}>{ data.precent }%</div>
                        </div>
                    }
                

                    <ToastContainer />

                </div>
            </div>
        </>
    );
}