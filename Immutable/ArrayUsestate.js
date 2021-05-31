import React , {useState} from 'react';


const inistate = ['kia','daei'];
const ArrayUsestate = () => {
	const [persons, setpersons] = useState(inistate);
	const handleChange = ()=>{
		// persons.push("mehrdad");
		// persons.push("asghar")
		// setpersons(persons)
		const newPersons = [...persons]
		newPersons.push("hasan")
		newPersons.push("gholi")
		setpersons(newPersons)
	}
	console.log("kia")
	return ( 
	<div>
		<button onClick={handleChange}>change</button>
		{persons.map(p=>{
			return<p key={p}>{p}</p>
		})}

	</div>
	 );
}
 
export default ArrayUsestate;