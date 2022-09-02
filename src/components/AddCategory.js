import React, { useState } from 'react'
import PropTypes from 'prop-types'

// le pasamos como argumento el estado setCategories por destructuracion
export const AddCategory = ({ setCategories }) => {

    // declaramos el estado de inputValue
    const [inputValue, setInputValue] = useState('')

    // funcion que obtiene el valor del input
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    // funcion que envia el texto al componente AddCategory por las props
    const handleSubmit = (e) => {
        e.preventDefault()

        // si tiene espacios en blanco, dejamos el estado del input vacio
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats])
            setInputValue('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
