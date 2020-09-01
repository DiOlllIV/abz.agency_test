import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Acquaintance from "./components/Acquaintance";
import Users from "./components/users/Users";
import RegistrationForm from "./components/registration/RegistrationForm";
import Footer from "./components/Footer";

const App = () => { 
  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        <Acquaintance />
        <Users />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
export default App;