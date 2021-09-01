import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage"
import SignInPage from "../pages/SignInPage"
import FeedPage from "../pages/FeedPage"
import PostPage from "../pages/PostPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={["/", "/login"]}>
                    <LoginPage />
                </Route>

                <Route exact path={"/signup"}>
                    <SignInPage />
                </Route>

                <Route exact path={"/feed"}>
                    <FeedPage />
                </Route>

                <Route exact path={"/post/:postId"}>
                    <PostPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;