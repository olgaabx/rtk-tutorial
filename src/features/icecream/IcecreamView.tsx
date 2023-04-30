import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setOrderedAction, setRestockedAction, setUpdateValueAction, valueSelector, numOfIcecreamsSelector } from "./icecreamSlice"
// import { useState } from "react"


export const IcecreamView = () => {
  // const [value, setValue] = useState(1)

  // const numOfIcecream = useAppSelector((state) => state.icecream.numOfIcecreams)
  const numOfIcecream = useAppSelector(numOfIcecreamsSelector)

  // const value = useAppSelector((state) => state.icecream.value)
  const value = useAppSelector(valueSelector)

  const dispatch = useAppDispatch()

  const setUpdateValue = (value: number) => dispatch(setUpdateValueAction(value))

  return (
    <div>
      <h2>Number of ice creams - {numOfIcecream}</h2>
      <button onClick={() => dispatch(setOrderedAction())}>Order ice cream</button>
      <input 
        type='number' 
        value={value} 
        // onChange={e => dispatch(setUpdateValueAction(parseInt(e.target.value)))}
        onChange={e => setUpdateValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(setRestockedAction(value))}>Restock ice creams</button>
    </div>
  )
}
