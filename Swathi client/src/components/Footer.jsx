import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <h4>@Grocery Mart - One Destination for all your needs....</h4>
      <div className="footer-body">

        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>All products</li>
        </ul>

        <ul>
          <li>Cart</li>
          <li>Profile</li>
          <li>Orders</li>
        </ul>

        <ul>
          <li>Fruits & Vegetables</li>
          <li>Cakes & Dairy products</li>
          <li>Beverages</li>
        </ul>

        <ul>
          <li>Beauty & Grooming</li>
          <li>Snacks</li>
        </ul>


      </div>
      <div className="footer-bottom">
        <p>@ Grocery Mart.com - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer