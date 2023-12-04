import './App.css'
import Sidebar from "./components/sidebar.tsx";
import {Outlet, useLocation} from "react-router-dom";
import {useUser} from "./hooks/useUser.tsx";



function App() {
    const user = useUser()
    return (
        <>
            <div className="grid h-screen grid-cols-main-frame" >
                {user.username}
                <Sidebar/>
                <div className="flex flex-col w-full" >
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default App
