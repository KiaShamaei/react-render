import React , {useState} from 'react';


const initState = {
	fname : "ali",
	lname : "kia"
}
const ObjectUseState = () => {
	const [person, setperson] = useState(initState);
	const handleChange = ()=>{
		// person.fname = "Daei"
		// person.lname ="kami"
		// setperson(person)
		const newPerson = {...person}
		newPerson.fname = "Daei";
		newPerson.lname = "farnaz";
		setperson(newPerson)

	}
	console.log("kia render")
	return ( 
		<div>
			<button onClick={handleChange}>{person.lname} - {person.fname}</button>

		</div>
	 );
}
 
export default ObjectUseState;