import React from "react";
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
  Select,
  MenuItem,
  Grid,
  Link,
  Card,
  CardContent,
  Button
} from "@mui/material";

const rows = [
  { id: "REQ-001", skill: "Category 1", workers: 5, location: "Riyadh", duration: "3 months", status: "Pending", quotes: 3 },
  { id: "REQ-002", skill: "Category 2", workers: 20, location: "Jeddah", duration: "6 months", status: "Active", quotes: 7 },
  { id: "REQ-003", skill: "Category 3", workers: 3, location: "Dammam", duration: "2 months", status: "Completed", quotes: 5 },
  { id: "REQ-004", skill: "Category 4", workers: 8, location: "Riyadh", duration: "12 months", status: "Pending", quotes: 2 },
  { id: "REQ-005", skill: "Category 5", workers: 10, location: "Mecca", duration: "4 months", status: "Active", quotes: 6 },
  { id: "REQ-006", skill: "Category 6", workers: 15, location: "Medina", duration: "3 months", status: "Pending", quotes: 4 }
];

export default function RequestsPage() {
  return (
    <Box p={3}>

      {/* Header */}
      <Typography variant="body2" color="text.secondary" mb={1}>
        [MY REQUESTS LIST]
      </Typography>

      <Grid container justifyContent="space-between" alignItems="center" mb={3} spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">
            All Requests
          </Typography>
          <Typography variant="body2" color="text.secondary">
            View and manage your manpower requests
          </Typography>
        </Grid>

        {/* Filters */}
        <Grid item xs={12} md="auto">
          <Box display="flex" gap={2}>
            <Select size="small" defaultValue="all">
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>

            <Select size="small" defaultValue="skills">
              <MenuItem value="skills">All Skills</MenuItem>
              <MenuItem value="cat1">Category 1</MenuItem>
              <MenuItem value="cat2">Category 2</MenuItem>
            </Select>
          </Box>
        </Grid>
      </Grid>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          border: "1px solid #dcdcdc",
          borderRadius: 3,
          overflow: "hidden"
        }}
      >
        <Table>

          {/* Table Header */}
          <TableHead
            sx={{
              backgroundColor: "#f2f2f2"
            }}
          >
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", py: 2 }}>Request ID</TableCell>
              <TableCell sx={{ fontWeight: "bold", py: 2 }}>Skill</TableCell>
              <TableCell sx={{ fontWeight: "bold", py: 2 }}>Workers</TableCell>
              <TableCell sx={{ fontWeight: "bold", py: 2 }}>Location</TableCell>
              <TableCell sx={{ fontWeight: "bold", py: 2 }}>Duration</TableCell>
              <TableCell sx={{ fontWeight: "bold", py: 2 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold", py: 2 }}>Quotes</TableCell>
              <TableCell sx={{ fontWeight: "bold", py: 2 }}>Action</TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                hover
                sx={{
                  "&:hover": {
                    backgroundColor: "#fafafa"
                  }
                }}
              >
                <TableCell sx={{ py: 1.5 }}>{row.id}</TableCell>
                <TableCell sx={{ py: 1.5 }}>{row.skill}</TableCell>
                <TableCell sx={{ py: 1.5 }}>{row.workers}</TableCell>
                <TableCell sx={{ py: 1.5 }}>{row.location}</TableCell>
                <TableCell sx={{ py: 1.5 }}>{row.duration}</TableCell>
                <TableCell sx={{ py: 1.5 }}>{row.status}</TableCell>
                <TableCell sx={{ py: 1.5 }}>{row.quotes}</TableCell>
                <TableCell sx={{ py: 1.5 }}>
                  <Link href="#" underline="hover">
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      {/* CTA Card */}
      <Card sx={{ mt: 4, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            Need More Workers?
          </Typography>

          <Typography variant="body2" color="text.secondary" mt={1}>
            Post a new requirement to receive quotes from verified agencies
          </Typography>

          <Button sx={{ mt: 1 }}>
            Post New Requirement →
          </Button>
        </CardContent>
      </Card>

    </Box>
  );
}