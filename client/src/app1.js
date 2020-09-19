import React,{Fragment,useReducer} from 'react';
import Main from './components1';
import { LayoutContext, layoutState, layoutReducer } from "./components1/shop";

function App(){
	const [data,dispatch] = useReducer(layoutReducer,layoutState)
	return (
		<Fragment>
			<LayoutContext.Provider value={{data,dispatch}}>
	      		<Main/>
			</LayoutContext.Provider>
		</Fragment>
	)
}

export default App;
