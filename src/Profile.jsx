
import { useState, useEffect } from 'react';
import './index.css';


function Profile() {
  const [product, setProducts] = useState([]);
  const [product1, setProducts1] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log( 'Fetching data')
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/1');
        const data = await response.json();
        console.log(data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProducts();

    const fetchProducts1 = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/3');
        const data = await response.json();
        console.log(data);
        setProducts1(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProducts1();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.title} /> 
      <button onClick={() => setCount((count) => count + 1)}>
          Add Item
      </button>
      <br />
      <h2>{product1.title}</h2>
      <p>Price: ${product1.price}</p>
      <img src={product1.image} alt={product1.title} /> 
      <button onClick={() => setCount((count) => count + 1)}>
          Add Item
      </button>
      <br />
      <p> {count} </p>
      
    </div>
    
  );
}

export default Profile;
