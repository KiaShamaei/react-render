import React from "react";



const ChildMemo = (props) => {
	console.log("child memo render -------");
	return <div>this is child page -{props.name}</div>;
};

export default ChildMemo;
export const MemoizeChild = React.memo(ChildMemo);
