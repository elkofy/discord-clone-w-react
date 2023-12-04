import {Servers} from "../ts/types/props_types.ts";
import {Link} from "react-router-dom";

export default function ServerList({servers}: Servers) {
    return (
        <>
            <ul className="menu flex flex-col gap-2 pt-2 px-4 bg-accent-content h-full">
                <li>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://picsum.photos/id/236/100/100" alt="home"/>
                        </div>
                    </div>
                    <div className="divider my-0"></div>
                </li>
                {servers.map((object: { icon: string | undefined; }) =>
                    <li>
                        <div>
                            <Link to={`servers/${object.name}`}>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={object.icon} alt='server'/>
                                    </div>

                                </div>
                            </Link>

                        </div>
                    </li>
                )}
            </ul>
        </>
    );
}