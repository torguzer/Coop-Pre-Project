import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Image, Rate, Button } from 'antd'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

function getProductById(id) {
  return axios.get(`https://dummyjson.com/products/${id}`)
    .then((response) => response.data)
}

function ProductDetail() {

  const navigate = useNavigate();

  const goPath = (path) => {
    navigate(path);
  };

  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (location.state && location.state.product) {
      setProduct(location.state.product);
    } else {
      getProductById(id)
        .then(data => setProduct(data))
        .catch((error) => console.log(error));
    }
  }, [location, id]);

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <div className='productDetail' style={{ backgroundColor: '#f5f5f5', width: '90%', borderRadius: '10px' }}>
        <Row style={{ marginTop: '20px', marginBottom: '20px', justifyContent: 'left' }} gutter={[16, 16]}>
          <Col span={8} >
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={400}
              height={400}
              style={{
                marginLeft: 20,
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: 10
              }}
            />
          </Col>
          <Col span={12} style={{ fontFamily: 'Nunito', fontSize: '20px' }}>
            <div>
              <p style={{ marginTop: -6 }}>Name: {product.title}</p>
            </div>
            <div style={{ marginTop: -6 }}>
              <p>ProductInformation: {product.description}</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p style={{ marginTop: -6 }}>Price: {product.price} $ </p>
              <p style={{ marginTop: -6, textDecorationLine: 'line-through', color: 'red', marginLeft: 10 }}>{product.discountPercentage ? Math.round(product.price / (1 - product.discountPercentage / 100)) : product.price} $</p>
            </div>
            <div style={{ marginTop: -25 }}>
              <p>Stock: {product.stock}</p>
            </div>
            <div style={{ marginTop: -6 }}>
              <p>Brand: {product.brand}</p>
            </div>
            <div style={{ marginTop: -6 }}>
              <p>Category: {product.category}</p>
            </div>
            <div>
              <Rate value={product.rating} allowHalf disabled={true} style={{ marginBottom: 70 }} />
            </div>
            <div>
              <Button style={{ color: '#00C754', backgroundColor: 'transparent', marginRight: 20, border: '2px solid #00C754' }}>
                Add to cart
              </Button>
              <Button
                onClick={() => goPath('/productApiTest')}
              >
                Back
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>

  );
}

export default ProductDetail;
