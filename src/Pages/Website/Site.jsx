import React from "react";
import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import SkillsSection from "./SkillsSection";
import TrustSection from "./TrustSection";
import Footer from "./Footer";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Trust Section */}
      <TrustSection />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default App;