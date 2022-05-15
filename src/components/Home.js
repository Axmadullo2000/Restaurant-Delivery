import { useEffect, useState } from 'react';

import { getAllCategory } from '../Api';

import { CategoryList } from "./CategoryList"

import { Loader } from './Loader';

export const Home = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    getAllCategory().then(data => {
      setData(data.categories)
    })
  }, [])

  return (
    <>
      {
        !data.length ? <Loader /> : <CategoryList data={ data } />
      }
    </>

  )
}
