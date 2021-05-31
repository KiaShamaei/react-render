import React from 'react';
// import ChartLine from "./Chart/ChartLine"
import './App.css';
// import ArrayUsestate from './Immutable/ArrayUsestate';
// import Parent from './ParentChild/Parent';
import ParentMemo from './ParentChildMemo/ParentMemo';

// import UsState from './useState/UseState';
// import ReactSpinners from './ReactSpinner/ReactSpinners';
// import UseReducer from './UseReducer/UseReducer';
// import ObjectUseState from './Immutable/ObjectUsestate';

function App() {
	
  return (
    <div className="App">
		{/* <ReactSpinners/> */}
		{/* <ChartLine /> */}
		{/* <UsState/> */}
		{/* <UseReducer/> */}
		{/* <ObjectUseState/> */}
		{/* <ArrayUsestate/> */}
		<ParentMemo/>
   
    </div>
  );
}

export default App;
