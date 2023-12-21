"use client";
import React from 'react'
import NewChat from './NewChat'
import {useCollection} from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import ChatRow from './ChatRow';

function SideBar() {
  const [chats,loading,error]= useCollection(
    query(collection(db,'users',"ls.ai.mitraj",'chats'),orderBy('createdAt','asc'))
  )
  //console.log(chats);
  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className="flex-1">
        {/* new chat part here */}  
        <NewChat/>
        <div>
          {/* model selection if in future  */}
        </div>
        {chats?.docs.map(chat => (
          <ChatRow key = {chat.id} id = {chat.id} />
        ))}

        {/* list of chats  */}

      </div>
    </div>
  )
}

export default SideBar