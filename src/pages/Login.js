import React,{ useState} from 'react'


//react functional components

export default function Login() {
    //state
                const [data, setData ] = useState({});
                

    //function
    let handleChange = (e)=>{
        console.log(e.target.classlist.contains('p_username'));
        if(e.target.classlist.contains('p_username')){ 
                //username vala block
            console.log('username block')
        }

        if(e.target.classlist.contains('p_password')){ 

            //password vala block
            console.log('password block')
        }
    }
    let login =(e)=>{ 
        e.preventDefault();
        console.log('hello');
    }

    //return Statement
  return (

    <> 
        <div className="row"> 
            <div className="col-6 offset-3"> 
     <form onSubmit={(e)=>{ login(e)}}>
            <h1 className="text-center">login form </h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label p_username">Email address</label>
                <input type="email" name="identifier"  onChange={(e)=>{ handleChange(e)  }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label p_password">Password</label>
                <input type="password" name="password" onChange={(e)=>{ handleChange(e)  }} className="form-control" id="exampleInputPassword1" />
            </div>
            
        <button type="submit" className="btn btn-primary">Submit</button>   
    </form>
            </div>
        </div>
       

    </>

  );
}
