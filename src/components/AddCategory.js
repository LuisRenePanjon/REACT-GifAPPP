import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ( {setCategories } ) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = ( events ) => {
        setInputValue( events.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length > 2){
            setCategories( categories => [inputValue , ...categories]);
            setInputValue( '' );
        }
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <p>{ inputValue }</p>
            <input
                type="text" 
                placeholder="Ingrese una categoria"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
