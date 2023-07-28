import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function DashboardSegment() {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));

	return (
		<Grid container spacing={4}>
			<Grid item xs={4}>
				<Item elevation={3}>
					<Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
						Performance Statistics
					</Typography>
					<Divider />
					<Typography variant="h5" component="div">
						{/* be{bull}nev{bull}o{bull}lent */}
					</Typography>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						adjective
					</Typography>
					<Typography variant="body2">
						well meaning and kindly.
						<br />
						{'"a benevolent smile"'}
					</Typography>
				</Item>
			</Grid>
			<Grid item xs={6}>
				<Item elevation={3}>
					<Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
						Upcoming Activities
					</Typography>
					<Divider />
				</Item>
			</Grid>
			<Grid item xs={4}>
				<Item elevation={3}>xs=4</Item>
			</Grid>
			<Grid item xs={4}>
				<Item elevation={3}>xs=4</Item>
			</Grid>
		</Grid>
	);
}

export default DashboardSegment;
