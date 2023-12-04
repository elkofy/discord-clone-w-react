import ServerList from "./server-list.tsx";
import DirectMessageList from "./direct-message-list.tsx";
import {createChats, createServers} from "../services/fakerApi.tsx";
import {useChats} from "../hooks/useChats.tsx";

export default function Sidebar() {
    const servers = createServers()
    const message = useChats()
    const directMessages = message.chats ?? createChats()

    return (

        <div className="flex flex-row">
            <div id="servers">
                <ServerList servers={servers}/>
            </div>
            <div id="private-message">
                <DirectMessageList directMessages={directMessages}/>
            </div>
        </div>
    );
}