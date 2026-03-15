import React from "react";
import {
    Box,
    Typography,
    Paper,
    Grid,
    Card,
    CardContent,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Link,
    useTheme
} from "@mui/material";
import RequestCount from "./RequestCount";

const keyMetrics = [
    { label: "Active Requests", value: 8 },
    { label: "Quotes Received", value: 24 },
    { label: "Active Bookings", value: 3 },
    { label: "Completed Jobs", value: 15 }
];

const recentRequests = [
    { id: "REQ-001", skill: "Category 1", workers: "5 Workers", location: "Riyadh", status: "Pending" },
    { id: "REQ-002", skill: "Category 2", workers: "20 Workers", location: "Jeddah", status: "Active" },
    { id: "REQ-003", skill: "Category 3", workers: "3 Workers", location: "Dammam", status: "Completed" }
];

export default function BuyerDashboard() {

     const theme = useTheme();
    return (
        <Box sx={{ p: 3 }}>

            <RequestCount />

            {/* Need Manpower Section */}
            <Box sx={{ my: 4, textAlign: "center" }}>
                <Paper
                    sx={{
                        backgroundColor:theme.palette.background.default,
                        overflow: "hidden",
                        borderRadius: 2,
                        padding: 3, // Adding padding inside the Paper
                        border: `1px solid ${theme.palette.divider}`, // Adding border color
                        boxShadow: 2, // Optional: Add shadow for better styling
                    }}
                >
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                        Need Manpower?
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                        Post your requirement and receive quotes from verified agencies.
                    </Typography>
                    <Button variant="contained" color="primary" size="large">
                        Post New Requirement
                    </Button>
                </Paper>
            </Box>

            {/* Recent Requests Section */}
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Recent Requests
            </Typography>
            <Paper sx={{ overflow: "hidden", borderRadius: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>Request ID</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Skill</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Workers</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Location</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Quotes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {recentRequests.map((row) => (
                                <TableRow hover key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.skill}</TableCell>
                                    <TableCell>{row.workers}</TableCell>
                                    <TableCell>{row.location}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell>
                                        <Link href="#" underline="hover">
                                            View
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </Box>
    );
}