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
                <button className="btn btn-circle p-2 bg-neutral">
                    <svg viewBox="0 0 24 24" fill="#22C55E" xmlns="http://www.w3.org/2000/svg" stroke="#22C55E">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M6 12H18M12 6V18" stroke="#22C55E" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </g>
                    </svg>
                </button>
                <button className="btn btn-circle p-2 bg-neutral">
                    <svg fill="#22C55E" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 297 297" xml:space="preserve"
                         stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g> <path
                            d="M148.5,122.725c-14.213,0-25.775,11.562-25.775,25.775s11.562,25.775,25.775,25.775s25.775-11.563,25.775-25.775 S162.713,122.725,148.5,122.725z M148.5,154.822c-3.486,0-6.322-2.836-6.322-6.322s2.836-6.322,6.322-6.322 s6.322,2.836,6.322,6.322S151.986,154.822,148.5,154.822z"></path>
                            <path
                                d="M289.768,139.099l-72.277-19.176l37.548-64.666c2.215-3.814,1.587-8.643-1.533-11.762 c-3.119-3.12-7.947-3.749-11.762-1.533L177.077,79.51L157.901,7.232C156.77,2.969,152.911,0,148.5,0s-8.27,2.969-9.401,7.232 L119.923,79.51L55.256,41.962c-3.815-2.216-8.642-1.586-11.762,1.533c-3.12,3.119-3.749,7.947-1.533,11.762l37.548,64.666 L7.232,139.099C2.968,140.23,0,144.089,0,148.5s2.968,8.27,7.232,9.401l72.276,19.176l-37.548,64.666 c-2.216,3.814-1.587,8.643,1.533,11.762c1.874,1.874,4.363,2.849,6.88,2.849c1.673,0,3.358-0.431,4.882-1.315l64.667-37.548 l19.176,72.277c1.131,4.264,4.99,7.232,9.401,7.232s8.27-2.969,9.401-7.232l19.176-72.277l64.666,37.548 c1.523,0.886,3.208,1.315,4.881,1.315c2.517,0,5.007-0.975,6.881-2.849c3.12-3.119,3.748-7.947,1.533-11.762l-37.548-64.666 l72.277-19.176c4.265-1.131,7.232-4.99,7.232-9.401S294.032,140.23,289.768,139.099z M219.807,77.193l-21.808,37.559l-12.448-3.303 l-3.303-12.448L219.807,77.193z M77.191,77.192l37.561,21.809l-3.303,12.448L99,114.752L77.191,77.192z M77.191,219.808L99,182.248 l12.449,3.303l3.303,12.448L77.191,219.808z M219.807,219.807l-37.559-21.808l3.303-12.448l12.448-3.303L219.807,219.807z M121.896,128.804c3.375-0.895,6.012-3.532,6.907-6.907l19.696-74.24l19.696,74.24c0.895,3.375,3.532,6.012,6.907,6.907 l74.24,19.696l-74.24,19.696c-3.375,0.895-6.012,3.532-6.907,6.907l-19.696,74.24l-19.696-74.24 c-0.895-3.375-3.532-6.012-6.907-6.907L47.656,148.5L121.896,128.804z"></path> </g> </g></svg>
                </button>
            </ul>
        </>
    );
}