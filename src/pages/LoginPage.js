import React from 'react';
import {useHistory} from 'react-router-dom';

const LoginPage = ({toggleAuth}) => {

    const history = useHistory();

    function nextPage () {
        history.push("/blogposts");
        toggleAuth(true);
    }

    return (
        <div>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen!</p>
            <button
                type="button"
                onClick={nextPage}
            >
                Inloggen
            </button>
        </div>
    );
};

export default LoginPage;