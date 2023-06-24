import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import { Routes, Route } from "react-router-dom";
import RequireAuth, { CheckAuth } from "./components/RequireAuth";
import ROLE from "./config/Roles.config";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Entry Route for the App */}
        <Route element={<CheckAuth />}>
          <Route path="/" element={<Login />} />
        </Route>

        {/* Protected Routes for the App */}
        <Route element={<RequireAuth role={ROLE.UNDERGRAD} />}>
          <Route
            path="/undergraduate"
            element={<Dashboard role="undergraduate" />}
          />
        </Route>
        <Route element={<RequireAuth role={ROLE.LECTURER} />}>
          <Route path="/lecturer" element={<Dashboard role="lecturer" />} />
        </Route>
        <Route element={<RequireAuth role={ROLE.EMPLOYEE} />}>
          <Route path="/employee" element={<Dashboard role="employee" />} />
        </Route>
        <Route element={<RequireAuth role={ROLE.WEBMASTER} />}>
          <Route path="/webmaster" element={<Dashboard role="webmaster" />} />
        </Route>

        {/* Catch all the other Routes */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
