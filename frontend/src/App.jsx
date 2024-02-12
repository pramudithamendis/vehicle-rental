import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Create from './pages/Create.jsx'
import Chats from './pages/Chats.jsx'
import Delete from './pages/Delete.jsx'
import AChat from './pages/AChat.jsx'
import Edit from './pages/Edit.jsx'
import ChatsForAdmin from './pages/ChatsForAdmin.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/chat/create' element={<Create />} />
      <Route path='/chat/chats' element={<Chats />} />
      <Route path='/chat/delete/:id' element={<Delete />} />
      <Route path='/chat/getchat/:id' element={<AChat />} />
      <Route path='/chat/edit/:id' element={<Edit />} />
      <Route path='/chat/chats/admin' element={<ChatsForAdmin />} />
    </Routes>
  )
}

export default App