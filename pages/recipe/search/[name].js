import React, { useState, useEffect } from "react";
import Image from "next/image";
import homeStyle from "../../../styles/Home.module.css";
import Footer from "../../../components/Footer";
import {AiFillStar} from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/router";


const SearchRecipes = (props) => {
    const [search, setSearch] = useState('');
    const [listRecipe, setListRecipe] = useState([])
    const router = useRouter()
    const {name} = router.query
   

    useEffect(() => {
        axios.get(`http://localhost:8001/api/recipes/search/name?name=${name}`)
        .then((res) => {
            setListRecipe(res?.data?.data)
        })
        .catch((err)=> {
            console.log(err)
        })
    }, [name])

    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/recipe/search/${search}`)  
    }
    return (
        <>
        <div className="container main">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div style={{minHeight:"90vh"}}>
                         <div className={homeStyle.searchInput}>
                        <form onSubmit={handleSearch}>
                            <input
                                className="form-control form-control-lg mt-4"
                                type="text"
                                placeholder="Search Pasta, Bread, etc"
                                onChange={(e)=> setSearch(e?.target?.value)}
                            />                            
                        </form>
                    </div>
                    {listRecipe?.map((item, index) => {
                        return (
                            <div key={index} className="row mt-3">
                            <div className="col-3 text-center">
                                <div className={homeStyle.popularImage}> 
                                <Image src={`http://localhost:8001/${item?.recipe_image?.substring(
                                    7,
                                    item.recipe_image.length
                                )}`} height={500} width={500} alt="img-recipe" />
                                </div>
                            </div>
                            <div className="col-9 px-0">               
                                <h6 className="mt-3">{item.name}</h6>
                                <p className={homeStyle.rating}>
                                    <AiFillStar color="#FFB200"/> 4.6 <span>{item.category_name}</span>
                                </p>
                            </div>
                        </div>
                        )
                    })} 
                    </div>                            
                </div>
            </div> 
        </div>
        <Footer/>              
        </>
    )
}

export default SearchRecipes;

