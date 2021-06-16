import React from "react";
import Theme from './theme';
import Login from './component/login'

function App() {
  return (
    <div className="App-Class">
      <Theme.AppBackground>
        <Login />
      </Theme.AppBackground>
    </div>
  );
}

export default App;
