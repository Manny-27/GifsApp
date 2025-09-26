import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-type/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from './shared/components/SearchBar';
import { getGifByQuery } from "./gifs/actions/get-gif-by-query.action";


export const GisfApp = () => {

  const [previousTerms, setpreviousTerms] = useState(['dragon ball z']);

  const handleTermClicked = (term: string) => {
    console.log({term});
  }

  const handleSearch = async(query: string = '') => {
    query = query.trim().toLowerCase();
    
    if(query.length === 0) return

    if(previousTerms.includes(query)) return

    setpreviousTerms([query, ...previousTerms].slice(0,7))

    const gifs = await getGifByQuery(query);

    console.log({gifs})
  }

  return (
    <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" desciption=""/>

            {/* search */}
            <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch}/>

            {/* busquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

            {/* Gifs */}
            <GifList gifs={mockGifs}/>
        </>
  )
}
