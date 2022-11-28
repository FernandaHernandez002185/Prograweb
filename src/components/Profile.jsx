import React, { useState } from "react";
import './Profile.css';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="Update-profile-info" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input value={name} name="name" id="name" placeholder={name} />
                <label htmlFor="email">Correo</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder={email} id="email" name="email" />
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder={pass} id="password" name="password" />
                <label htmlFor="About Me">Nombre:</label>
                <input value={ab} name="name" id="name" placeholder={name} />
                <button type="submit"><strong>Guardar!</strong></button>
            </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>¿Ya tienes cuenta? <strong>Iniciar Sesión.</strong> </button>
    </div>
    )
}