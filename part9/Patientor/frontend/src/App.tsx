import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button, Divider, Container, Typography } from "@mui/material";

import { apiBaseUrl } from "./constants";
import { Patient } from "./types";

import patientService from "./services/patients";
import PatientListPage from "./components/PatientListPage";

const App = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    useEffect(() => {
        axios
            .get<void>(`${apiBaseUrl}/ping`)
            .then(() => console.log("Backend is reachable"))
            .catch((error) => console.error("Error pinging backend:", error));

        const fetchPatientList = async () => {
            try {
                const patients = await patientService.getAll();
                setPatients(patients);
            } catch (error) {
                console.error("Error fetching patient list:", error);
            }
        };
        void fetchPatientList();
    }, []);

    return (
        <div className="App">
            <Router>
                <Container>
                    <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
                        Patientor
                    </Typography>
                    <Button component={Link} to="/" variant="contained" color="primary">
                        Home
                    </Button>
                    <Divider hidden />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PatientListPage patients={patients} setPatients={setPatients} />
                            }
                        />
                    </Routes>
                </Container>
            </Router>
        </div>
    );
};

export default App;