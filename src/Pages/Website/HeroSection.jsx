import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: "#ffffff", py: 6 }}>
      <Container>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
              Hire Verified Manpower Agencies Across Saudi Arabia
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Connect with licensed manpower supply agencies for your project needs.
            </Typography>
            <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
              Post Requirement
            </Button>
            <Button variant="outlined" color="primary" size="large">
              Register as Agency
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;