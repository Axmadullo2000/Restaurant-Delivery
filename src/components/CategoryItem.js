import { Link } from 'react-router-dom'

export const CategoryItem = (props) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props

  return (
    <>
        <div className="card" id={ idCategory }>
            <div className="card-image">
                <img src={ strCategoryThumb } alt={ strCategory } />
                <p className="card-title">{ strCategory }</p>
            </div>
            <div className="card-content">
              <p>{ strCategoryDescription.slice(0, 22) }...</p>
            </div>
            <div className="card-action">
              <Link className="btn" to={`/product/${strCategory}`}>Go to Meal</Link>
            </div>
        </div>
    </>
  )
}
