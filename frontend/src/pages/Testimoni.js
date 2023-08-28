import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import TestimonialImage1 from "../images/testimoni1.jpg";
import TestimonialImage2 from "../images/testimoni2.jpg";
import TestimonialImage3 from "../images/testimoni3.jpg";
import TestimonialImage4 from "../images/testimoni4.jpg";
import TestimonialImage5 from "../images/testimoni5.jpg";
import TestimonialImage6 from "../images/testimoni6.jpg";
import TestimonialImage7 from "../images/testimoni7.jpg";
import TestimonialImage8 from "../images/testimoni8.jpg";
import flatYellow from "../images/flat-yellow.png";
import flatBlue from "../images/flat-blue.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TestimonialContainer = styled(Container)(({ theme }) => ({
  // marginTop: theme.spacing(6),
  // marginBottom: theme.spacing(6),
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: "10px",
  marginBottom: "1rem",
  cursor: "pointer",
}));

const TestimonialImage = styled("img")({
  width: "100%",
  height: "400px",
  borderRadius: "10px",
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out", // Tambahkan properti transition
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const Testimonial = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          border: "0px solid",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <img
          src={flatYellow}
          style={{
            position: "absolute",
            width: "250px",
            right: "0",
            zIndex: "-1",
          }}
          alt="yellow"
        />
        <img
          src={flatBlue}
          style={{
            position: "absolute",
            width: "250px",
            bottom: "0",
            zIndex: "-1",
          }}
          alt="blue"
        />
        <TestimonialContainer style={{ paddingTop: "35px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Testimoni
          </Typography>
          <Typography align="center" mb={5} gutterBottom>
            Berikut adalah daftar orang yang sudah mengadopsi kucing di{" "}
            <strong>Gembul Cimot</strong>
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <TestimonialCard elevation={0}>
                <TestimonialImage src={TestimonialImage1} alt="Testimonial 1" />
                {/* <Typography variant="subtitle1" align="center">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt quis ligula in congue."
              </Typography> */}
              </TestimonialCard>
            </Grid>
            <Grid item xs={12} md={3}>
              <TestimonialCard elevation={0}>
                <TestimonialImage src={TestimonialImage2} alt="Testimonial 2" />
                {/* <Typography variant="subtitle1" align="center">
                "Vestibulum ultricies libero sit amet ullamcorper."
              </Typography> */}
              </TestimonialCard>
            </Grid>
            <Grid item xs={12} md={3}>
              <TestimonialCard elevation={0}>
                <TestimonialImage src={TestimonialImage3} alt="Testimonial 3" />
                {/* <Typography variant="subtitle1" align="center">
                "Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas."
              </Typography> */}
              </TestimonialCard>
            </Grid>
            <Grid item xs={12} md={3}>
              <TestimonialCard elevation={0}>
                <TestimonialImage src={TestimonialImage4} alt="Testimonial 4" />
                {/* <Typography variant="subtitle1" align="center">
                "Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas."
              </Typography> */}
              </TestimonialCard>
            </Grid>
            <Grid item xs={12} md={3}>
              <TestimonialCard elevation={0}>
                <TestimonialImage src={TestimonialImage5} alt="Testimonial 5" />
                {/* <Typography variant="subtitle1" align="center">
                "Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas."
              </Typography> */}
              </TestimonialCard>
            </Grid>
            <Grid item xs={12} md={3}>
              <TestimonialCard elevation={0}>
                <TestimonialImage src={TestimonialImage6} alt="Testimonial 6" />
                {/* <Typography variant="subtitle1" align="center">
                "Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas."
              </Typography> */}
              </TestimonialCard>
            </Grid>
            <Grid item xs={12} md={3}>
              <TestimonialCard elevation={0}>
                <TestimonialImage src={TestimonialImage7} alt="Testimonial 7" />
                {/* <Typography variant="subtitle1" align="center">
                "Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas."
              </Typography> */}
              </TestimonialCard>
            </Grid>
            <Grid item xs={12} md={3}>
              <TestimonialCard elevation={0}>
                <TestimonialImage src={TestimonialImage8} alt="Testimonial 8" />
                {/* <Typography variant="subtitle1" align="center">
                "Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas."
              </Typography> */}
              </TestimonialCard>
            </Grid>
          </Grid>
        </TestimonialContainer>
      </div>
      <Footer />
    </>
  );
};

export default Testimonial;
