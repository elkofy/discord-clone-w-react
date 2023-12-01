import ServerList from "./server-list.tsx";
import DirectMessageList from "./direct-message-list.tsx";

const servers = [
    {
        'name': 'server1',
        'id': '1',
        'icon': 'https://picsum.photos/id/234/100/100',
    },
    {
        'name': 'server2',
        'id': '1',
        'icon': 'https://picsum.photos/id/237/100/100',
    },
    {
        'name': 'server3',
        'id': '1',
        'icon': 'https://picsum.photos/id/235/100/100',
    }
]

const directMessages = [
    {
        'name': 'user1',
        'id': '1',
        'icon': 'https://picsum.photos/id/234/100/100',
        'numberOfMembers': 1,
    },
    {
        'name': 'private group',
        'id': '1',
        'icon': 'https://picsum.photos/id/237/100/100',
        'numberOfMembers': 5,

    },
    {
        'name': 'user3',
        'id': '1',
        'icon': 'https://picsum.photos/id/235/100/100',
        'numberOfMembers': 1,
    }
]
export default function Sidebar() {
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