import React from "react";
import TaskTable from "../components/TaskTable";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Padding } from "@mui/icons-material";

const MainPage: React.FC = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Container sx={{ bgcolor: "#242424", padding: 5 }}>
      <Container sx={{ bgcolor: "#393939", padding: 3 }}>
        <Typography variant="h3">
          <strong>Breakable Toy: To Do App</strong>
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          bgcolor: "#202020",
          padding: 1,
        }}
      >
        <Typography variant="h4">
          <strong>Search Task</strong>
        </Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          height: "8vh",
          bgcolor: "#dedede",
          padding: 2,
        }}
      >
        <Box sx={{ minWidth: 250, marginRight: "15px" }}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            required
            fullWidth
          />
        </Box>
        <Box sx={{ minWidth: 150, marginRight: "15px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 150, marginRight: "15px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              height: "50px",
            }}
          >
            <strong>Search</strong>
          </Button>
        </Box>
      </Container>

      <Container
        sx={{
          display: "flex",
          bgcolor: "#393939",
          paddingTop: 3,
          paddingBottom: 1,
        }}
      >
        <Button variant="contained" sx={{ width: 220, height: 50 }}>
          <strong>Add Task</strong>
        </Button>
      </Container>
      <Container
        sx={{
          display: "flex",
          bgcolor: "#393939",
          paddingTop: 1,
          paddingBottom: 3,
        }}
      >
        <TaskTable />
      </Container>

      <Container
        sx={{
          bgcolor: "#1185cd",
        }}
      >
        <Container
          sx={{
            display: "flex",
            padding: 1,
          }}
        >
          <Box sx={{ marginRight: "5px" }}>
            <Typography variant="h6">
              <strong>Average Time To Finish Task:</strong>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              <strong> 00:00 minutes</strong>
            </Typography>
          </Box>
        </Container>
        <Container
          sx={{
            display: "flex",
            padding: 1,
          }}
        >
          <Box>
            <Typography variant="h6">
              <strong>Average Time To Finish Task By Priority:</strong>
            </Typography>
          </Box>
        </Container>
        <Container
          sx={{
            display: "flex",
            paddingBottom: 1,
          }}
        >
          <Box sx={{ marginRight: "5px" }}>
            <Typography variant="h6">
              <strong>High:</strong>
            </Typography>
          </Box>
          <Box sx={{ marginRight: "15px" }}>
            <Typography variant="h6">
              <strong> 00:00 minutes</strong>
            </Typography>
          </Box>
          <Box sx={{ marginRight: "5px" }}>
            <Typography variant="h6">
              <strong>Medium:</strong>
            </Typography>
          </Box>
          <Box sx={{ marginRight: "15px" }}>
            <Typography variant="h6">
              <strong> 00:00 minutes</strong>
            </Typography>
          </Box>
          <Box sx={{ marginRight: "5px" }}>
            <Typography variant="h6">
              <strong>Low:</strong>
            </Typography>
          </Box>
          <Box sx={{ marginRight: "15px" }}>
            <Typography variant="h6">
              <strong> 00:00 minutes</strong>
            </Typography>
          </Box>
        </Container>
      </Container>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: 3,
        }}
      >
        Francisco Rafael Lezama Hernandez - Spark Program 2024
      </Typography>
    </Container>
  );
};

export default MainPage;
