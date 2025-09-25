import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-type/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from './shared/components/SearchBar';


export const GisfApp = () => {

  const [previousTerms, setpreviousTerms] = useState(['dragon ball z']);

  const handleTermClicked = (term: string) => {
    console.log({term});
  }

  const handleSearch = (query: string) => {
    console.log(query)
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
