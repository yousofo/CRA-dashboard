import Bar from "./view/Bar";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./view/Header";


export const theme = createContext(null)
export const barWidth = createContext(null);

function App() {
  const [dark, setDark] = useState(false)
  const [width, setWidth] = useState(true)
  return (
    <theme.Provider value={[dark, setDark]}>
      <barWidth.Provider value={[width, setWidth]}>
        <div className={`yn-sf app flex ${dark ? "dark" : "light"}`}>
          <Bar />
          <div className="w-full h-screen">
            <Header />
            <Outlet/>
          </div>
        </div>
      </barWidth.Provider>
    </theme.Provider>
  );
}

export default App;
