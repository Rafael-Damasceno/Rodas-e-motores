import { AuthProvider } from "./components/AuthContext/AuthContext";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <AuthProvider>
      <Nav/>
      <Outlet/>
      <Footer/>
    </AuthProvider>

    </>
  );
}

export default App;
