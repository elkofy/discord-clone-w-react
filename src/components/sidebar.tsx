import ServerList from "./server-list.tsx";
import DirectMessageList from "./direct-message-list.tsx";
import {createChats, createServers} from "../services/fakerApi.tsx";
import {useChats} from "../hooks/useChats.tsx";





export default function Sidebar() {
    const servers = createServers()
    const directMessages =createChats();
    console.log(directMessages)
    console.log(useChats())
    console.log(useChats())
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