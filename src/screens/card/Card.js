import React from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "../../component/Card";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Grid, Container, Typography } from "@mui/material";
import "./cardScreen.css"; 

function CardScreen() {
  const navigate = useNavigate(); // Hook for navigation

  const cardsData = [
    { title: "Total Users", value: "1,245", icon: <PeopleIcon className="icon blue" /> },
    { title: "Total Orders", value: "3,580", icon: <ShoppingCartIcon className="icon green" /> },
    { title: "Total Revenue", value: "$125,460", icon: <MonetizationOnIcon className="icon yellow" /> },
  ];

  return (
    <Container className="card-screen-container">
      <Typography variant="h4" className="card-heading">
        Cards
      </Typography>

      <Grid container spacing={3}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardComponent title={card.title} value={card.value} icon={card.icon} />
          </Grid>
        ))}
      </Grid>

      {/* Button to Navigate to Table Screen */}
      <button className="table-btn" onClick={() => navigate("/table")}>
        Go to Table Screen
      </button>
    </Container>
  );
}

export default CardScreen;
