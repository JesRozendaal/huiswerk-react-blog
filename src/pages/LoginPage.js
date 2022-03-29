import React from 'react';
import {useHistory} from 'react-router-dom';

const LoginPage = ({toggleAuth}) => {

    const history = useHistory();

    function signIn () {
           toggleAuth(true);
        history.push("/");
    }

    return (
        <section>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen!</p>
            <button
                type="button"
                onClick={signIn}
            >
                Inloggen
            </button>
        </section>
    );
};

export default LoginPage;