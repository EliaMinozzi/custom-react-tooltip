import React from "react";
import ReactDOM from "react-dom";
import Tooltip from './dist/lib/Tooltip';

ReactDOM.render(<div>Hi, this is my tooltip <Tooltip height={55} width={55} color='red'>Hello world</Tooltip></div>, document.getElementById("root"));
