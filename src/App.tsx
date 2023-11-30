import './App.css'
import Sidebar from "./components/sidebar.tsx";


const appStyle = {
    'display': 'grid',
   'gridTemplateColumns': '1fr 4fr',
    'width': '100%',
    'height': '100vh',
}

const mainLayout = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
};

function App() {
    return (
        <>
            <div style={appStyle} >
                <Sidebar/>
                <div style={mainLayout} >
                    <h1>Content</h1>
                </div>
            </div>

        </>
    )
}

export default App
