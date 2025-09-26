import { useState } from "react"



export const useCounter = (setValue: number = 5) => {

    const [counter, setCounter] = useState(setValue)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubstrac = () => {
        if(counter < 1) return
        setCounter((prevState) => prevState - 1);
    }

    const handleReset = () => {
        setCounter(setValue)
    }

  return {
        // Values
            counter,
        // Actions
        handleAdd,
        handleSubstrac,
        handleReset
  }
}
