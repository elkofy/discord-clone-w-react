import './App.css'
import Sidebar from "./components/sidebar.tsx";
import Header from "./components/header.tsx";
import {Outlet} from "react-router-dom";
import {useUser} from "./hooks/useUser.tsx";



function App() {
    const user = useUser()
    return (
        <>
            <div className="grid h-screen grid-cols-main-frame" >
                {user.username}
                <Sidebar/>
                <div className="flex flex-col w-full" >
                    <Header title='Amis'/>
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default App
