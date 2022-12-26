
import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {

    const [ formstate, setformstate ] = useState(initialForm)
  
   const onInputSumit = ({ target }) => {
      const { name, value } = target;
            setformstate({
            ...formstate,
            [name]: value
        })
    }
    const onReset = (() => { 

        setformstate(initialForm)
    })
    

    return {
        ...formstate,
        formstate,
        onInputSumit,
        onReset
    }
}
