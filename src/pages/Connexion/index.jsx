import './index.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    
    const logIn = async (event) => {
        event.preventDefault();

        let user = {
        email,
        password
        };

    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });

      const responseData = await response.json();
      console.log(responseData);

      if (response.status === 200) {
        sessionStorage.setItem('token', responseData.body.token)
        console.log("Utilisateur connecté avec succès")
        navigate("/connexion/user");
      } else if (response.status === 400) {
        setErrorMessage('Email ou mot de passe incorrecte !!');
      } else if(response.status === 401){
        setErrorMessage('Remplissez les champs s"il vous plait! !!');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Erreur lors de la connexion. Veuillez réessayer plus tard.');
    }
  };
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={logIn}>
                    <div className="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username"  value={email}
                          onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" value={password}
                          onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </div>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <button type="submit" className="sign-in-button">Sign In</button>
                    
                </form>
            </section>
        </main>
    );
  }
export default Connexion