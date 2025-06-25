import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash, FaSearch, FaPlus } from 'react-icons/fa';
import './App.css';

function App() {
  // Initial data
  const [items, setItems] = useState([
    { id: 1, name: 'Laptop', price: 55000, category: 'Electronics' },
    { id: 2, name: 'Shirt', price: 999, category: 'Fashion' },
    { id: 3, name: 'Mobile', price: 15999, category: 'Electronics' }
  ]);

  // Form state
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    price: '',
    category: 'Electronics'
  });

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter items
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      // Update item
      setItems(items.map(item => 
        item.id === formData.id ? formData : item
      ));
    } else {
      // Add new item
      const newItem = {
        ...formData,
        id: Math.max(0, ...items.map(item => item.id)) + 1
      };
      setItems([...items, newItem]);
    }
    
    resetForm();
    setShowModal(false);
  };

  // Edit item
  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
    setShowModal(true);
  };

  // Delete item
  const handleDelete = (id) => {
    if (window.confirm('Kya aap sach mein is item ko delete karna chahte hain?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      id: null,
      name: '',
      price: '',
      category: 'Electronics'
    });
    setIsEditing(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Management System</h1>
      
      {/* Search and Add Button */}
      <div className="d-flex justify-content-between mb-4">
        <div className="input-group" style={{ maxWidth: '400px' }}>
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button 
          className="btn btn-primary d-flex align-items-center"
          onClick={() => setShowModal(true)}
        >
          <FaPlus className="me-2" /> Add Product
        </button>
      </div>
      
      {/* Products Table */}
      {filteredItems.length === 0 ? (
        <div className="alert alert-info text-center">
          Koi products nahi mile. Kuch products add karein!
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price (₹)</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>₹{item.price.toLocaleString('en-IN')}</td>
                  <td>{item.category}</td>
                  <td>
                    <button 
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(item)}
                    >
                      <FaEdit /> Edit
                    </button>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Add/Edit Modal */}
      {showModal && (
        <div 
          className="modal fade show" 
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">
                  {isEditing ? 'Edit Product' : 'Add Product'}
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price (₹)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                      min="0"
                      step="1"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select
                      className="form-select"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Electronics">Electronics</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Home">Home</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {isEditing ? 'Update' : 'Add'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
