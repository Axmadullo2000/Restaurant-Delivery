import React, { useEffect, useState } from 'react'

import { useParams } from "react-router-dom"

import { getCategoryMeal } from '../Api'

import { Loader } from './Loader'

import { ProductList } from './ProductList'

export const Product = () => {
  const { name } = useParams()
  const [ product, setProduct ] = useState([])
  
    useEffect(() => {
        getCategoryMeal(name).then(data => {
            setProduct(data.meals)
        })
    }, [ name ])

    return (
        <>
            {!product.length ? <Loader /> : <ProductList product={ product }  />}
        </>
    )
}

