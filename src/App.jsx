import { useSelector } from "react-redux";
import Display from "./Components/Display";
import Signup from "./Components/Form/Signup";

function App() {
  const { formList } = useSelector((state) => state.signup);

  return (
    <>
      <Signup />

      {formList.length > 0 && <Display />}
    </>
  );
}

export default App;
