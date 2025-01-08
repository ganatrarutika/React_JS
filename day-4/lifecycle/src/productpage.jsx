
import React, { useState, useEffect } from "react";

const Productpage = () => {
  const [products, setProducts] = useState([]); 
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [view, setView] = useState("form");

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (image && productName && price && description) {
      const newProduct = {
        id: Date.now(), 
        image,
        productName,
        price,
        description,
      };

      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts)); 

      setImage("");
      setProductName("");
      setPrice("");
      setDescription("");
    }
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <div>
        <button onClick={() => setView("form")}>Form</button>
        <button onClick={() => setView("product")}>Product</button>
      </div>

      {view === "form" ? (
        <div>
          <h1>Add a Product</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
            <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
            <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <div>
          <h1>Product List</h1>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                <img
                  src={product.image}
                  alt={product.productName}
                  style={{ width: "100px", height: "100px" }}
                />
                <p><strong>Name:</strong> {product.productName}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Description:</strong> {product.description}</p>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            ))
          ) : (
            <p>No products added yet. Please add a product.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Productpage;
