import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import TestimonialImage1 from "../images/testimoni1.jpg";
import TestimonialImage2 from "../images/testimoni2.jpg";
import TestimonialImage3 from "../images/testimoni3.jpg";
import TestimonialImage4 from "../images/testimoni4.jpg";
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
  borderRadius: "10px", // Adjust the border radius as needed
  marginBottom: "1rem",
}));

const TestimonialImage = styled("img")({
  width: "100%",
  height: "250px",
  borderRadius: "10px", // Adjust the border radius as needed
  // marginBottom: "1rem",
  objectFit: 'cover'
});

const Testimonial = () => {
  return (
    <>
      <Navbar />
      <div style={{border:'0px solid', minHeight: '100vh', position: 'relative'}}>
      <img src={flatYellow} style={{ position: 'absolute', width: '250px', right: '0', zIndex: '-1'}} alt="yellow" />
        <img src={flatBlue} style={{ position: 'absolute', width: '250px', bottom: '0',  zIndex: '-1'}} alt="blue" />
      <TestimonialContainer style={{paddingTop: '35px'}}>
        <Typography variant="h4" align="center" gutterBottom>
          Testimoni
        </Typography>
        <Typography align="center" mb={5} gutterBottom>
        Berikut adalah daftar orang yang sudah mengadopsi kucing di <strong>Gembul Cimoet</strong>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <TestimonialCard elevation={3}>
              <TestimonialImage src={TestimonialImage1} alt="Testimonial 1"/>
              {/* <Typography variant="subtitle1" align="center">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt quis ligula in congue."
              </Typography> */}
            </TestimonialCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <TestimonialCard elevation={3}>
              <TestimonialImage src={TestimonialImage2} alt="Testimonial 2" />
              {/* <Typography variant="subtitle1" align="center">
                "Vestibulum ultricies libero sit amet ullamcorper."
              </Typography> */}
            </TestimonialCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <TestimonialCard elevation={3}>
              <TestimonialImage src={TestimonialImage3} alt="Testimonial 3" />
              {/* <Typography variant="subtitle1" align="center">
                "Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas."
              </Typography> */}
            </TestimonialCard>
          </Grid>
          <Grid item xs={12} md={3}>
            <TestimonialCard elevation={3}>
              <TestimonialImage src={TestimonialImage4} alt="Testimonial 4" />
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
