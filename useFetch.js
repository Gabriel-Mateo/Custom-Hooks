
import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoding: true,
        hasError: null
    })
    
    const getFetch = async () => {
        setState({
            ...state,
            isLoding: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();
        
        setState({
            data: data,
            isLoding: false,
            hasError: null,

        });

     }

    useEffect(() => {
     getFetch();
     }, [url])
    
    return {
        data: state.data,
        isLoding: state.isLoding,
        hasError: state.hasError
   };
  
}
