import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Entry Route for the App */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes for the App */}
        <Route
          path="/undergraduate"
          element={<Dashboard role="undergraduate" />}
        />
        <Route path="/lecturer" element={<Dashboard />} />
        <Route path="/employee" element={<Dashboard />} />
        <Route path="/webmaster" element={<Dashboard />} />

        {/* Catch all the other Routes */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
