import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import classes from './Root.module.css'

const RootLayout = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </React.Fragment>
    )
}

export default RootLayout;