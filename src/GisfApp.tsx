// import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
// import { mockGifs } from "./mock-type/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from './shared/components/SearchBar';
// import { getGifByQuery } from './gifs/actions/get-gif-by-query.action';
// import type { Gif } from "./gifs/interfaces/gif.interface";
import { useGifs } from "./gifs/hooks/useGifs";


export const GisfApp = () => {
    const {gifs, previousTerms, handleSearch, handleTermClicked} = useGifs();

  return (
    <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" desciption=""/>

            {/* search */}
            <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch}/>

            {/* busquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

            {/* Gifs */}
            <GifList gifs={gifs}/>
        </>
  )
}
