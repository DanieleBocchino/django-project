import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, {  useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SetProduct from "./SetProduct";

function ListProductItem({ product, setLoading }) {
  const [open, setOpen] = useState(false);

  const deleteProduct = async () => {
    setLoading(true)
    fetch(`/api/products/${product.id}/delete`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        setLoading(true);
      }
    });
  };

  return (
    <>
      <SetProduct open={open} setOpen={setOpen} edit={true} product={product} />
      <Card
        sx={{
          margin: "auto",
          bgcolor: "transparent",
          transition: "transform 0.15s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1.05)" },
        }}
      >
        {/* <Link className="link_class" to={`/product/${product?.id}`}> */}
        <CardHeader title={product?.title} />
        <CardMedia
          component="img"
          height="194"
          src={product?.img}
          alt="product image"
        />
        {/* </Link> */}

        <CardContent style={{ height: 200 }}>
          {product?.description}
        </CardContent>
        <CardActions style={{ justifyContent: "space-between" }}>
          <Typography>{` ${product?.price} $`} </Typography>
          <Box>
            <IconButton
              sx={{
                background: "transparent",
                "&:hover": { background: "transparent" },
              }}
              color="primary"
              aria-label="add to shopping cart"
              onClick={() => setOpen(true)}
            >
              <EditIcon
                sx={{
                  color: "grey",
                  transition: "0.25s ease-in-out",
                  "&:hover": {
                    color: "green",
                  },
                }}
              />
            </IconButton>
            <IconButton
              sx={{
                background: "transparent",
                "&:hover": { background: "transparent" },
              }}
              color="primary"
              aria-label="add to shopping cart"
              onClick={() => deleteProduct()}
            >
              <DeleteIcon
                sx={{
                  color: "grey",
                  transition: "0.25s ease-in-out",
                  "&:hover": {
                    color: "red",
                  },
                }}
              />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}

export default ListProductItem;
