import React from 'react'
import ReactDOM from 'react-dom/client'
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

import App from "./App.tsx";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";

// Store
import { store } from "./store";
import { Provider } from "react-redux";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
		<ToastContainer />
	</React.StrictMode>
);
