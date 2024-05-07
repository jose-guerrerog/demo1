import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "black",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | Eastside Learning Centre`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

export default Footer;