import { useState } from "react";
import Form from "./Form";

function App() {
  const [show, setshow] = useState(false);
  function handleForm() {
    setshow(true);
  }

  return (
    <div>
     
      {show ? <Form setShow={setshow} /> :  <button onClick={handleForm}>Create PoW</button>}
    </div>
  );
}

export default App;
