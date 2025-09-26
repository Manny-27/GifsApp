import { useRef, useState } from "react";
import { getGifByQuery } from "../actions/get-gif-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// const gifCache: Record<string, Gif[]> = {}

export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setpreviousTerms] = useState<string[]>([]);

    const gifCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async(term: string) => {
        if(gifCache.current[term]) {
            setGifs(gifCache.current[term]);
            return;
        }

        const gifs = await getGifByQuery(term);
        setGifs(gifs)
    }

    const handleSearch = async(query: string = '') => {
        query = query.trim().toLowerCase();
        
        if(query.length === 0) return

        if(previousTerms.includes(query)) return

        setpreviousTerms([query, ...previousTerms].slice(0,7))

        const gifs = await getGifByQuery(query);

        setGifs(gifs)
        gifCache.current[query] = gifs;
    }

    return {
        // Values
            gifs,
            previousTerms,
        // Actions
            handleTermClicked,
            handleSearch,
    }
}
