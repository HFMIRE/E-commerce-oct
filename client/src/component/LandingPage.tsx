import React, { useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import {Grid}  from "@chakra-ui/react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const LandingPage = () => {
  const [allProducts, setallProducts] = useState([])
    axios.get('https://fakestoreapi.com/products')
    .then(function (response) {
        console.log(response.data)
      const productsData = response.data; 
      setallProducts(productsData)

      })
      .catch(function (error) {
        console.log(error);
      })
    
    return (
        <div>
            {/* <Grid gap="1" templateColumns="repeat(, 1fr)"> */}
          <Carousel responsive={responsive}>
            {
                allProducts.map(({category, 
                    description, 
                    id, 
                    image, 
                    price, 
                    rating, 
                    title }, idx,  []) => {
                      return ( <ProductCard category={category}
                      key={idx}
                      description = {description}
                      id ={id}
                      image = {image}
                      price = {price}
                      rating = {rating}
                      title = {title}/>
                      )

                })
            }
            </Carousel>
            {/* </Grid> */}
        </div>
    )
}

export default LandingPage

// category: 
// description: 
// id: 1
// image: 
// price: 
// rating: 
// title: