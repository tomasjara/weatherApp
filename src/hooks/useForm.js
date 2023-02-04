import React, { useState } from 'react'

export const useForm = ( initialValue = {}) => {

    const [formState, setFormState] = useState( initialValue )

    const onInputChange = (e) => {
        const {name, value} = e.target
        setFormState({...formState, [name]: value})
    }

  return {
    ...formState,
    formState,
    onInputChange
  }
}
