import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#212121",
        paddingTop: ".5rem",
        paddingBottom: ".5rem",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="body">
              <Link
                sx={{
                  color: "white",
                  textDecoration: "none",
                  transition: "0.5s",
                  "&:hover": {
                    color: "orange",
                  },
                }}
                href="https://danielebocchino.github.io"
                target="_blank"
              >
                Daniele Bocchino
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle2">
              {`${new Date().getFullYear()} | React | Material UI | Django`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
