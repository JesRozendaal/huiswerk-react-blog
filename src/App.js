import React, { useState } from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
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


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <>
          <Navigation />

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
            <Route exact path="/blogposts">
                <BlogOverviewPage />
            </Route>
            <Route path="/blogposts/:blogId">
                <BlogpostPage />
            </Route>
                </Switch>
      </>
  );
}

export default App;
