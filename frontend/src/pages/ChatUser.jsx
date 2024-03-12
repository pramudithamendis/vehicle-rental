import React, { useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'


const ChatUser = () => {
    const [loading, setL] = useState(false)

    const CreateF = () => {
        // setL(true);
	    axios.post('http://localhost:5555/user/create',{
            "idN": 1234,
            "password": "pass"
        }).then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            // setL(false);
        })


    }

  return (
    <div>Create
        

        <button className='p-2 bg-sky-300 m-' onClick={CreateF}
        >Save</button>
    </div>
  )
}

export default ChatUser