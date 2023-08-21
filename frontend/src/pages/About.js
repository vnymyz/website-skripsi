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
  Paper,
  Box
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TikTokIcon from "@mui/icons-material/TikTok";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WaIcon from '../images/wa.webp'
import TokpedIcon from '../images/tokped.png'
import TiktokIcon from '../images/tiktok.webp'
import ShopeeIcon from '../images/shopee.png'
import flatYellow from "../images/flat-yellow.png";
import flatBlue from "../images/flat-blue.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { submitFeedbackHandler } from "../redux/actions/feedBackAction";

const validationSchema = yup.object({
  email: yup.string("Masukkan email").required("Email tidak boleh kosong"),
  name: yup.string("Masukkan nama").required("Nama tidak boleh kosong"),
  feedback: yup.string("Masukkan pesan").required("Pesan tidak boleh kosong"),
});

const AboutContainer = styled(Container)(({ theme }) => ({
  // marginTop: theme.spacing(6),
  // marginBottom: theme.spacing(6),
}));

const AboutCard = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: "10px", // Adjust the border radius as needed
  marginBottom: "1rem",
}));

const About = () => {
  const dispatch = useDispatch();
  const feedbackState = useSelector((state) => state.feedBack);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      feedback: "",
    },

    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(submitFeedbackHandler(values));
      actions.resetForm();
    },
  });

  return (
    <>
    {/* <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}> */}
      <Navbar />
      <div style={{border:'0px solid', minHeight: '100vh', position: 'relative'}}>
      <img src={flatYellow} style={{ position: 'absolute', width: '250px', right: '0', zIndex: '-1'}} alt="yellow" />
        <img src={flatBlue} style={{ position: 'absolute', width: '250px', bottom: '0',  zIndex: '-1'}} alt="blue" />
      <AboutContainer style={{paddingTop: '35px'}}>
        <Typography variant="h4" align="center" gutterBottom>
          Tentang Kami
        </Typography>
        <Typography align="center" mb={5} gutterBottom>
        Berikut adalah informasi tentang <strong>Gembul Cimoet</strong>
        </Typography>

        <AboutCard  elevation={3} style={{backgroundColor: 'white', paddingBottom: '25px'}}>
          <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nec
            odio at fermentum. Nullam euismod, arcu eget accumsan posuere, tortor
            ligula vehicula tellus, id interdum elit leo in nunc.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nec
            odio at fermentum. Nullam euismod, arcu eget accumsan posuere, tortor
            ligula vehicula tellus, id interdum elit leo in nunc.
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nec
            odio at fermentum. Nullam euismod, arcu eget accumsan posuere, tortor
            ligula vehicula tellus, id interdum elit leo in nunc.
          </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{marginBottom: '35px'}}>
            <Typography variant="h5" style={{fontWeight:'bold'}} gutterBottom>
              Kontak
            </Typography>
            <Typography variant="subtitle1">
              <LocationOnIcon /> Jalan Raya Kemerdekaan Indonesia, Jakarta Pusat, DKI Jakarta.
            </Typography>
            <Typography variant="subtitle1">
              <PhoneIcon /> +62 111 222 333
            </Typography>
            </div>

            <div style={{marginBottom: '25px'}}>
            <Typography variant="h5" style={{fontWeight:'bold'}} gutterBottom>
              Media Sosial
            </Typography>
            <div style={{display: 'flex'}}>
            <a href="https://api.whatsapp.com/send/?phone=6285771577182&text&type=phone_number&app_absent=0" target="_blank" className="link-medsos"><img src={WaIcon} style={{width: 40, height: 40}} /></a>
            <a href="https://www.tiktok.com/@gembulcimott?is_from_webapp=1&sender_device=pc" target="_blank" className="link-medsos"><img src={TiktokIcon} style={{width: 40, height: 40}} /></a>
            <a href="https://tokopedia.link/tFrNwWRerCb" target="_blank" className="link-medsos"><img src={TokpedIcon} style={{width: 40, height: 40}} /></a>
            <a href="https://shopee.co.id/gembulcimoet" target="_blank" className="link-medsos"><img src={ShopeeIcon} style={{width: 40, height: 40}} /></a>
            </div>
            </div>
            {/* <Typography variant="subtitle1">
              <EmailIcon /> info@example.com
            </Typography> */}


            {/* <Typography variant="h4" gutterBottom>
              Social Media
            </Typography>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener"
            >
              <FacebookIcon fontSize="large" />
            </Link> */}
            {/* <Link href="https://www.tiktok.com" target="_blank" rel="noopener">
              <TikTokIcon fontSize="large" />
            </Link> */}
            {/* <Link
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon fontSize="large" />
            </Link> */}
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography variant="h5" style={{fontWeight:'bold'}} gutterBottom>
              Lokasi
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
        </Container>
        </AboutCard>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nec
          odio at fermentum. Nullam euismod, arcu eget accumsan posuere, tortor
          ligula vehicula tellus, id interdum elit leo in nunc.
        </Typography>
        
        <AboutCard>
          <Container style={{paddingTop: '15px', paddingBottom: '15px'}}>
          <Typography variant="h5" style={{fontWeight:'bold', marginBottom: '0'}} gutterBottom>
              Kirim Masukan
            </Typography>
          <p style={{marginTop: '0', fontSize: '14px', marginBottom: '25px'}}>Masukkan Anda akan sangat berarti bagi kami</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          style={{marginBottom: '50px'}}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Nama"
                name="name"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                variant="outlined"
                id="email"
                name="email"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Pesan"
                name="feedback"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                multiline
                rows={4}
                fullWidth
                value={formik.values.feedback}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.feedback && Boolean(formik.errors.feedback)
                }
                helperText={formik.touched.feedback && formik.errors.feedback}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={feedbackState.loading}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {feedbackState.loading ? "Loading.." : "Kirim Masukan"}
              </Button>
            </Grid>
          </Grid>
        </form>
        </Container>
        </AboutCard>
      </AboutContainer>
      </div>
      <Footer/>
      {/* </Box> */}
    </>
  );
};

export default About;
