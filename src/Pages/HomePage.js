import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import classes from './HomePage.module.css'

const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products');
    }
    return (
        <React.Fragment>
            <div className={classes.containerr}>
                <h1>MY HOME PAGE!!</h1>
                <button onClick={navigateHandler}>Navigate</button>
            </div>
        </React.Fragment>
    )
}

export default HomePage;