import type { IPokemonDetailResponse, Type } from "@/interface/pokemonDetail";
import React from "react";
import { Link } from "react-router-dom";

interface PokemonCardProps {
   image: string
   name: string
   id: number
   types: Type[]
}

const PokemonCard = ({ image, name, id, types } :PokemonCardProps) => {
    return (

<div className=" bg-white border border-gray-200 rounded-lg overflow-hidden shadow dark:bg-gray-700 dark:border-gray-700 p-[16px] max-w-[275px] w-full m-[auto]">
    <div className="bg-[url('/public/poke_card_bg.jpg')] bg-center aspect-square max-h-[300px] bg-cover rounded-[20px]">
        <Link to={`/detail/${name}`} className="bg-[url('/public/poke-card-bg.png')] ">
            <img 
            className="rounded-t-lg h-[218px] p-10 w-full" 
            src={image} 
            alt=''
            />
        </Link>
    </div>

    <div className="py-5">
    <div className="flex justify-between">
        <h5 className="capitalize md-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
            </h5>
        <h5 className="md-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            #{id}
            </h5>
    </div>

    <div className="flex justify-end dark:text-gray-900 gap-2 py-4">
        {types.map((item) => {
            return <span className={`badge-type-${item.type.name} px-[14px] capitalize py-1 rounded-[16px]`}>{item.type.name}</span>
        })}
    </div>
    
</div>
</div>

    )
}

export default PokemonCard;