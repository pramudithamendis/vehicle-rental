import React, { useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'

const ChatAdmin = () => {
    const [loading, setL] = useState(false)
    const [email, setEmail] = useState();
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    const CreateF = () => {
        // setL(true);
        
        const data = {
                email,
                password
        }

	    axios.post('http://localhost:5555/admin/create',data)
        .then((response)=>{
            console.log(response);
            navigate('/home/admin');
        })
        .catch((error)=>{
            // setL(false);
        })


    }

  return (
    <div>Create admin
        
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

        <button className='p-2 bg-sky-300 m-' onClick={CreateF}
        >Save</button>
    </div>
  )
}

export default ChatAdmin