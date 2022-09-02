import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const Gif = () => {

    // declaramos el estado de categories
    const [categories, setCategories] = useState(['Dragon Ball'])

    return (
        <>
            <h1>GifExpertApp</h1>
            {/* importamos el componente AddCategory y le declaramos las props */}
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (<GifGrid
                        key={category}
                        category={category} />))
                }
            </ol>
        </>
    )

}

export default Gif;