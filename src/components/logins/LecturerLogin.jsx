import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { useState } from "react";
import {
  Card,
  Box,
  IconButton,
  Button,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  Grid,
} from "@mui/material";

function LecturerLogin() {
  const [formData, handleChange] = useState({ employeeID: "", password: "" });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormChange = (evt) => {
    const changedField = evt.target.name;
    const newVal = evt.target.value;
    handleChange((formData) => {
      return { ...formData, [changedField]: newVal };
    });
  };

  <Card variant="outlined">
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 2, my: 1 }} />
          <TextField
            id="input-with-sx"
            label="Employee-ID"
            variant="standard"
            sx={{ marginBottom: 1, marginTop: 2 }}
            fullWidth
            name="employeeId"
            //   placeholder="username"
            value={formData.username}
            onChange={handleFormChange}
          />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <KeyIcon sx={{ color: "action.active", mr: 1, my: 1 }} />
          <FormControl sx={{ m: 1, width: "22ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          endIcon={<LoginIcon />}
          sx={{ marginBottom: 2, marginTop: 2 }}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  </Card>;
}

export default LecturerLogin;
