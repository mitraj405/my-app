"use client";
import { db } from '@/firebase';
import { Message } from '@/typings';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
type Props = {
    chatId: string;
};

function ChatInput({ chatId }: Props) {
    const [prompt, setPrompt] = useState<string>("");

    const model = "text-davinci-003";
    const sendMessage =  async(e:FormEvent<HTMLFormElement> ) =>{
        e.preventDefault();
        if(!prompt)return;
        const input  = prompt.trim();
        setPrompt("");
        const message : Message= {
            text:input,
            createdAt: serverTimestamp(),
            user:{
                name:'ls.ai.mitraj'
            }

        }
        await addDoc(collection(db,'users','ls.ai.mitraj','chats',chatId,'messages'),message)

        //notification of loading
        const notification= toast.loading('LongShot is thinking...');
        // await fetch('/api/askQuestion',{
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({
        //         prompt:input,
        //         chatId,model
        //     }),

        // }).then(()=>{
        //     toast.success('responded',{id:notification})
        //     //toast notificaion successs
        // });
        fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text: input, // Change 'prompt' to 'text' here
              chatId: chatId,
              model: model
            }),
          })
          .then(response => response.json())
          .then(data => {
            toast.success('responded',{id:notification})
            //console.log(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    };

    return (
        <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm'>
            <form onSubmit = {sendMessage} className='p-5 space-x-5 flex'>
                <input className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed 
            disabled:text-gray-300'
                    value={prompt} onChange={e => setPrompt(e.target.value)} type="text"
                    placeholder='Ask here anything !' 
                />
                <button disabled={!prompt} type="submit"
                    className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed">
                    <PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
                </button>


            </form>
            <div>
            </div>
        </div>
    )
}

export default ChatInput

function async(arg0: any) {
    throw new Error('Function not implemented.');
}
