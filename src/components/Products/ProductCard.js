import React, { useEffect, useState } from 'react';
import EditProductModal from './EditProductModal';
import DeleteProductModal from './DeleteProductModal';
import axios from 'axios';


const ProductCard = ({ product, onProductUpdated, onProductDeleted }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);


  useEffect(()=>{
    fetchCategories();
  },[])

  const fetchCategories = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://localhost:5000/api/categories/getAllCategory',{
        headers: {
          Authorization: `Bearer ${token}`,
        }});
      console.log(response.data)
      setCategories(response.data.categories);
    } catch (err) {
      setError('Error fetching categories');
    }
  };

  const getCategoryNameById = (CaatId) => {
    const category = categories.find((cat) => cat._id === CaatId);
    return category ? category.name : "Unknown";
  };

  return (
    <div className="card mb-3">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Category: {getCategoryNameById(product.category)}</p>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Available: {product.available ? 'Yes' : 'No'}</p>
        <p className="card-text">Quantity: {product.quantity}</p>

        <button
          className="btn btn-warning mr-2"
          onClick={() => setShowEditModal(true)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setShowDeleteModal(true)}
        >
          Delete
        </button>

        <EditProductModal
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
          product={product}
          onProductUpdated={onProductUpdated}
        />

        <DeleteProductModal
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
          product={product}
          onProductDeleted={onProductDeleted}
        />
      </div>
    </div>
  );
};

export default ProductCard;
