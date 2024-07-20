import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="errorPage">
            <p className="errorText">Utilisateur non authentifié. Veuillez vous connecter!</p>
            <Link to="/accueil">Page d'accueil</Link>
            <Link to="/connexion">Page de connexion</Link>
        </div>
    );
}
export default Error;