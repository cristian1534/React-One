import React from "react";
import MenuProducts from "../MenuProducts/MenuProducts";

class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          id:1,
          title: "Notebook MC Book Pro",
          description: "New Product",
          price: 2500,
          imageUrl: "https://avic.ua/assets/cache/products/241409/apple-macbook-pro-m1-chip-13-8-256-touch-bar-space-gray-2020-1-prod_xl.jpg"
        },
        {
          id:2,
          title: "Notebook HP 2022",
          description: "New Product",
          price: 1800,
          imageUrl: "https://avic.ua/assets/cache/products/248261/noutbuk-hp-250-g8-asteroid-silver-27j99ea-1-prod_xl.jpg"
        },
        {
          id:3,
          title: "Cellphone Iphone 12",
          description: "New Product",
          price: 1200,
          imageUrl: "https://avic.ua/assets/cache/products/244591/apple-iphone-11-black-1-INF-prod_xl.jpg"
        },
        {
          id:4,
          title: "Cellphone Sansung",
          description: "New Product",
          price: 1100,
          imageUrl: "https://avic.ua/assets/cache/products/250575/smartfon-samsung-galaxy-s21-sm-g9910-8-256gb-phantom-white-prod_xl.jpg"
        },

      ]
    };
  }

  render() {

    const { products } = this.state

    return (
      <div>
       {
         products.map(({ id, ...otherProductProps}) => (
           <MenuProducts key={id} {...otherProductProps} />
         ))
       }
      </div>
    );
  }
}

export default Products;
