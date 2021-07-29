import React,{ useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Developer']);

  

    return (
        <>
            <h4 className='by'>by Clemen 2021</h4>
            <h1>Busca tu Gif favorito:</h1>
            <AddCategory  setCategories={ setCategories }/>
            <hr/>
            
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
