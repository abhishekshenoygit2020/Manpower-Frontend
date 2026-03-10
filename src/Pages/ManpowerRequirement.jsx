import { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    MenuItem,
    Grid,
    Paper
} from "@mui/material";

function ManpowerRequirement() {

    const [formData, setFormData] = useState({
        skill: "",
        workers: "",
        location: "",
        startDate: "",
        duration: "",
        shift: "Day Shift",
        requirements: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Box
            sx={{
                // minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    width: "100%",
                    maxWidth: 700,
                    mx: "auto",
                    p: 4,
                    borderRadius: 3,
                    bgcolor: "#f8fafc"
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    textAlign="center"
                    mb={4}
                >
                    New Manpower Requirement
                </Typography>

                <Grid container spacing={2} direction="column">

                    <Grid item xs={12}>
                        <Typography mb={1}>Skill Required *</Typography>
                        <TextField
                            select
                            fullWidth
                            name="skill"
                            value={formData.skill}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select Skill</MenuItem>
                            <MenuItem value="Electrician">Electrician</MenuItem>
                            <MenuItem value="Plumber">Plumber</MenuItem>
                            <MenuItem value="Welder">Welder</MenuItem>
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography mb={1}>Number of Workers *</Typography>
                        <TextField
                            placeholder="e.g., 10"
                            fullWidth
                            name="workers"
                            value={formData.workers}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography mb={1}>Location *</Typography>
                        <TextField
                            placeholder="e.g., Riyadh, Saudi Arabia"
                            fullWidth
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>

                    <Grid item xs={6}>
                        <Box>
                            <Typography mb={1}>Project Start Date *</Typography>
                            <TextField
                                fullWidth
                                type="date"
                                size="small"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box>
                            <Typography mb={1}>Duration (months) *</Typography>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="e.g., 6"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                            />
                        </Box>
                    </Grid>

                </Grid>

                <Grid item xs={12}>
                    <Typography mb={1}>Shift Type *</Typography>
                    <TextField
                        select
                        fullWidth
                        size="small"
                        name="shift"
                        value={formData.shift}
                        onChange={handleChange}
                    >
                        <MenuItem value="Day Shift">Day Shift</MenuItem>
                        <MenuItem value="Night Shift">Night Shift</MenuItem>
                    </TextField>
                </Grid>

                <Grid item xs={12}>
                    <Typography mb={1}>Special Requirements</Typography>
                    <TextField
                        multiline
                        rows={4}
                        fullWidth
                        size="small"
                        placeholder="Describe any specific requirements, certifications needed, or other details..."
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Box
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            border: "1px solid #d1d5db",
                            bgcolor: "#f1f5f9"
                        }}
                    >
                        <Typography fontWeight="bold">Note:</Typography>
                        <Typography variant="body2">
                            Your requirement will be visible to verified agencies only.
                            You will receive quotes within 24–48 hours.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            bgcolor: "#1e293b",
                            textTransform: "none",
                            height: 45
                        }}
                    >
                        Submit Requirement
                    </Button>
                </Grid>

                <Grid item xs={6}>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            height: 45
                        }}
                    >
                        Save as Draft
                    </Button>
                </Grid>

            </Paper>
        </Box>
    );
}

export default ManpowerRequirement;