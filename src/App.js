import React from "react";
import UseRef from "./UseRef/UseRef";

const App = () => {
  return (
    <div>
      <UseRef />
    </div>
  );
};

export default App;

////////////////////////////////////////////////////
/* import React from "react";
import Dem022 from "./UseMemo/Dem022";
import UseMemoComp from "./UseMemo/UseMemoComp";

const App = () => {
  return (
    <div>
      <UseMemoComp />
      <Dem022 />
    </div>
  );
};

export default App; */

////////////////////////////////////////////////////////
/* import React from "react";
import ParentComp from "./UseCallback/ParentComp";

const App = () => {
  return (
    <div>
      <ParentComp />
    </div>
  );
};

export default App; */

/////////////////////////////////////////////////////////////////////////////////
/* import React from "react";
import ChildrenProp from "./childrenProp/ChildrenProp";

const App = () => {
  return (
    <div>
      <ChildrenProp />
    </div>
  );
};

export default App; */

///////////////////////////////////////////////////////////////////////////
/* import React from "react";
import ApiDemo from "./AxiosFetchApi/ApiDemo";
import ButtonClick from "./AxiosFetchApi/ButtonClick";
import UseReducerApi from "./AxiosFetchApi/UseReducerApi";
const App = () => {
  return (
    <div>
      {/* <ApiDemo />
      <ButtonClick /> 
      <UseReducerApi />
    </div>
  );
};

export default App; */

///////////////////////////////////////////////////////////////////
/* import React from "react";
import Provider from "./UseReducer/UseReducerAndUseContext/Provider";

const App = () => {
  return (
    <>
      <Provider></Provider>
    </>
  );
};

export default App; */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* import React from "react";
import StateActionObj from "./UseReducer/components/StateActionObj";

const App = () => {
  return (
    <div>
      <StateActionObj />
    </div>
  );
};

export default App; */

/////////////////////////////////////////////////////////////////
/* import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Demo-App/Components/Home";
import Add from "./Demo-App/Components/Add";
import Edit from "./Demo-App/Components/Edit";
import StateProvider from "./Demo-App/context/StateProvider";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <StateProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </Router>
      </StateProvider>
    </div>
  );
};

export default App; */

///////////////////////////////////////////////////////////////////////////////////////////
/* import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import StateProvider from "./UseReducer/Context/StateProvider";

const App = () => {
  return (
    <>
      <div>
        if we want to pass something between components as an props fro parent
        to child component we use children prop we can pass component data as
        well using children prop
        <StateProvider>Hello I am State Provider </StateProvider>
      </div>
    </>
  );
};

export default App; */

////////////////////////////////////////////////////////////////////////////////////////
/* import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./CrudDemo/AddUser";
import EditUser from "./CrudDemo/EditUser";
import Home from "./CrudDemo/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalProvider from "./CrudDemo/Context/GlobalState";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route exact path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
 */
