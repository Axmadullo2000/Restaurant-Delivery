import { useSearchParams } from 'react-router-dom'

import { CategoryItem } from './CategoryItem'

import { Filter } from './Filter'

export const CategoryList = ({data=[]}) => {

  const [ searchParams, setSearchParams ] = useSearchParams()
  const postQuery = searchParams.get("category") || ""

  return (
    <>
      <h2 className="searchMealByCategory">Search Meals By Category</h2>
      <Filter setSearchParams={setSearchParams} postQuery={postQuery}  />
      <div className="list">
          {
            data.filter(mealCategory => mealCategory.strCategory.includes(postQuery)).map(category => (
              <CategoryItem key={ category.idCategory } { ...category } />
              ))
          }
      </div>
    </>
  )
}
