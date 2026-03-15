import {
    Box,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
    Card,
    CardContent,
    Link
} from "@mui/material";
import BookingCount from "./BookingCount";

const bookings = [
    {
        id: "BOOK-001",
        agency: "Al Riyadh Manpower",
        skill: "Category 1",
        workers: 5,
        location: "Riyadh",
        status: "In Progress",
        amount: "SAR 45,000"
    },
    {
        id: "BOOK-002",
        agency: "Saudi Workforce",
        skill: "Category 2",
        workers: 20,
        location: "Jeddah",
        status: "Deployed",
        amount: "SAR 120,000"
    },
    {
        id: "BOOK-003",
        agency: "Elite Manpower",
        skill: "Category 4",
        workers: 8,
        location: "Riyadh",
        status: "Preparing",
        amount: "SAR 72,000"
    }
];

export default function ActiveBookings() {
    return (
        <Box sx={{ width: "100%", p: { xs: 2, md: 4 } }}>

            {/* Header */}
            <Typography fontSize={13} color="text.secondary" mb={1}>
                [ACTIVE BOOKINGS]
            </Typography>

            <Typography variant="h5" fontWeight="bold">
                Active Bookings
            </Typography>

            <Typography color="text.secondary" mb={3}>
                Track your ongoing workforce deployments
            </Typography>

            {/* Table */}
            <Paper
                sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: 3,
                    p: 2,
                    mb: 4
                }}
            >
                <TableContainer
                    sx={{
                        border: "1px solid #e0e0e0",
                        borderRadius: 2,
                        overflow: "hidden"
                    }}
                >
                    <Table>

                        {/* Header */}
                        <TableHead sx={{ background: "#f5f6f8" }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>Booking ID</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Agency</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Skill</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Workers</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Location</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
                            </TableRow>
                        </TableHead>

                        {/* Body */}
                        <TableBody>
                            {bookings.map((row) => (
                                <TableRow key={row.id} hover>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.agency}</TableCell>
                                    <TableCell>{row.skill}</TableCell>
                                    <TableCell>{row.workers}</TableCell>
                                    <TableCell>{row.location}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell>{row.amount}</TableCell>
                                    <TableCell>
                                        <Link href="#" underline="hover">
                                            Track
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </Paper>



            {/* Status Cards */}
            <BookingCount />

        </Box>
    );
}