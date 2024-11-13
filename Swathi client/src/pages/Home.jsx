import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import HomeBanner from '../images/home-banner-2.png'
import Products from '../components/Products'
import Footer from '../components/Footer'
import FlashSale from '../components/FlashSale'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();

  const [bannerImg, setBannerImg] = useState();

  useEffect(()=>{
    fetchBanner();
  }, [])

  const fetchBanner = async() =>{
    await axios.get('http://localhost:6001/fetch-banner').then(
      (response)=>{
        setBannerImg(response.data);
      }
    )
  }

  return (
    <div className="HomePage">
      <div className="home-banner">
        {bannerImg ?
          <img src={bannerImg} alt="" />
        :
        ""}
      </div>

      <div className="home-categories-container">

        <div className="home-category-card" >
          <img src="https://www.graceonline.in/assets/img/maincat_icon-7.png" alt="" />
          <h5>Fruits & Vegetables</h5>
        </div>

        <div className="home-category-card" >
          <img src="https://www.graceonline.in/assets/img/maincat_icon-1.png" alt="" />
          <h5>Dairy products</h5>
        </div>

        <div className="home-category-card" >
          <img src="https://www.graceonline.in/assets/img/maincat_icon-2.png" alt="" />
          <h5>Beverages</h5>
        </div>

        <div className="home-category-card" >
          <img src="https://www.graceonline.in/assets/img/maincat_icon-4.png" alt="" />
          <h5>Beauty Products</h5>
        </div>

        <div className="home-category-card" >
          <img src="https://www.graceonline.in/assets/img/maincat_icon-5.png" alt="" />
          <h5>Snacks</h5>
        </div>

      </div>


      <div id='products-body'></div>
      <Products category = 'all'  />


      <Footer />
    </div>
  )
}

export default Home