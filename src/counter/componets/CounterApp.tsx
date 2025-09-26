// import { useState } from "react"
import { useCounter } from "../hooks/useCounter"


export const CounterApp = () => {

    const {counter, handleAdd, handleSubstrac, handleReset} = useCounter(3)
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
