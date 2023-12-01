import './App.css'
import Sidebar from "./components/sidebar.tsx";
import Header from "./components/header.tsx";



const appStyle = {
    'display': 'grid',
   'gridTemplateColumns': '1fr 4fr',
    'width': '100%',
    'height': '100vh',
}

function App() {
    return (
        <>
            <div style={appStyle} >
                <Sidebar/>
                <div className="flex flex-col w-full" >
                    <Header title='Amis'/>
                    <h1>Content</h1>
                </div>
            </div>

        </>
    )
}

export default App
