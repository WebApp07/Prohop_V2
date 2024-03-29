import Product from "../components/Product"
import { Row, Col, Spinner } from "react-bootstrap"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { useGetProductsQuery } from "../slices/productApiSlice"

const HomeScreen = () => {

  const { data:  products, isLoading, error } = useGetProductsQuery();

  return (
    <>

    {isLoading ? (
      <Loader />
    ) : error ? (<Message variant='danger'>{error.data?.message || error.error}</Message>) : (<>
       <h1>Latest Products</h1>
       <Row>
           {products.map((product) => (
               <Col key={product._id} sm={12} md={10} lg={4} xl={3}>
                  <Product product={product} /> 
               </Col>
           ))}
       </Row>
    
    </>) }



     
    </>
  )
}

export default HomeScreen