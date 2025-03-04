import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function CardComponent({ title, value, icon }) {
  return (
    <Card sx={{ p: 3, textAlign: "center", boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ mb: 2 }}>{icon}</Box>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
