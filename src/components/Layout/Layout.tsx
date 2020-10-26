import React, {Fragment, useEffect, useContext} from 'react';
import Header from '../Header/Header';
import GlobalState from "../../context/GlobalState";
import {auth} from "../../services/firebase";
import {ActionContext} from "../../context/GlobalState";

const Layout = ({children}) => {
    const {dispatch} = useContext(ActionContext);

    useEffect(() => {
        let unsubscribe = false;
        const checkUser = async () => {
            await auth().onAuthStateChanged((user) => {
                console.log(user);
                if (!unsubscribe && user) {
                    console.log('dispatched')
                    dispatch({
                        type: "LOGIN",
                        payload : {
                            user : user
                        }
                    })
                }
            })
        }
        
        checkUser();
        
        return () => {
            unsubscribe = true;
        }
    }, [])

    return (
        <Fragment>
            <GlobalState>
            <Header/>
            {children}
            </GlobalState>
        </Fragment>
    )
}

export default Layout;