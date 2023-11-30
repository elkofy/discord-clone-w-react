const servericon = {
    borderRadius: "50%",
    width: "48px",
    height: "48px",
    margin: "10px",};
const line = {
    width: "100%",
    height: "1px",
    background: "rgba(255, 255, 255, 0.1)",
    margin: "10px 0",
};

const actionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "space-between",

};


export default function ServerList({servers}) {
    return (
<>
    <div>
        <img style={servericon  } src="https://picsum.photos/id/236/100/100" />
    </div>
    <line style={line}></line>
    {servers.map((object: { icon: string | undefined; }) =>
        <div>
            <img style={servericon  } src={object.icon} />
        </div> )}
    <div style={actionStyle}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Server
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Discover
        </button>
    </div>


</>
    );
}