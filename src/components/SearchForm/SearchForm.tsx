import React from 'react';
import { generationList, typesList, sortList } from '@/utils/optionList';
import { useSearchForm } from '@/components/SearchForm';

const SearchForm = () => {
  const { fieldKeyword, fieldGeneration, fieldType, fieldSort } = useSearchForm();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div> 
                <form className="max-w-sm mx-auto">
                <label htmlFor="generation" 
                className="block mb-2.5 text-mb font-medium text-heading text-white"
                >
                Generation
                </label>
                <select 
                {...fieldGeneration}
                id="generation" 
                className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
                >
                {generationList.map((item, index) => {
                  return <option className="capitalize" key={`generation-key-${index}`} value={index}>{item.name}</option>
                })}
                </select>
                </form>
            </div>
            <div> 
                <form className="max-w-sm mx-auto">
                <label htmlFor="type" 
                className="block mb-2.5 text-mb font-medium text-heading text-white"
                >
                Type
                </label>
                <select
                {...fieldType}
                id="type" 
                className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
                >
                {typesList.map((item, index) => {
                  return <option className="capitalize" key={`type-key-${index}`} value={item}>
                    {item}
                  </option>
                })}
                </select>
                </form>
            </div>
            <div> 
                <form className="max-w-sm mx-auto">
                <label htmlFor="sort" 
                className="block mb-2.5 text-mb font-medium text-heading text-white"
                >
                Sort By
                </label>
                <select
                {...fieldSort}
                id="sort" 
                className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
                >
                {sortList.map((item, index) => {
                  return <option className="capitalize" key={`sort-key-${index}`} value={item}>
                    {item}
                </option>
                })}
                </select>
                </form>
            </div>
            <div> 
                <form className="max-w-sm mx-auto">
                <label htmlFor="search" 
                className="block mb-2.5 text-mb font-medium text-heading text-white"
                >
                Search
                </label>
                <input
                {...fieldKeyword}
                placeholder="Search..."
                id="search" 
                className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"
                >
                </input>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;