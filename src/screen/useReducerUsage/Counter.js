import React
, { useReducer } from "react"
function init(initialCount) {
while (initialCount < 0) {
initialCount++
}
return { count: initialCount }
}
function reducer(state, action) {
switch (action.type) {
case "increment":
return { count
: state.count + 1 }
case "decrement":
return { count
: state.count - 1 }
case "reset":
return init(action.payload)
default:
throw new Error()
}
}
function Counter({ initialCount }) {
const [state
, dispatch] = useReducer(reducer
, initialCount
, init)
return (
<>
Count: {state.count}
<br />
<button
onClick={() => dispatch({ type: "reset", payload: initialCount })}
>
Reset Value
</button>
<button onClick={() => dispatch({ type: "increment" })}>Increasing Button</button>
<button onClick={() => dispatch({ type: "decrement" })}>Decreasing Button</button>
</>
)
}
export default Counter