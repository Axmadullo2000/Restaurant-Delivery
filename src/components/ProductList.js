import { ProductItem } from './ProductItem'

export const ProductList = ({product=[]}) => {
  return (
    <div className="list" key={ product }>
        {
            product.map(category => (
                <ProductItem key={ category.idMeal } { ...category } />
            ))
        }
    </div>
  )
}
