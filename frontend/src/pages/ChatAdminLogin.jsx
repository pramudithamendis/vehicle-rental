import React, { useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'

const ChatAdminLogin = () => {
    // const [loading, setL] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('')
    const LoginF = () => {
        // setL(true);
        
        const data = {
                email,
                password
        }

	    axios.post('http://localhost:5555/admin/login',data)
        .then((response)=>{
            console.log(response);
            if(response.data.success === "Success"){
                
                navigate('/chat/chats/admin')
                localStorage.setItem('admin', response.data.user);
                
            }
            else{
                setErrorMessage(response.data)
            }
        })
        .catch((error)=>{
            // setL(false);
        })


    }

  return (
    <div>Admin Login
        
        <div >
         
         <input 
           type='text'
           value={email} 
           onChange={(e)=> {setEmail(e.target.value);}}
         /><br/><br/>
         <input 
           type='text'
           value={password} 
           onChange={(e)=> {setpassword(e.target.value);}}
         />

       </div>

        <button className='p-2 bg-sky-300 m-' onClick={LoginF}
        >Save</button>
        <div>
          {errorMessage}
        </div>
    </div>
  )
}

export default ChatAdminLogin