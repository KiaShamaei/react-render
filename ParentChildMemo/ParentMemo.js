import React , {useState} from 'react';
import {MemoizeChild} from './ChildMemo';


const ParentMemo = () => {
	const [count, setCount] = useState(0);
	const [name, setname] = useState("kia");
	console.log("parent  memo render ")
	return ( 
		<div>
			<button onClick={()=>setCount(pre=>pre + 1)}>count - {count}</button>
			<button onClick={()=>setCount(0)}>count - 0</button>
			<button onClick={()=>setCount(5)}>count - 5</button>
			<button onClick={()=>setname("ali")}>set name </button>
			<MemoizeChild name={name}/>

		</div>
		
	 );
}
 
export default ParentMemo;