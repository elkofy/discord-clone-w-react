export default function DirectMessageList({directMessages}) {
    return (
        <>
            <div className="h-full">
                <div className="bg-base-200 py-2 px-3 drop-shadow-lg">
                    <input type="text" placeholder="Search or Start a conversation"
                           className="input input-bordered input-primary h-6 w-48 pl-2"/>
                </div>
                <ul className="menu bg-base-200 w-56">
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                            <p className="text-base">
                                Friends
                            </p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <p className="text-base">
                                Premium
                            </p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                            </svg>
                            <p className="text-base pl-2">
                                Shop
                            </p>
                        </a>
                    </li>
                </ul>
                <div className="flex-row justify-between items-center bg-base-200 pl-6 flex h-4 pr-3">
                    <p className="text-xs font-bold">DIRECT MESSAGES</p>
                    <p className="text-lg font-regular">+</p>
                </div>
                <ul className="menu bg-base-200 w-56 h-full">
                    {directMessages.map((object: { icon: string | undefined; name: string; numberOfMembers: number }) =>
                        <li>
                            <div>
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={object.icon} alt='server'/>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-base">{object.name}</p>
                                    <p className="text-xs">{object.numberOfMembers > 1 ? `${object.numberOfMembers} membres` : ''}  </p>
                                </div>
                            </div>
                        </li>)}
                </ul>
            </div>
        </>
    );
}