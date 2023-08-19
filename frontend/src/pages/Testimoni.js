import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import TestimonialImage1 from "../images/testimonial1.jpg";
import TestimonialImage2 from "../images/testimonial2.jpg";
import TestimonialImage3 from "../images/testimonial3.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TestimonialContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: "10px", // Adjust the border radius as needed
  marginBottom: "1rem",
}));

const TestimonialImage = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "10px", // Adjust the border radius as needed
  marginBottom: "1rem",
});

const Testimonial = () => {
  return (
    <>
      <Navbar />
      <TestimonialContainer>
        <Typography variant="h4" align="center" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TestimonialCard elevation={3}>
              <TestimonialImage src={TestimonialImage1} alt="Testimonial 1" />
              <Typography variant="subtitle1" align="center">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt quis ligula in congue."
              </Typography>
            </TestimonialCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TestimonialCard elevation={3}>
              <TestimonialImage src={TestimonialImage2} alt="Testimonial 2" />
              <Typography variant="subtitle1" align="center">
                "Vestibulum ultricies libero sit amet ullamcorper."
              </Typography>
            </TestimonialCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TestimonialCard elevation={3}>
              <TestimonialImage src={TestimonialImage3} alt="Testimonial 3" />
              <Typography variant="subtitle1" align="center">
                "Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas."
              </Typography>
            </TestimonialCard>
          </Grid>
        </Grid>
      </TestimonialContainer>
      <Footer />
    </>
  );
};

export default Testimonial;
