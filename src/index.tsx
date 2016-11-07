// import 'babel-polyfill';
import * as React from "react";
import * as ReactDOM from "react-dom";


import { CompA } from "./components/CompA";
import { CompB } from "./components/CompB";

const es2015Test = () => {
	console.log("es2015Test");
},
root = document.getElementById('app');


es2015Test();


class Main extends React.Component<any, any> {
    
     render() {
        return (
        	<div>
        	  <CompA para1="value1" para2="value2" />
        	  <CompB />
        	  </div>
        );
    }
}

ReactDOM.render(<Main />, root);