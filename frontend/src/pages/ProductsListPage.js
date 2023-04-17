import React from "react";
import ListProductItem from "../components/ListProductItem";
import { Box, Fade, Grid } from "@mui/material";

function ProductsListPage({ products, setLoading }) {
  return (
    <Box sx={{ margin: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
      >
        {products &&
          products?.map((product, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <Fade in timeout={index * 200}>
                <Box sx={{ padding: { xs: 1, sm: 3, md: 5 } }}>
                  <>
                    <ListProductItem
                      product={product}
                      setLoading={setLoading}
                    />
                  </>
                </Box>
              </Fade>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default ProductsListPage;
