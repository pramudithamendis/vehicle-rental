import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'

import { Link } from 'react-router-dom'

import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import './Chats.css'


const ChatsForAdmin = () => {
    const [chats, setS] = useState([]);
    const [loading, setL] = useState(false)



    useEffect(()=>{
        setL(true);
        axios.get('http://localhost:5555/chat/chats')
        .then((response)=>{
            setS(response.data);
            console.log(response);
            setL(false)
        }).catch((error) => {
            console.log(error);
            setL(false);
        })

    }, [])

    return (
        <div>
        {loading ? (<Spinner />) : (

            
            <div className='Chats_parent'>
                
            
                {chats.map((s, index) => (
                <div className='Chats_parent_middlepanel' key={s._id}>
                    <>
                        <div className='Chats_parent_middlepanel_title'>Title: {s.title}</div>
                        <div className='Chats_parent_middlepanel_vehicle'>Vehicle type: {s.vehicle}</div>

                        <div className='Chats_parent_middlepanel_Operations'>
                            
                            <Link className='info' to={`/chat/getchat/${s._id}/admin`}>
                                <BsInfoCircle className='' />
                            </Link>
                            

                        </div>
                    </>
                </div>
            ))}
        {/* <div className='rightpanel phonescreen'>Side</div> */}
    </div>



   

)
}
    </div >
  )
}

export default ChatsForAdmin