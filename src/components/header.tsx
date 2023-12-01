export default function Header({title}) {
    return (
        <div className="flex flex-row w-full gap-1 items-center px-4">
            <i className="material-icons text-3xl">people</i>
           <p className="text-xl font-bold">{title}</p>
            <div className="divider divider-neutral"></div>
        </div>
    );
}