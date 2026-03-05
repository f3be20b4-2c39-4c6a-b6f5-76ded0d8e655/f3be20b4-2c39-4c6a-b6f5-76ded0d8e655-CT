import { DEVPAGE } from "./Dev.js";
import { ASCOASPLASH } from "./Pages/Ascoa.js";
import { MAINSPLASH } from "./Pages/Main.js";
import { MJOMBALISPLASH } from "./Pages/Mjombali.js";
import { QELSPLASH } from "./Pages/Qel.js";

export const SPLASHSCREENPAGE=()=>{

    const NAMES=localStorage.getItem("Config");

    switch (NAMES) {

        case "588b80c4-d0fc-4022-9cbf-19a4c9b7c13e":MJOMBALISPLASH();
            
            break;

        case "ccfd169c-c80e-4d46-855b-7011d7d4e8d7":ASCOASPLASH();
            
            break;

        case "f3be20b4-2c39-4c6a-b6f5-76ded0d8e655":MAINSPLASH();
            
            break;
        
        case "60f865a0-9713-4e1c-9a79-5a2e994ac97d":QELSPLASH();
            
            break;
    
        default:DEVPAGE()

            break;

    };

};