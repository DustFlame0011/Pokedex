import type { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import { pokemonDetailServices } from "@/services/pokemonDetail";
import type { IResponse } from "@/utils/handleResponse";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

type pokemonType = {
    data: IPokemonDetailResponse | undefined,
    loading: boolean,
    error: null | IResponse['error'],
}

const DetailPage = () => {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState<pokemonType>({
        data: undefined,
        loading: true,
        error: null
    })

    useEffect(() => {
        const callData = async (name: string) => {
            const response = await pokemonDetailServices.getPokemonDetail(name)
            if (response.status === 200) {
                console.log('response', response.data);

                if (response.data)
                    setPokemon({
                        data: {
                            ...response.data,
                            image:
                                response.data.sprites.other.dream_world.front_default ||
                                response.data.sprites.other['official-artwork'].front_default,
                        },
                        loading: false,
                        error: null,
                    })
            } else {
                setPokemon({ data: undefined, loading: false, error: response.error, });
            }
        }

        if (name)
            callData(name)
    }, [name])

    return (
        <div className="w-[90%] m-auto max-w-[1100px]">
            <div className="flex justify-center">
                <img src="/logo.webp"
                    className='max-h-20 mt-5'
                    alt="logo" />
            </div>

            <div className="w-[90%] max-w-[600px] m-auto">
                <Link className="bg-[#abc3f2] px-4 py-1 rounded-[10px] font-semibold" to={"/"}>Back</Link>
                {pokemon.data && (
                    <div className="rounded-lg overflow-hidden shadow dark:border-gray-700 p-4 m-auto">
                        <div className="bg-center aspect-square w-full bg-cover rounded-[20px] relative h-[400px]">
                            <img
                                className="absolute h-[auto] max-h-[400px] bg-cover aspect-square translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
                                src='/poke_bg5.png'
                                alt=''
                            />
                            <img
                                className="absolute rounded-t-lg h-[50%] sm:h-[260px] p-10 translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
                                src={pokemon.data.image}
                                alt=''
                            />
                        </div>

                        <div className="pt-5 dark:bg-gray-700 rounded-[20px] p-[16px] py-[20px]">
                            <div className="flex justify-between">
                                <h5 className="capitalize md-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {pokemon.data.name}
                                </h5>
                                <h5 className="md-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    #{pokemon.data.id}
                                </h5>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-[30px]">
                                <div>
                                    <div className="flex gap-x-[10px]">
                                        <div className="text-[#abc3f2] font-semibold">Height</div>
                                        <div className="text-white">{(pokemon.data.height / 10).toFixed(2)} m.</div>
                                    </div>
                                    <div className="flex gap-x-[10px]">
                                        <div className="text-[#abc3f2] font-semibold">Weight</div>
                                        <div className="text-white">{(pokemon.data.weight / 10).toFixed(2)} kg.</div>
                                    </div>
                                </div>

                                <div className="flex justify-start sm:justify-end dark:text-gray-900 gap-2 py-3">
                                    {pokemon.data.types.map((item) => {
                                        return (
                                            <span className={`badge-type-${item.type.name} px-[14px] capitalize py-1 rounded-[16px]`}
                                            >{item.type.name}
                                            </span>
                                        )
                                    })}
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold">Abilities</h5>
                                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-[10px] mt-[16px]">
                                        {pokemon.data.abilities.map((item) => {
                                            return (
                                                <div className={`bg-[#abc3f2] px-[14px] capitalize py-1 rounded-[16px]`}
                                                >{item.ability.name}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold">Stats</h5>
                                    <div className="grid grid-cols-1 gap-[10px] mt-[16px]">
                                        {pokemon.data.stats.map((item) => {
                                            return (
                                                <div className="flex gap-x-[10px] justify-between">
                                                    <div className="text-[#abc3f2] font-semibold capitalize">{item.stat.name}</div>
                                                    <div className="text-white">{item.base_stat}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default DetailPage;