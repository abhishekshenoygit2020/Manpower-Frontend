import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Profile = () => {

    const [formData, setFormData] = useState({
        companyName: "",
        crNumber: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        firstName: "",
        lastName: "",
        position: "",
        directPhone: ""
    });
    const [logo, setLogo] = useState(null);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogoUpload = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        if (file.size > 2 * 1024 * 1024) {
            alert("File size should be less than 2MB");
            return;
        }

        const imageUrl = URL.createObjectURL(file);
        setLogo(imageUrl);
    };

    return (

        <Box sx={{ maxWidth: "850px", margin: "auto" }}>


            <Box
                sx={{
                    padding: "24px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    background: "#fff",
                    mb: 3
                }}
            >
                <Typography variant="h6" fontWeight="bold" mb={3}>
                    Company Information
                </Typography>

                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>

                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            background: "#e0e0e0",
                            borderRadius: "8px",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {logo && (
                            <img
                                src={logo}
                                alt="logo"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                            />
                        )}
                    </div>

                    <div>

                        <Button
                            variant="outlined"
                            component="label"
                        >
                            Upload Logo
                            <input
                                type="file"
                                hidden
                                accept="image/png, image/jpeg"
                                onChange={handleLogoUpload}
                            />
                        </Button>

                        <Typography variant="body2" color="text.secondary" mt={1}>
                            JPG or PNG, max 2MB
                        </Typography>

                    </div>

                </div>


                <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>

                    <div style={{ flex: 1 }}>
                        <Typography mb={1}>Company Name *</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="ABC Construction Co."
                        />
                    </div>

                    <div style={{ flex: 1 }}>
                        <Typography mb={1}>CR Number *</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            name="crNumber"
                            value={formData.crNumber}
                            onChange={handleChange}
                            placeholder="1234567890"
                        />
                    </div>

                </div>

                <div style={{ marginBottom: "20px" }}>
                    <Typography mb={1}>Email Address *</Typography>
                    <TextField
                        fullWidth
                        size="small"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contact@company.com"
                    />
                </div>


                <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>

                    <div style={{ flex: 1 }}>
                        <Typography mb={1}>Phone Number *</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+966 XX XXX XXXX"
                        />
                    </div>

                    <div style={{ flex: 1 }}>
                        <Typography mb={1}>City *</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Riyadh"
                        />
                    </div>

                </div>


                <div>
                    <Typography mb={1}>Company Address</Typography>
                    <TextField
                        fullWidth
                        size="small"
                        multiline
                        rows={3}
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

            </Box>



            <Box
                sx={{
                    padding: "24px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    background: "#fff",
                    marginBottom: "20px"
                }}
            >

                <Typography variant="h6" fontWeight="bold" mb={3}>
                    Contact Person
                </Typography>

                <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>

                    <div style={{ flex: 1 }}>
                        <Typography mb={1}>First Name *</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Ahmed"
                        />
                    </div>

                    <div style={{ flex: 1 }}>
                        <Typography mb={1}>Last Name *</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Al-Saud"
                        />
                    </div>

                </div>

                <div style={{ display: "flex", gap: "20px", marginBottom: "24px" }}>

                    <div style={{ flex: 1 }}>
                        <Typography mb={1}>Position *</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            placeholder="Project Manager"
                        />
                    </div>

                    <div style={{ flex: 1 }}>
                        <Typography mb={1}>Direct Phone *</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            name="directPhone"
                            value={formData.directPhone}
                            onChange={handleChange}
                            placeholder="+966 XX XXX XXXX"
                        />
                    </div>

                </div>



            </Box>
            <div style={{ display: "flex", gap: "20px", }}>

                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        background: "#1e2b3c",
                        textTransform: "none",
                        height: 45
                    }}
                >
                    Save Changes
                </Button>

                <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                        textTransform: "none",
                        height: 45
                    }}
                >
                    Cancel
                </Button>

            </div>
        </Box>
    );
};

export default Profile;