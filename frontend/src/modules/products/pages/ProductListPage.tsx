import { Card } from '../components/Card.products'
import { mockProducts } from '../mocks/products.mock'

export function ProductListPage() {
	return (
		<section>
			{mockProducts?.map(prod => (
				<Card key={prod.id} productInfo={prod}></Card>
			))}
		</section>
	)
}
