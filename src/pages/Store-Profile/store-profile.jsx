import React from 'react';
import photo1 from "/home/amr/projects/Frontend/Seen-Store/src/photos/photo1.png";
import product from "/home/amr/projects/Frontend/Seen-Store/src/photos/product.png";
import ordered from "/home/amr/projects/Frontend/Seen-Store/src/photos/ordered.png";
import rated from "/home/amr/projects/Frontend/Seen-Store/src/photos/rated.png";
import "./store-profile.style.css";

const StoreProfile = () => {
  return (
    <div className="sp-container">
      <div className="sp-top"></div>
      <div className="sp-bottom"></div>
      <div className="sp-center"></div>

      <div className="wrapper">
        <div className="top-icons">
          <i className="fas fa-long-arrow-alt-left"></i>
          <i className="fas fa-ellipsis-v"></i>
          <i className="far fa-heart"></i>
        </div>

        <div className="profile">
          <img
            src={photo1}
            className="thumbnail"
            alt="Profile Thumbnail"
          />
          <div className="check"><i className="fas fa-check"></i></div>
          <h3 className="name">Wing Store</h3>
          <p className="title">accessories</p>
          <p className="description">
            A Store for all your needs. We have a wide range of products for you to choose from.
          </p>
          <button type="button" className="btn">My Instagram</button>
        </div>

        <div className="profile-icons">
          <div className="icon">
            <img src={product} alt="Product" /><i className="product-icon"></i>
            <h4>100</h4>
            <p>products</p>
          </div>

          <div className="icon">
          <img src={ordered} alt="ordered" /><i className="ordered-icon"></i>
            <h4>1k</h4>
            <p>ordered</p>
          </div>

          <div className="icon">
          <img src={rated} alt="rated" /><i className="rated-icon"></i>
            <h4>4</h4>
            <p>rated</p>
          </div>
        </div>

        <div className="products-title">
          <h3>Products</h3>
        </div>
      </div>
    </div>
  );
};

export default StoreProfile;