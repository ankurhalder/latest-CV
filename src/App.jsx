import { Fragment } from "react";
import Resume from "../component/resume";
import ankurHalder from "../data/ankurHalder";
function App() {
  return (
    <Fragment>
      <Resume data={ankurHalder} />
    </Fragment>
  );
}

export default App;
