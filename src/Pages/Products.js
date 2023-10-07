import React from "react";
import MainNavigation from "../Components/MainNavigation";
import { Link, useNavigate } from "react-router-dom";


const PRODUCTS = [
    {
        id: 'p1',
        title: 'product1'
    },
    {
        id: 'p2',
        title: 'product2'
    },
    {
        id: 'p3',
        title: 'product3'
    }
];

const Products = () => {

    return (
        <React.Fragment>
            <h1 style={{ textAlign: 'center' }}>PRODUCTS PAGE!</h1>
            <ul>
                {PRODUCTS.map(pro => <li key={pro.id}>
                    <Link to={`/products/${pro.id}`} >{pro.title}</Link>
                </li>)}
            </ul>
        </React.Fragment>
    )
}

export default Products;