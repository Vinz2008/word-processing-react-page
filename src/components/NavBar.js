import React from "react";
import "./editable"
/*
import { saveAs } from 'file-saver';
import Editable from "./editable";
function saveasfile() {
    var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
}
*/
function NavBar() {
    return (
        <div class="topnav">
        <a href="#" >
            <button>Test</button>
        </a>
        <a>
            <button>Save as</button>
        </a>
        </div>
    );
}

export default NavBar;