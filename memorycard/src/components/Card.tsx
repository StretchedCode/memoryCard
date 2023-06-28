import { FC, useState, useEffect, useRef } from "react"

interface Data{
    id: number;
    clickHandle(id: number): void;
    isClicked: boolean;
    imageURL: any;
    name: string; 
}

const Card:FC<Data> = (props) => {

    return (
    <div onClick={() => {props.clickHandle(props.id)}} className="max-w-sm min-h-[20rem] rounded overflow-hidden shadow-lg hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-red-700 hover:cursor-pointer">
        <div className="w-full h-full bg-slate-100 text-center">
            <img className="min-w-[90%] h-full" src={props.imageURL} alt={props.name}></img>
        </div>
    </div>
    )
}

export default Card