import { useEffect, useState } from "react"

import { useNavigate, useParams } from "react-router-dom"

import { getRecipeById } from "../Api"

import { Loader } from "./Loader"

export const Recipe = () => {
    const { id } = useParams()
    const [ recipe, setRecipe ] = useState([])
    const [ showRecipe, setShowRecipe ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getRecipeById(id).then(data => {
            setRecipe(data.meals[0])
        })
    })

    return (
        <>
            {!recipe.idMeal ? <Loader /> : (
                <div className="container recipe_block col s12" key={ id }>
                    <button className="btn goBack" onClick={ () => navigate(-1) }>Go Back</button>

                    <img className="recipe__img" src={ recipe.strMealThumb } alt={ recipe.strMeal } />
                    <h1>{ recipe.strMeal }</h1>
                    <h2><b>Category: </b>{ recipe.strCategory }</h2>
                    <h2><b>Area: </b>{ recipe.strArea }</h2>
                    <p className="recipe__instruction">{ recipe.strInstructions }</p>

                    <button className="btn show__recipe" onClick={ () => setShowRecipe(!showRecipe) }>{ !showRecipe ? "Show" : "Hide" } Recipe</button>
                { showRecipe ? ( 
                    <div className="recipe_list">
                        <h3><b>Recipe: </b></h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>
                            <tbody>  
                                {
                                    Object.keys(recipe).map(key => {
                                        if (key.includes("Ingredient") && recipe[key]) {
                                            return (
                                                <tr>
                                                    <td>{ recipe[key] }</td>
                                                    <td>{ recipe[`strMeasure${key.slice(13)}`] }</td>
                                                </tr>
                                            )
                                        }
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ) : null }
                {recipe.strYoutube ? (
                    <>
                        <h2><b>Video Recipe</b></h2>
                        <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen title={ recipe.strCategory }></iframe>
                    </>
                    ) : null }
            </div>
            )}
        </>
    )
}




