import {createMessageFromUser, createRandomChat} from "../services/fakerApi.tsx";
import {Message} from "../ts/interfaces/Message.ts";
import {useUser} from "../hooks/useUser.tsx";
import {useParams} from "react-router-dom";
import {useChats} from "../hooks/useChats.tsx";
import {useState} from "react";
import Header from "../components/header.tsx";


export default function ChatPage() {
    const id = useParams().id
    const chat = useChats().chats?.find((chat) => chat.name === id) ?? createRandomChat();
    const user = useUser()
    const [message, setMessage] = useState()
    const addMessage = (event: any) => {
        setMessage(event.target.value)
    }
    const onKeyPress = (event: any) => {
        if (event.code == "Enter") {
            chat.messages.push(createMessageFromUser(user.user, message))
            setMessage('')
        }
    }

    return (
        <>
            <Header title="Amis"/>
            <div className="flex flex-col h-full justify-between">
                <div className="max-h-[80vh] overflow-auto">
                    {chat.messages.map((object: Message) =>
                        <div
                            className={`chat ${user.user?.username == object.user.username ? 'chat-end' : 'chat-start'}`}>
                            <div className="chat-header">
                                <p>{object.user.username}</p>
                                <time className="text-xs opacity-50">12:45</time>
                            </div>
                            <div className="chat-bubble">{object.text}</div>
                        </div>
                    )}
                </div>
                <input type="text" placeholder="Type here" className="mt-5 input input-bordered input-primary w-full"
                       value={message}
                       onChange={addMessage} onKeyDown={onKeyPress}/>
            </div>
        </>
    );
}