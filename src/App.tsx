import {Router} from "./router/routes";
import MuiThemeProvider from "./utilities/theme/MuiThemeProviders";
import './App.css'
import { DataValueProvider } from './utilities/context/context';
import {ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
function App() {
  

  return (
    <>
      <DataValueProvider>
        <MuiThemeProvider>
          <Router />
          <ToastContainer  />
        </MuiThemeProvider>
      </DataValueProvider>
    </>
  );
}

export default App
