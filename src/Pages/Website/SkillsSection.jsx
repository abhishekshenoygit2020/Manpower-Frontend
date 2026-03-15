import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";

const SkillsSection = () => {
  const categories = [
    "Category 1", "Category 2", "Category 3", "Category 4",
    "Category 5", "Category 6", "Category 7", "Category 8",
    "Category 9", "Category 10", "Category 11", "Category 12"
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: "#ffffff" }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, textAlign: "center" }}>
          Find Skilled Workers
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
              <Paper sx={{ p: 4, textAlign: "center", height: 150 }}>
                <Typography variant="h6">{category}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;