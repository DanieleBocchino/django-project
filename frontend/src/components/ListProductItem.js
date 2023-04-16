import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";

function ListProductItem({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card style={{ coursor: "pointer" }}>
      <Link to={`/product/${product?.id}`}>
        <CardHeader title={product?.title} />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="product image"
        />
      </Link>

      <CardContent>{product?.description}</CardContent>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Box
          component="span"
          style={{
            borderRadius: 20,
            display: "inline-flex",
          }}
        >
          <IconButton aria-label="add to basket" disabled={quantity === 0}>
            <FaMinus onClick={() => setQuantity(quantity - 1)} />
          </IconButton>
          <Typography style={{ padding: 8 }}>{` ${quantity}`} </Typography>
          <IconButton aria-label="add to basket"  disabled={quantity >= 10}>
            <FaPlus onClick={() => setQuantity(quantity + 1)} />
          </IconButton>
        </Box>

        <Typography>{` ${product?.price} $`} </Typography>
      </CardActions>
    </Card>
  );
}

export default ListProductItem;
