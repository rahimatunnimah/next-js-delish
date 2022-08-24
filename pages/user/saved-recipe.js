import React, {useState, useEffect} from "react";
import popularStyle from "../../styles/popular.module.css";
import Image from "next/image";
import imageRecipe from "../../public/images/Rectangle 5.png";
import homeStyle from "../../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const savedRecipe = () => {
    const [savedRecipe, setSavedRecipe] = useState([]);
    const [tokenStorage, setTokenStorage] = useState({});
    const [userStorage, setUserStorage] = useState({});

    const router = useRouter();

    useEffect(() => {
        setUserStorage(JSON.parse(localStorage?.getItem("user")));
        setTokenStorage(localStorage?.getItem("token")),
        getSavedRecipe()
    }, [userStorage.id])

    const config = {
        headers: {
        Authorization: `Bearer ${tokenStorage}`,
        },
    };

    const getSavedRecipe = () => {
        axios.get(`http://localhost:8001/api/users/saved/recipe/${userStorage?.id}`, config)
        .then((res) => {
            const dataRecipe = res?.data?.data
            setSavedRecipe(dataRecipe)
        })
        .catch((err) => {
            console.log(err);
        }); 
    }
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="row mt-4">
                        <div className="col-4">
                            <div className={popularStyle.iconBack}>
                                <Link href="/user/profile" passHref>
                                    <IoIosArrowBack size={32} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className={popularStyle.titlePage}>
                                <p>Saved Recipe</p>
                            </div>
                        </div>
                    </div>
                    {savedRecipe?.map((item, index) => {
                        return (
                            <Link href={`/recipe/detail/${item.recipe_id}`}>
                                <div key={index} className="row mt-4 align-items-center cursor">
                                    <div className="col-3">
                                        <div className={homeStyle.popularImage}>
                                            <Image src={item.recipe_image} height={500} width={500} alt="img-recipe" />
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className={homeStyle.contentText}>
                                            <h5>{item.name}</h5>
                                            <p>{item.category_name}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default savedRecipe;