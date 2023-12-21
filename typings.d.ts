import { Timestamp } from "firebase/firestore";

interface Message{
    text:string;
    createdAt: admin.firestore.Timestamp;
    user:{
        name:string;
    };
}