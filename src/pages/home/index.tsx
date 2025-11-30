import SearchForm from "@/components/SearchForm";
import PokemonCard from "@/components/SearchForm/PokemonCard";
import { usePokemonListStore } from "@/store/pokemonList";
import { ThreeDots } from 'react-loader-spinner'


const HomePage = () => {

    const { pokemon, fetchPokemon } = usePokemonListStore()
    console.log(pokemon);

    return (
        <div className="w-[90%] m-auto max-w-[1100px]">
            <div className="flex justify-center">
                <img src="/logo.webp"              
                className='max-h-20 mt-5' 
                alt="logo" />
            </div>
            <SearchForm />
            {fetchPokemon.loading && (
            <div className="h-[600px] flex justify-center items-center">
                <ThreeDots
                    height="50"
                    width="50"
                    radius="9"
                    color="#abc3f2"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{ margin: '20px' }}
                    wrapperClass="custom-loader"
                    visible={true}
                />
            </div>
            )}
            {!fetchPokemon.loading && <div className="grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mt-10 justify-center">
                {pokemon.data?.map((item)=>{
                    return <PokemonCard 
                    image={item.image || ''}
                    name={item.name}
                    id={item.id}
                    types={item.types}
                    />
                })}
            </div>
            }
        </div>
    )
}

export default HomePage;