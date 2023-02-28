import "./App.css";
import ReduxTable from "./component/ReduxTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            <Route index element={<ReduxTable />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
