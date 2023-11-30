const dmIcon = {
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    margin: "10px",};
const line = {
    width: "100%",
    height: "1px",
    background: "rgba(255, 255, 255, 0.1)",
    margin: "10px 0",
};

const dmStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: "10px",
};

const actionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "space-between",

};


export default function DirectMessageList({directMessages}) {
    return (
        <>
            <div>
                <input type="text" placeholder="Search" />
            </div>
            {directMessages.map((object: { icon: string | undefined; }) =>
                <div style={dmStyle}>
                    <img style={dmIcon  } src={object.icon} />
                    <div>
                        <p>{object.name}</p>
                        <p>{object.numberOfMembers > 1 ? `${object.numberOfMembers} membres` : ''}  </p>
                    </div>
                </div> )}


        </>
    );
}