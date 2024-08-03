import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./Redux/store.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "./index.css";

const persiter = persistStore(store) 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persiter} >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
