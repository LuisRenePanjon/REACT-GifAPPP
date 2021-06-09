import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = []}) =>{

    const [categories, setCategories] = useState( defaultCategories);
    // const handleAdd = () => {
    //     setCategories([...categories, 'Boku no hero']);
    // };


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories = { setCategories }
            />
            <hr />
            <ol>
                { 
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category = { category }
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;


