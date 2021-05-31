import React , {useState} from 'react';
import Child from './Child';


const Parent = () => {
	const [count, setCount] = useState(0);
	const [name, setname] = useState("kia");
	console.log("parent render ")
	return ( 
		<div>
			<button onClick={()=>setCount(pre=>pre + 1)}>count - {count}</button>
			<button onClick={()=>setCount(0)}>count - 0</button>
			<button onClick={()=>setCount(5)}>count - 5</button>
			<Child name={name}/>

		</div>
		
	 );
}
 
export default Parent;