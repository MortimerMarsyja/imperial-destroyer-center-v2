// utils
import { routes } from "@utils/routes";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// components
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import SideNav from "@components/Nav";
// containers
import GlobalContainer from "@containers/GlobalContainer";
import NotFound from "@pages/NotFound";
// providers
import { ToastContentProvider } from "@contexts/toastContext";
import { ThemeProvider } from "@contexts/themeContext";

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <ToastContentProvider>
        <BrowserRouter>
          <GlobalContainer />
          <Navbar />
          <div className="page-layout">
            <SideNav />
            <div className="page-content">
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.name}
                    path={route.path}
                    element={route.element}
                  />
                ))}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
          <Footer>
            <div>Trebuchet</div>
          </Footer>
        </BrowserRouter>
      </ToastContentProvider>
    </ThemeProvider>
  );
};

export default App;
