import { Box, Container, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* <Box
        sx={{
          bgcolor: "#DC7361",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: '5px solid #F0C72F'
        }}
      >
        <Box sx={{ color: "#fafafa", fontSize: '12px', border: '1px solid' }}>Copyright © 2023 - Gembul Cimoet. All Rights Reserved.</Box>
      </Box> */}
      
      <Box style={{backgroundColor: '#DC7361',borderTop: '5px solid #F0C72F'}}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4} style={{paddingLeft: '15px', paddingRight: '15px'}}>
            <h4 style={{color: '#fff', marginBottom: '0'}}>Gembul Cimoet</h4>
            <p style={{fontSize: '12px', color: '#fff'}}>Pusat adopsi kucing kami, kami berkomitmen untuk mencari rumah
              yang penuh kasih bagi kucing-kucing yang membutuhkan</p>
          </Grid>
          <Grid item xs={12} md={2} style={{paddingLeft: '15px', paddingRight: '15px'}}>
            <h4 style={{color: '#fff', marginBottom: '0'}}>Ikuti Kami</h4>
            <ul style={{listStyle: 'none', padding: '0', fontSize: '12px'}}>
              <li style={{marginBottom: '5px'}}><a href="#" style={{color: '#fff', textDecoration: 'none'}}>Facebook</a></li>
              <li style={{marginBottom: '5px'}}><a href="#" style={{color: '#fff', textDecoration: 'none'}}>Whatsapp</a></li>
              <li style={{marginBottom: '5px'}}><a href="#" style={{color: '#fff', textDecoration: 'none'}}>Tiktok</a></li>
              <li style={{marginBottom: '5px'}}><a href="#" style={{color: '#fff', textDecoration: 'none'}}>Instagram</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <h4 style={{color: '#fff', marginBottom: '0'}}>Kontak Kami</h4>
            <ul style={{listStyle: 'none', padding: '0', fontSize: '12px'}}>
              <li style={{marginBottom: '5px', color: '#fff'}}>Jalan Raya Kemerdekaan</li>
              <li style={{marginBottom: '5px', color: '#fff'}}>+62 111 222 333</li>
              <li style={{marginBottom: '5px', color: '#fff'}}>info@gembul.com</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <h4 style={{color: '#fff', marginBottom: '0'}}>Jam Operasional</h4>
            <p style={{fontSize: '12px', color: '#fff'}}>Jam 08:00 - 22:00 WIB</p>
          </Grid>
          <Grid item xs={12} md={12} style={{textAlign: 'center', fontSize: '12px', color: '#fff', borderTop: '1px solid #fff', padding: '25px', marginTop: '15px'}}>
          Copyright © 2023 - Gembul Cimoet. All Rights Reserved.
          </Grid>
        </Grid>
      </Container>
      </Box>
    </>
  );
};

export default Footer;
