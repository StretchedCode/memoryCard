import { FC } from "react"

interface Data{
    name: string;
}

const Card:FC<Data> = (props) => {

    return (
    <div className="max-w-sm min-h-[24rem] rounded overflow-hidden shadow-lg hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-red-400">
        <div className="w-full min-h-[40%] bg-slate-200 text-center mb-2">
            Img PlaceHolder
        </div>
        <div className="px-4 py-2 mb-4">
            <div className="font-bold text-xl mb-2">
                Card Title
            </div>
            <div className="text-l">
                Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text {props.name}
            </div>
            <button className="text-center mt-8 border-2 border-red-500 rounded-full px-3 py-1 text-sm hover:bg-red-500 hover:text-white focus:ring-2 focus:ring-red-400">
                Select
            </button>
        </div>
    </div>
    )
}

export default Card