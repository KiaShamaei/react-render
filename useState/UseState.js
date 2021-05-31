import React , {useState} from 'react';


const UsState = () => {
	const [count, setCount] = useState(0);
	console.log(count)
	return ( 
		<div>
			<button onClick={()=>setCount(pre=>pre + 1)}>count - {count}</button>
			<button onClick={()=>setCount(0)}>count - 0</button>
			<button onClick={()=>setCount(5)}>count - 5</button>

		</div>
		
	 );
}
 
export default UsState;