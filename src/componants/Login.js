import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [credencial, setCredencial] = useState({email:"", password:""})
  let history = useNavigate();
  
  const hendleSubmit = async(e) =>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email : credencial.email, password: credencial.password}) // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects

    console.log(json)
    
    if (json.success){
      localStorage.setItem('token', json.authtoken);
      history("/");
      props.showAlert("Logged in Successfully", "succes")
    }
    else{
      props.showAlert("Invalid User","danger")
    }
 
  }

  const onChange = (e) => {
    setCredencial({ ...credencial, [e.target.name]: e.target.value })
  }
  return (
    <div className='container'>
      <form onSubmit={hendleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label> 
          <input type="email" className="form-control" id="email" value={credencial.email} name='email' aria-describedby="emailHelp" onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={credencial.password} name="password" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}

export default Login