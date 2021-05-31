import React , {useReducer}from 'react';

const initialState = 0 ;
const reducer = (state,action)=>{
	switch(action){
		case "increment": return state + 1 ;
		case "decrement": return state -1;
		case "reset" : return state=0 ;
		default : return state
	}
}

const UseReducer = () => {
	const [state , dispatch]= useReducer(reducer,initialState)
	console.log(state , "dd")
	return ( 
		<div>
			<button onClick={()=>dispatch("increment")}>inc - {state}</button>
			<button onClick={()=>dispatch("decrement")}>dec - {state}</button>
			<button onClick={()=>dispatch("reset")}>reset - {state}</button>

		</div>
	 );
}
 
export default UseReducer;