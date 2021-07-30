import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    
    console.log(id, title, url)
    return (
        <div className = 'card animate__animated animate__zoomInDown'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

/* 
1. Enzyme
2. Enzyme to Json
3. debe de mostrar el componente corectamente
    *shallow
    *wrapper
    *wrapper . toMatchSnapshot()

 */