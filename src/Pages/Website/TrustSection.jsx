import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";

const TrustSection = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, textAlign: "center" }}>
          Your Trusted Hiring Partner
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Verified Agencies
              </Typography>
              <Typography variant="body2" color="text.secondary">
                All agencies are licensed and verified by platform admins.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Compliance Documents
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Agencies maintain valid licenses and compliance certifications.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Platform Oversight
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Continuous monitoring ensures quality and accountability.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TrustSection;