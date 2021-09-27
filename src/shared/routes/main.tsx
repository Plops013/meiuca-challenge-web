import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import News from "../../pages/News";

export default function MainRoute() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <News />
                </Route>
                <Route>
                    <div>404 Pagina não encontrada</div>
                </Route>
            </Switch>
        </Router>
    );
}