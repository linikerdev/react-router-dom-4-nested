import React from 'react';
import { Link, Route } from "react-router-dom";

export const NestedView = ({ match }) => {
  return (
    <div>
      {/*default message*/}
      <Route exact path={match.url} render={() => (
        <h3>Please select a section:</h3>
      )}/>
      <Link to={`${match.url}/info`}>Info - </Link>
      <Link to={`${match.url}/sobre`}>Sobre - </Link>
      <Link to={`${match.url}/contacts`}>Contact - </Link>
      <Link to={`${match.url}/private`}>Private</Link>
      <Route path={`${match.url}/private`} component={Private}/>
    </div>
  )
};

const SubView = ({ match }) => (
  <div>
    <h3>Section: {match.params.sectionName}</h3>
  </div>
);


const Private  = () => (
  <div>
    <h1>Isso é uma pagina privada</h1>
  </div>
)