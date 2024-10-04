import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login';
import Form from './components/Form';
import { AuthProvider, useAuth } from './AuthContext';

const AppRoutes = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Switch>
      <Route path="/login">
        {isLoggedIn ? <Redirect to="/form" /> : <Login />}
      </Route>
      <Route path="/form">
        {isLoggedIn ? <Form /> : <Redirect to="/login" />}
      </Route>
      <Redirect from="/" to="/login" />
    </Switch>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <AppRoutes />
    </Router>
  </AuthProvider>
);

export default App;
