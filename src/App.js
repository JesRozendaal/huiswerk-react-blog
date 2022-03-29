import React, { useState } from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogOverviewPage from "./pages/BlogOverviewPage";
import BlogpostPage from "./pages/BlogpostPage";

// Stappenplan
// 1. Maak een map components aan en een map pages en maak .js files voor de verschillende pagina's.
// 2. Voeg content toe aan de pagina's.
// 3. Importeer alles in App.js
// 4. Installeer React-router-dom
// 5. Navlink maken en maak hier een component van.
// 6. Maak de routes aan in App.js
// 7. Importeer in BlogOverviewPage posts.json en zorg ervoor dat deze in een lijst worden weergegeven.
// 8. Haal via useParams de juiste blog binnen in BlogpostPage en geef deze weer op de pagina
// 9.

function PrivateRoute({ children, isAuth, ...rest}) {
    // omdat we nog steeds alle mogelijke properties zoals exact etc. op Route willen zetten, kunnen we met de ...rest operator zeggen:
    // al die andere props die je verder nog ontvangt, zet die ook allemaal maar op <Route>
    return (
        <Route {...rest}>
            {isAuth ? children : <Redirect to="/login" />}
        </Route>
    )
}

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <>
          <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />

        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/login">
                <LoginPage
                isAuth={isAuthenticated}
                toggleAuth={toggleIsAuthenticated}
                />
            </Route>
            <PrivateRoute exact path="/blogposts" isAuth={isAuthenticated}>
                <BlogOverviewPage />
            </PrivateRoute>
            <PrivateRoute exact path="/blog/:blogId" isAuth={isAuthenticated}>
                <BlogpostPage />
            </PrivateRoute>
                </Switch>
      </>
  );
}

export default App;
