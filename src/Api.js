// List all meal categories

import { API_KEY, API_URL } from "./config"

const getAllCategory = async () => {
    const response = await fetch(`${API_URL}/${API_KEY}/categories.php`)
    return await response.json();
}

const getCategoryMeal = async (item) => {
    const response = await fetch(`${ API_URL }/${API_KEY}/filter.php?c=${item}`);
    return await response.json()
}

const getRecipeById = async (id) => {
    const response  = await fetch(`${ API_URL }/${API_KEY}/lookup.php?i=${id}`);
    return await response.json()
}

export { getAllCategory, getCategoryMeal, getRecipeById }


