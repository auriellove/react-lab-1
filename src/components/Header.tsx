//create the components under the component file and do a tsx/css
//import the cssfile

import { useState } from "react";
import "./Header.css";

export interface Props {
    flavor: string;
    fontSize: number;
    darkTheme: boolean; 
}


function Header() {
    return <header>Ice Cream Wars</header>

}


export default Header;


