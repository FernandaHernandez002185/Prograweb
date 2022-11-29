//Este aun no esta implementado
export const Profile = (props) => {


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="auth-form-container">
            <h2>Informacion Guardada!</h2>
        <form className="loginExitoso-form" onSubmit={handleSubmit}>
        </form>
    </div>
    )
}