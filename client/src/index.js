import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {SnackbarProvider} from 'notistack'
ReactDOM.render(
  <React.StrictMode>
<SnackbarProvider maxSnack={3}> 
    <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
