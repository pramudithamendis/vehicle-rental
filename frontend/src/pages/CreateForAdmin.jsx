import React, { useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import './Create.css'
import BackButton from '../components/BackButton'

const CreateForAdmin = () => {
  const [title, setTitle] = useState('');

  const [loading, setL] = useState(false);
  const navigate = useNavigate();

  const CreateF = () => {
    const data = {
      title
    };
    setL(true);
    axios.post('http://localhost:5555/chat/create/admin', {"title": "done?"}) //data)
      .then((response) => {
        console.log(response);
        navigate('/chat/chats');
      })
      .catch((error) => {
        setL(false);
      })
  }

  return (
    <div className='Create_parent'>
      <div className='Create_parent_leftpanel phonescreen'><BackButton /></div>
      <div className="Create_parent_middlepanel">
        

          {/* <input
            className='Create_parent_middlepanel_title'
            type='text' placeholder='Title of the issue'
            value={title}
            onChange={(e) => { setTitle(e.target.value); }
            }
          />
          <input
            className='Create_parent_middlepanel_vehicle'
            type='text' placeholder='Vehicle type'
            value={vehicle}
            onChange={(e) => { setV(e.target.value); }
            }
          />
          <input
            className='Create_parent_middlepanel_issue'
            type='text' placeholder='Type your issue here'
            value={issue}
            onChange={(e) => { setI(e.target.value); }
            }
          /> */}
           <button className='Create_parent_middlepanel_button' onClick={CreateF}
      >Save</button>
        
      </div>



     
    </div>
  )
}

export default CreateForAdmin