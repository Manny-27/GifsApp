import { useState } from "react"


export const CounterApp = () => {

    const [counter, setCounter] = useState(0)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubstrac = () => {
        if(counter < 1) return
        setCounter((prevState) => prevState - 1);
    }

    const handleReset = () => {
        setCounter(0)
    }
  return (
    <>
        <h1>Counter</h1>
        <h3>the current counter is: {counter}</h3>

        <div>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstrac}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </>
  )
}
