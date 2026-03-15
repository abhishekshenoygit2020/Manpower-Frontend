import React from "react";
import { Box, Typography, Container, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: "#222222", color: "white" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Manpower Marketplace
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Connecting companies with licensed manpower agencies in Saudi Arabia.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Company
            </Typography>
            <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
              About Us
            </Link>
            <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
              How It Works
            </Link>
            <Link href="#" color="inherit" sx={{ display: "block" }}>
              Pricing
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Support
            </Typography>
            <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
              Contact
            </Link>
            <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
              FAQ
            </Link>
            <Link href="#" color="inherit" sx={{ display: "block" }}>
              Help Center
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 3 }}>
          © 2026 Manpower Marketplace. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;