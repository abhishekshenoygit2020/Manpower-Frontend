import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    useTheme,
} from "@mui/material";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const RequestCount = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const viewsData = [
        { name: "M", value: 400 },
        { name: "T", value: 600 },
        { name: "W", value: 300 },
        { name: "T", value: 700 },
        { name: "F", value: 500 },
    ];

    const salesData = [
        { name: "M", value: 100 },
        { name: "T", value: 250 },
        { name: "W", value: 200 },
        { name: "T", value: 300 },
        { name: "F", value: 400 },
    ];

    const taskData = [
        { name: "M", value: 5 },
        { name: "T", value: 8 },
        { name: "W", value: 6 },
        { name: "T", value: 10 },
        { name: "F", value: 12 },
    ];

    const cards = [
        {
            title: "Active Requests",
            subtitle: "Last Campaign Performance",
            percent: "+15% increase in today sales.",
            footer: "Agency preparing workers",
            chartType: "bar",
            data: viewsData,
            color: theme.palette.success.main,
            borderColor: theme.palette.divider
        },
        {
            title: "Quotes Received",
            subtitle: "Last Campaign Performance",
            percent: "+20% growth today",
            footer: "Workers on site",
            chartType: "line",
            data: salesData,
            color: theme.palette.info.main,
            borderColor: "green"
        },
        {
            title: "Active Bookings",
            subtitle: "Last Campaign Performance",
            percent: "-5% decrease this week",
            footer: "Project ongoing",
            chartType: "line",
            data: taskData,
            color: theme.palette.error.main,
            borderColor: "#ffa31a"
        },
        {
            title: "Completed Jobs",
            subtitle: "Last Campaign Performance",
            percent: "-5% decrease this week",
            footer: "Project ongoing",
            chartType: "line",
            data: taskData,
            color: theme.palette.error.main,
            borderColor: "#ffa31a"
        },
    ];

    return (
        <Box
            display="grid"
            gap={2}
            gridTemplateColumns="repeat(auto-fit, minmax(350px, 1fr))"
            sx={{ p: 1 }}
        >
            {cards.map((item, index) => (
                <Card
                    key={index}
                    sx={{
                        color: theme.palette.text.primary,
                        borderRadius: 3,
                        border: `1px solid ${item.borderColor}`,
                        display: "flex",         // Using Flexbox to align content
                        flexDirection: "column", // Stack the content vertically
                        justifyContent: "center", // Vertically center the content
                        textAlign: "center",     // Horizontally center the text
                    }}
                >
                    <CardContent sx={{ bgcolor: theme.palette.background.default, }}>
                        {/* <Typography variant="h6">{item.title}</Typography> */}
                        {/* <Typography variant="body2" color="text.secondary">
                            {item.subtitle}
                        </Typography> */}

                        <Box mt={2} height={40}>
                            <Typography variant="h4" fontWeight="bold">
                                1
                            </Typography>
                        </Box>
                        <Typography variant="caption" color="text.secondary">
                            {item.footer}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default RequestCount;
