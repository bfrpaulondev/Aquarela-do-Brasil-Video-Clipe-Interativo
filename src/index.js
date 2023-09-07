import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@mui/material/styles";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import reportWebVitals from "./reportWebVitals";
import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: enTranslation,
		},
		pt: {
			translation: ptTranslation,
		},
	},
	lng: "pt",
	fallbackLng: "pt",
	interpolation: {
		escapeValue: false, 
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
