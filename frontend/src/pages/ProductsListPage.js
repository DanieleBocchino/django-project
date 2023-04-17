import React from "react";
import ListProductItem from "../components/ListProductItem";
import { Box,  Grid } from "@mui/material";

function ProductsListPage({ products, setLoading }) {

  return (
    <Box sx={{ margin: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
      >
        {products?.map((product, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Box sx={{ padding: { xs: 1, sm: 3, md:5 } }}>
              <ListProductItem product={product} setLoading={setLoading} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsListPage;
