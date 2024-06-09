import { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Container/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
