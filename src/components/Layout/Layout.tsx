import React, {Fragment, useEffect, useContext} from 'react';
import Header from '../Header/Header';
import {auth} from "../../services/firebase";
import {ActionContext} from "../../context/GlobalState";

const Layout = ({children}) => {
    const {dispatch } = useContext(ActionContext);

    useEffect(() => {
        let unsubscribe = false;
        const checkUser = async () => {
            await auth().onAuthStateChanged((user) => {
                if (!unsubscribe && user) {
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
            <Header/>
            {children}
        </Fragment>
    )
}

export default Layout;