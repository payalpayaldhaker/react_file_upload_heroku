// import React,{ useState} from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

import FileUploaded from "./FileUploaded";
const config2 = require('../config2.json');


//react functional components

export default function Login() {
    //state
                const [data1, setData ] = useState({ 
                    identifier:'pbayal@gmail.com',
                    password:'pbayal'
                });
                const [user,  setUser] = useState({ 
                    user:null,
                    is_loggedin:false
                })

                useEffect(()=>{
                    alert('page loaded successsfullly');
                    try {
                            //get the local localStorage

                        let user =    JSON.parse(localStorage.getItem('user'))
                            if(user){ 
                                    //login
                                    setUser({ 
                                        ...user,
                                        is_loggedin:true
                                    })
                            }
                            else{ 

                                //login nhi hai
                                setUser({ 
                                    ...user,
                                    is_loggedin:false
                                })
                            }
                    } catch (error) {
                        console.log(error);
                    }

                    
                },[])
                

    //function
  
    let handleChange = (e)=>{
        console.log(e.target.classList.contains('p_username'));
        if(e.target.classList.contains('p_username')){ 
                //username vala block
                console.log(e.target.value);
                setData({ 
                    //get the prious data help the spread opretors ...(spread opretors) place here
                    ...data1,

                    ///now set the value of key ya property  kic
                    identifier:e.target.value
                })
                console.log('username block')

        }
        if(e.target.classList.contains('p_password')){ 
            //password vala block
            setData({ 
                //get the prious data help the spread opretors ...(spread opretors) place here
                ...data1,

                ///now set the value of key ya property  ki
                password:e.target.value
            })
            console.log('paasword block');
    }
}
    let login = async(e)=>{ 
        e.preventDefault();
        console.log('okokok');
       console.log(data1);
       //awit ho aage  vo po 
       //data ko dstruching kiya hai
        let {data} = await axios.post(`${config2.dev_url}/api/auth/local`,{
                identifier: data1.identifier,
                password: data1.password ,
        });
        console.log(data);

        setUser({ 
            //get the privious data plca header
            ...user,
            //set the value
            is_loggedin:true
        });

        localStorage.setItem('user',JSON.stringify(data));
    }




       
   

    //return Statement
  return (

    <> 
        <div className="row"> 
            <div className="col-6 offset-3"> 
     <form  onSubmit={(e)=>{ login(e)}}>
            <h1 className="text-center">login form </h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label ">Email address</label>
                <input type="email" name="identifier"   className="form-control p_username" onChange={(e)=>{ handleChange(e)  }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label ">Password</label>
                <input type="password" name="password" className="form-control p_password" onChange={(e)=>{ handleChange(e)  }} id="exampleInputPassword1" />
            </div>
            
        <button type="submit" className="btn btn-primary">Submit</button>   
    </form>
            </div>
        </div>
        {
         user.is_loggedin &&
         <FileUploaded/>}
       
       

    </>

  );
}
 