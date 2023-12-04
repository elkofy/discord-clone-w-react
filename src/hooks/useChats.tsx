import { useState } from "react";
import {createChats} from "../services/fakerApi.tsx";
import {useMountEffect} from "./useMountEffect.tsx";
import {Chat} from "../ts/interfaces/Chat.ts";


export const useChats = () => {
    const [chats, setChats] = useState<Chat[]>()
    useMountEffect(() => {
        (async () => {
                // console.log(chats.chats)

            if (localStorage.getItem('Chats'))
            {
                const localChats = JSON.parse(localStorage.getItem('Chats'))
                 setChats(localChats);
            }
            else{
                let chatsObj = createChats()
                setChats(chatsObj)
                localStorage.setItem('Chats',JSON.stringify(chatsObj));
            }

        })();
    })

    return { chats }
}