import { DEVPAGE } from "./Dev.js";
import { ASCOASPLASH } from "./Pages/Ascoa.js";
import { MAINSPLASH } from "./Pages/Main.js";
import { MJOMBALISPLASH } from "./Pages/Mjombali.js";
import { QELSPLASH } from "./Pages/Qel.js";

export const SPLASHSCREENPAGE=()=>{

    const NAMES=localStorage.getItem("Config");

    switch (NAMES) {

        case "":MJOMBALISPLASH();
            
            break;

        case "":ASCOASPLASH();
            
            break;

        case "":MAINSPLASH();
            
            break;
        
        case "":QELSPLASH();
            
            break;
    
        default:DEVPAGE()

            break;

    };

};