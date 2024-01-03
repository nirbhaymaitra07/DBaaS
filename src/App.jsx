import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Structure from "./structure/Structure";
import ContextProvider from "./Context/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Structure />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
