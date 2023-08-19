import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "../images/cat2.jpg";
import Image1 from "../images/olen2.jpg";
import { Link } from "react-router-dom";

const LandingContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  backgroundImage: `url(${Image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: theme.palette.common.white,
  textAlign: "center",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(15),
}));

const IntroText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const Beranda = () => {
  return (
    <>
      <Navbar />
      <LandingContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <IntroText variant="h3">Gembul Cimoet</IntroText>
            <IntroText variant="body1">
              Di pusat adopsi kucing kami, kami berkomitmen untuk mencari rumah
              yang penuh kasih bagi kucing-kucing yang membutuhkan.
            </IntroText>
            <IntroText variant="body1">
              Apakah Anda mencari anak kucing yang lucu atau kucing dewasa yang
              lembut, kami memiliki berbagai sahabat kucing yang siap untuk Anda
              temui.
            </IntroText>
            <Button as={Link} to={"/"} variant="contained" color="primary">
              Yuk Adopsi Kucing
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={Image1}
              alt="Cat"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </LandingContainer>
      <Footer />
    </>
  );
};

export default Beranda;
