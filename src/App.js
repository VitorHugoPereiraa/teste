import React, { useState } from "react";
import Snackbar from "./components/Snackbar";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <p onClick={() => setOpenModal(true)}>Welcome to my library.</p>
      <Snackbar
        open={openModal}
        handleClose={() => setOpenModal(false)}
        type="error"
        text="ola"
        duration={2000}
      />
    </div>
  );
}

export default App;
