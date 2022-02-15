import React from "react";
import { withRouter } from "react-router-dom";

const MenuProducts = ({ description, title, imageUrl, price }) => {
  return (
    <div className="container">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">IMAGE</th>
            <th scope="col">PRODUCT</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">
            <img src={imageUrl} alt="prod" class="img-thumbnail w-50" />
            </td>
            <td className="">{title}</td>
            <td className="">{description}</td>
            <td className="">U$D {price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(MenuProducts);
