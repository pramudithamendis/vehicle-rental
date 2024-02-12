import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'


const ChatsForAdmin = () => {
    const [loading, setL] = useState(false)
    useEffect(()=>{
        setL(true);
        axios.get('http://localhost:5555/chat/chats')
        .then((response)=>{
            console.log(response);
            setL(false)
        }).catch((error) => {
            console.log(error);
            setL(false);
        })

    }, [])

    return (
    <div>ChatsForAdmin</div>
  )
}

export default ChatsForAdmin