import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {routes.map(({ link, name }) => {
                            return (
                                <li key={name}>
                                    <NavLink
                                        to={link}
                                        activeClassName="nav-active"
                                        exact
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    {routes.map(({ link, Component }) => {
                        return (
                            <Route path={link}>
                                <Component />
                            </Route>
                        );
                    })}
                </Switch>
            </div>
        </Router>
    );
};
