import React, { useState } from 'react';
import './ForgotPassword.css'; 
import im from './forgotimg.png';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    let navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handlreset = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        navigate("/Reset");
    };

    return (
        <div className="forgot-container">
           
            <div className="forgot-form">
                <h2>Vous avez oublié votre mot de passe ?</h2>

                <p>Veuillez entrer l’adresse e-mail que vous avez utilisée pour vous inscrire et vous recevrez un e-mail avec un lien pour réinitialiser votre mot de passe !</p>
                <form onSubmit={handlreset}>
                    <div className="input-group">

                        <input type="email" id="email" placeholder="Entrez votre adresse e-mail" required
                             />

                        <FaEnvelope className='icon' />
                    </div>
   
                    <button className=" btn-block reset-btn"><span>Réinitialiser le mot de passe</span></button>
                      
                            <Link className="retour" to="/"> Se reconnecter </Link>
                        
                </form>
            </div>
            <div className="login-image">
                <img src={im} alt="Login Illustration" />
            </div>
        </div>
    );
};

export default ForgotPassword;
