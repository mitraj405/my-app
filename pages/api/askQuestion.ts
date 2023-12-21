// // // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// // // import { query } from 'firebase/firestore';
// // import type { NextApiRequest, NextApiResponse } from 'next'

// // type Data = {
// //   answer: string
// // }

// // export default async function handler(
// //   req: NextApiRequest,
// //   res: NextApiResponse<Data>
// // ) {
// //     const {prompt,chatId,model} = req.body;
// //     if(!prompt){
// //         res.status(400).json({answer:"Please provide a prompt"});
// //         return;
// //     }
// //     if(!chatId){
// //         res.status(400).json({answer:"Please provide a valid chat id"});
// //         return;
// //     }

// //     //real magic of gpt answer here
// //     const response = await query(prompt,chatId,model);
// // //   res.status(200).json({ name: 'John Doe' })
// // }

// // askQuestion.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { query } from '@/lib/queryApi'; // Adjust the path as necessary

// type Data = {
//   content?: string;
//   status: string;
//   message: string;
//   credits_used?: number;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//     const { text, chatId, model } = req.body;
    
//     console.log(req.body);
//     console.log(text);
//         console.log("sdfsfff");

//     if (!text) {
//              res.status(400).json({ status: 'failed', message: 'Please provide prompt bro' });
//       return;
//     }

//   try {
//     const longshotResponse = await query(text);
//     if (longshotResponse.status === 'success') {
//       res.status(200).json({
//         content: longshotResponse.copies.map(copy => copy.content).join(' '),
//         status: longshotResponse.status,
//         message: longshotResponse.message,
//         credits_used: longshotResponse.credits_used
//       });
//     } else {
//       res.status(200).json({
//         status: longshotResponse.status,
//         message: longshotResponse.message
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ status: 'error', message: 'Error processing your request' });
//   }
// }
// askQuestion.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '@/lib/queryApi'; // Adjust the path as necessary\
import admin from "firebase-admin";
//import { Message } from 'postcss';
import { adminDb } from '@/firebaseAdmin';
import { Message } from '@/typings';

type Data = {
  content?: string;
  status: string;
  message: string;
  credits_used?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { text, chatId, model } = req.body; // 'text' is now correctly destructured from req.body
  
  if (!text) {
    res.status(400).json({ status: 'failed', message: 'Please provide text for the prompt' });
    return;
  }

  try {
    const longshotResponse = await query(text); // Pass the 'text' to the query function
    //console.log(longshotResponse);
    const no : Message = {
      text:longshotResponse.copies[0].content || "unable to find the answer",
      createdAt : admin.firestore.Timestamp.now(),
      user:{
        name:'gpt',
        //avatar:"https://links.papareact.com/89k",
      },
    };

    await adminDb.collection("users")
    .doc('ls.ai.mitraj')
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(no);



    if (longshotResponse.status === 'success') {
      res.status(200).json({
        content: longshotResponse.copies.map(copy => copy.content).join(' '),
        status: longshotResponse.status,
        message: longshotResponse.message,
        credits_used: longshotResponse.credits_used
      });
    } else {
      res.status(200).json({
        status: longshotResponse.status,
        message: longshotResponse.message
      });
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error processing your request' });
  }
}







