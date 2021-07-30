import React,{ useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Developer']);

  

    return (
        <>
        < div className='by'>
            <h6>by Clemen 2021</h6>
            <h3>Busca tu Gif favorito:</h3>
            <AddCategory  setCategories={ setCategories }/>
            <hr/>
        </div>    
            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={category} 
                            category={category} 
                        />
                )}
            </ol>
                
            
        </>
    )
}
