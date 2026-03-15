import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";

const ProcessSection = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, textAlign: "center" }}>
          Simple 3-Step Process
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                1
              </Typography>
              <Typography variant="body1">Post Requirement</Typography>
              <Typography variant="body2" color="text.secondary">
                Specify your manpower needs including skill, quantity, location, and duration.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                2
              </Typography>
              <Typography variant="body1">Receive Quotes</Typography>
              <Typography variant="body2" color="text.secondary">
                Licensed agencies submit competitive quotes with pricing and mobilization details.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                3
              </Typography>
              <Typography variant="body1">Deploy Workforce</Typography>
              <Typography variant="body2" color="text.secondary">
                Accept the best quote and get verified workers deployed to your project site.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProcessSection;