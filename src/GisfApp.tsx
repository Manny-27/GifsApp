import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-type/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from './shared/components/SearchBar';


export const GisfApp = () => {
  return (
    <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" desciption=""/>

            {/* search */}
            <SearchBar placeholder="Busca lo que quieras"/>

            {/* busquedas previas */}
            <PreviousSearches searches={["goku", "naruto", "rengoku"]}/>

            {/* Gifs */}
            <GifList gifs={mockGifs}/>
        </>
  )
}
