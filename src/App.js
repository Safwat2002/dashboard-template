import './style/dark.scss';

import {Home, Login, New, List, Single} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productsInputs, userInputs } from "./assets/formsource";

import { useState, useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme] = useState(''); 

  return (
    <div className={"app " + theme}>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <BrowserRouter>
          <Routes>
            
              <Route path="/" >
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="users" >
                  <Route index element={<List source={"Users"} />}   />
                  <Route path=":userId" element={<Single />}/>
                  <Route path="new" element={<New title={"Add New User"} inputs={userInputs} />} />
                </Route>

                <Route path="products">
                  <Route index element={<List source={"Products"}/>} />
                  <Route path=":productId" element={<Single />} />
                  <Route path="new" element={<New title={"Add New Product"} inputs={productsInputs} />} />
                </Route>
              </Route>
          </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>

   </div>
  );
}

export default App;
