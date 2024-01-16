import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AddReview from "./components/add-review";
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import Login from "./components/login";

function App() {
  //react.useState is a 'hook'that lets us add some local state to functional components
  const [user, setUser] = React.useState(null);

  //  useState returns an array with two values: the current state value and a function that lets you update it

  async function login(user = null) {
    // default user to null
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to={"/movies"}>Movies</Link>
            </Nav.Link>
            <Nav.Link href="#link">
              {/* ternary statement where if its true, execute the section after the '?' */}
              {/* If false, execute the section after the colon ':'. */}
              {/* if user is logged in (true) display logout, otherwise display login and link it to /login  */}
              {user ? (
                <a onClick={logout}> Logout User </a>
              ) : (
                <Link to={"/login"}> Login </Link>
              )}

              {/* In React, we can use curly braces ‘{}’ to put in code. */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Switch component renders the first route that matches. */}
      <Switch>
        {/* If the path is “/” or “/movies”, show the MoviesList component */}
        <Route exact path={["/", "/movies"]} component={MoviesList}></Route> 

        {/* we are passing user (the logged-in user information) as props to the AddReview component. */}
        {/* We use render because it allows us to pass in props into a component */}
        <Route
          path="/movies/:id/review"
          render={(props) => <AddReview {...props} user={user} />}
        ></Route>

        <Route
          path="/movies/:id/"
          render={(props) => <Movie {...props} user={user} />}
        ></Route>
        
        <Route
          path="/login"
          render={(props) => <Login {...props} login={login} />}
        ></Route>
      </Switch>
    </div>
  );
}
export default App;
