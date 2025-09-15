import type { Gif } from "../../mock-type/gifs.mock"




interface Props {
    gifs: Gif[]
}

export const GifList = ({gifs}: Props) => {
  return (
    <div className="gifs-container">
                {
                    gifs.map( (gif) => (
                        <div key={gif.id} className="gif-card">
                            <img src={gif.url} alt={gif.title} />
                            <h3>{gif.title}</h3>
                            <p>{gif.width}x{gif.height} (1.5mg)</p>
                        </div>
                    ))
                }
    </div>
  )
}
