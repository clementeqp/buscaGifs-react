
import React, {useState} from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputvalue] = useState('');

    const handleInputChange = (e)=>{
        setInputvalue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories((c => [inputValue]));
            setInputvalue('')
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
    setCategories : PropTypes.func.isRequired
}