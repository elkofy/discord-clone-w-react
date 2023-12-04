import {Link, useLocation, useParams} from "react-router-dom";
import Header from "../components/header.tsx";
import {createMessageFromUser, createRandomChat, createRandomUser} from "../services/fakerApi.tsx";
import {useEffect, useState} from "react";
import {Message} from "../ts/interfaces/Message.ts";

export default function ServerPage() {
    const params = useParams()
    let channels = [{
        name: 'General',
        messages: createRandomChat().messages
    },
        {
            name: 'Memes',
            messages: createRandomChat().messages
        },
        {
            name: 'Events',
            messages: createRandomChat().messages
        },]
    const [currentChannel, setChannel] = useState(channels[0])
    const [message, setMessage] = useState()

    const onChange = (event) => {
        setChannel(channels.find((element) => element.name = event.target.id))
        channels = [...channels]
    }

    const addMessage = (event: any) => {
        setMessage(event.target.value)
    }
    const onKeyPress = (event: any) => {
        if (event.code == "Enter") {
            currentChannel.messages.push(createMessageFromUser(createRandomUser(), message))
            setMessage('')
        }
    }
    useEffect(() => {
        // Code here will run after *every* render
    }, [currentChannel]);
    return (
        <>
            <Header title={params.id}/>
            <div className="grid grid-cols-main-frame">
                <div>
                    <ul className="menu  flex flex-col gap-2 pt-2 px-4 h-full">
                        {
                            channels.map((channel: unknown) =>
                                <li>
                                    <a id={channel.name}
                                       className={`${channel.name === currentChannel.name ? 'active' : ''}`}
                                       onClick={onChange}>
                                        #{channel.name}
                                    </a>
                                </li>
                            )
                        }

                    </ul>


                </div>
                <div>
                    <div className="max-h-[80%] overflow-auto">
                        {currentChannel.messages.map((object: Message) =>
                            <div
                                className={`chat chat-end`}>
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
            </div>
        </>

    )
        ;
}