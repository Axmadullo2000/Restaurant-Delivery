import { Link, useNavigate } from 'react-router-dom'

export const ProductItem = (props) => {
  const { strMeal, strMealThumb, idMeal } = props
  const navigate = useNavigate()

  return (
    <>
      <button className="btn goBackFromProduct" onClick={() => navigate(-1)}>Go Back</button>
        <div className="card" id={ idMeal }>
            <div className="card-image">
                <img src={ strMealThumb } alt={ strMeal } />
                <p className="card-title">{ strMeal.slice(0, 22) }...</p>
            </div>
            <div className="card-action">
              <Link className="btn" to={`/product/recipe/${idMeal}`}>Go to Recipe</Link>
            </div>
        </div>
    </>
  )
}
