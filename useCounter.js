import { useState } from "react";

 export const useCounter = (initialValue = 0) => {
    
     const [counter, setcounter] = useState(initialValue);
     
     const inscremet = (value = 1) => { 
         setcounter(counter + value );
     }
     const descrement = (value = 1) => {
         setcounter(counter - value);
     }
     const reset = () => {
         setcounter(initialValue);
     }
    return {
        counter,
        inscremet,
        descrement,
        reset
    }
}