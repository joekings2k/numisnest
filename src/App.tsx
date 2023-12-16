import {Router} from "./router/routes";
import MuiThemeProvider from "./utilities/theme/MuiThemeProviders";
import './App.css'
import { DataValueProvider } from './utilities/context/context';

function App() {
  

  return (
    <>
      <DataValueProvider>
        <MuiThemeProvider>
          <Router />
        </MuiThemeProvider>
      </DataValueProvider>
    </>
  );
}

export default App
