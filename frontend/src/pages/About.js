import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Container,
  Typography,
  Grid,
  Link,
  TextField,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
// import TikTokIcon from "@mui/icons-material/TikTok";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const About = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h1" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nec
          odio at fermentum. Nullam euismod, arcu eget accumsan posuere, tortor
          ligula vehicula tellus, id interdum elit leo in nunc.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="subtitle1">
              <LocationOnIcon /> 123 Street, City, Country
            </Typography>
            <Typography variant="subtitle1">
              <PhoneIcon /> +123 456 789
            </Typography>
            <Typography variant="subtitle1">
              <EmailIcon /> info@example.com
            </Typography>
            <Typography variant="h4" gutterBottom>
              Social Media
            </Typography>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon fontSize="large" />
            </Link>
            {/* <Link href="https://www.tiktok.com" target="_blank" rel="noopener">
              <TikTokIcon fontSize="large" />
            </Link> */}
            <Link
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon fontSize="large" />
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Location
            </Typography>
            {/* Embed Google Map */}
            <iframe
              title="Location Map"
              width="100%"
              height="300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d12.3456789!3d-34.5678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA1JzM5LjkiUyAxMsKwMzUnNDMuMiJF!5e0!3m2!1sen!2sus!4v1632899154800!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            />
          </Grid>
        </Grid>
        <Typography variant="h4" gutterBottom>
          Give Us Your Feedback
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField label="Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Email" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Feedback"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Submit Feedback
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default About;
