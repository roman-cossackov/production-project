import { useState } from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(prev => prev + 1)
	}
	const decrement = () => {
		setCount(prev => prev - 1)
	}

  return (
	<>
		<h3 className={classes.button}>{count}</h3>
		<button onClick={increment}>+</button>
		<button onClick={decrement}>-</button>
	</>
  )
}

export default Counter