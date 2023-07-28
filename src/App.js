import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
// import Layout from "./components/Layout";
import Missing from "./components/Missing";
import { Routes, Route } from "react-router-dom";
import RequireAuth, { CheckAuth } from "./components/RequireAuth";
// import ROLE from "./config/Roles.config";

function App() {
  return (
		<Routes>
			{/* <Route path="/" element={<Layout />}>  */}
			{/* uncomment the above when using authentication */}

			{/* Entry Route for the App */}
			<Route element={<CheckAuth />}>
				<Route path="/" element={<Login />} />
			</Route>

			{/* Protected Routes for the App */}

      {/* Routes for undergraduates */}
			{/* <Route element={<RequireAuth role={ROLE.UNDERGRAD} />}> */}
			<Route
				path="/undergraduate"
				element={<Dashboard role="undergraduate" indicator={0}/>}
			/>
      <Route path="/undergraduate/courses" element={<Dashboard role="undergraduate" indicator={1}/>}/>
      <Route path="/undergraduate/progress" element={<Dashboard role="undergraduate" indicator={2}/>}/>
      <Route path="/undergraduate/clubs" element={<Dashboard role="undergraduate" indicator={3}/>}/>
      <Route path="/undergraduate/timetables" element={<Dashboard role="undergraduate" indicator={4}/>}/>
      <Route path="/undergraduate/activities" element={<Dashboard role="undergraduate" indicator={5}/>}/>
      <Route path="/undergraduate/notifications" element={<Dashboard role="undergraduate" indicator={6}/>}/>
      <Route path="/undergraduate/profile" element={<Dashboard role="undergraduate" indicator={7}/>}/>
			{/* </Route> */}


      {/* Routes for Lecturers */}
			{/* <Route element={<RequireAuth role={ROLE.LECTURER} />}> */}
			<Route path="/lecturer" element={<Dashboard role="lecturer" indicator={0} />} />
			{/* </Route> */}


      {/* Routes for employees */}
			{/* <Route element={<RequireAuth role={ROLE.EMPLOYEE} />}> */}
			<Route path="/employee" element={<Dashboard role="employee" indicator={0}/>} />
			{/* </Route> */}


      {/* Routes for webmasters */}
			{/* <Route element={<RequireAuth role={ROLE.WEBMASTER} />}> */}
			<Route path="/webmaster" element={<Dashboard role="webmaster" indicator={0} />} />
			{/* </Route> */}

			{/* Catch all the other Routes */}
			<Route path="*" element={<Missing />} />
			{/* </Route> */}
		</Routes>
	);
}

export default App;
