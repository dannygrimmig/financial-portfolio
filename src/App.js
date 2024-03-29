import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ContextProvider, myContext } from "./contexts/AppContext";
import { Home } from "./pages/Home/Home";
import { NAV_ROUTES } from "./constants/routes";
import { Authentication } from "./pages/Authentication/Authentication";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { currentUser } = useAuth();
  return !!currentUser ? (
    <ContextProvider>
      <LoggedInApp />
    </ContextProvider>
  ) : (
    <NotLoggedInApp />
  );
}

function LoggedInApp() {
  const [onHomePage, setOnHomePage] = React.useState(false);
  const [activeSlug, setActiveSlug] = React.useState("");
  const { darkMode, setDarkMode } = React.useContext(myContext);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setOnHomePage(pathname === "/");
    setActiveSlug(pathname.replace("/", ""));

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className={`App ${darkMode && "dark"}`}>
      <div className="Window min-h-screen font-body dark:bg-sky-800 text-stone-800">
        <div className="max-w-7xl mx-auto p-4">
          <NavBar
            routes={NAV_ROUTES}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            activeSlug={activeSlug}
            setActiveSlug={setActiveSlug}
          />

          {onHomePage && <Home />}

          <Outlet />
        </div>
      </div>
    </div>
  );
}

function NotLoggedInApp() {
  return (
    <div className="App">
      <div className="Window min-h-screen font-body text-stone-800">
        <Authentication />
      </div>
    </div>
  );
}

export default App;
