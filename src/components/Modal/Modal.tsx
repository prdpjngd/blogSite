import React, {useContext} from 'react';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import {auth} from "../../services/firebase";
import firebase from 'firebase';
import {ActionContext} from "../../context/GlobalState";

const Modal = ({handleClose}) => {
    const {dispatch} = useContext(ActionContext);

    const loginWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        console.log(provider)
        auth().signInWithPopup(provider).then(function(result) {
            console.log(result);
            console.log(result.user);
            dispatch({
                type: "LOGIN",
                payload : {
                    user : result.user
                }
            })

            dispatch({
                type: "CLOSE_MODAL"
              })
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
          
    }

    return (
        <div className="modal_Bg">
            <div className="modal_box">
                <div className="modal_box__iner">
                    <div className="modal_box_close_box" onClick={handleClose}>
                        <button className="close_box_button">
                            <CloseOutlinedIcon />
                        </button>
                    </div>
                    <div className="modal_main_part">
                        <div className="modal__inner_portion">
                            <h2 className="medium_login_text">Join Medium</h2>
                            <div className="SignIn_button_area">
                                <button className="login__button" onClick={loginWithGoogle}>
                                    Sign in with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;