import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Groups2Icon from "@mui/icons-material/Groups2";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SubjectIcon from "@mui/icons-material/Subject";
import EventNoteIcon from "@mui/icons-material/EventNote";
import RowingIcon from "@mui/icons-material/Rowing";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
function UndergradSide({ w, mobileOpen, handleDrawerToggle, selectedId }) {
	const container = w !== undefined ? () => w.document.body : undefined;
	const history = useNavigate();
	const handleLinks = (index) => {
		console.log("link clicked");
		console.log(index);
		var link =
			index === 0
				? "/undergraduate"
				: index === 1
				? "/undergraduate/courses"
				: index === 2
				? "/undergraduate/progress"
				: index === 3
				? "/undergraduate/clubs"
				: index === 4
				? "/undergraduate/timetables"
				: index === 5
				? "/undergraduate/activities"
				: index === 6
				? "/undergraduate/notifications"
				: "/undergraduate/profile";
		history(link);
	};
	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{[
					"Dashboard",
					"Courses",
					"My Progress",
					"My Clubs",
					"Time Tables",
					"Activities",
					"Notifications",
					"Profile",
				].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton
							selected={index === selectedId ? true : false}
							onClick={() => {
								handleLinks(index);
							}}
							id={index}
						>
							<ListItemIcon>
								{index === 0 ? (
									<DashboardIcon />
								) : index === 1 ? (
									<SubjectIcon />
								) : index === 2 ? (
									<TrendingUpIcon />
								) : index === 3 ? (
									<Groups2Icon />
								) : index === 4 ? (
									<EventNoteIcon />
								) : index === 5 ? (
									<RowingIcon />
								) : index === 6 ? (
									<NotificationsIcon />
								) : (
									<AccountCircleIcon />
								)}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["Logout"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<Fragment>
			<Drawer
				container={container}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
			>
				{drawer}
			</Drawer>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: "none", sm: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
				open
			>
				{drawer}
			</Drawer>
		</Fragment>
	);
}

export default UndergradSide;
