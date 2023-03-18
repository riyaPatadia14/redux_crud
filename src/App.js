import "./App.css";
import ReduxTable from "../src/redux-app/component/ReduxTable";
import ReactTable from "./react-app/component/ReactTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            {/* <ReactTable /> */}
            {/* <Route path="" element={} /> */}
            {/* <Route path="reacttable" element={<ReactTable />} /> */}
            <Route path="reduxtable" element={<ReduxTable />} />
            {/* </Route> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
