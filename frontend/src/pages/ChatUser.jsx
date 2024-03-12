import React, { useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'

const ChatUser = () => {
    const [loading, setL] = useState(false)
    const [idN, setidN] = useState();
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    const CreateF = () => {
        // setL(true);
        
        const data = {
                idN,
                password
        }

	    axios.post('http://localhost:5555/user/create',data)
        .then((response)=>{
            console.log(response);
            navigate('/user/create');
        })
        .catch((error)=>{
            // setL(false);
        })


    }

  return (
    <div>Create
        
        <div >
         
         <input 
           type='text'
           value={idN} 
           onChange={(e)=> {setidN(e.target.value);}}
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

export default ChatUser