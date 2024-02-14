import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {HashRouter as Router} from "react-router-dom"; // Import HashRouter and alias it as Router

function App() {
   return (
      <div>
         <Router> {/* Use Router here, which is actually HashRouter */}
            <BaseLayout/>
         </Router>
      </div>
   );
}

export default App;
