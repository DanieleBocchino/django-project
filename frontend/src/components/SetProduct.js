import React, { useState } from "react";
import Button from "@mui/material/Button";

import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@mui/material";

function SetProduct({ open, setOpen, setLoading, product = {}, edit = false }) {
  const [data, setData] = useState(product);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    if (edit) {
      fetch("/api/products/" + data.id + "/update/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.status === 200) {
          setLoading(true);
          setData({});
        }
      });
    } else {
      fetch("/api/products/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.status === 200) {
          setLoading(true);
          setData({});
        }
      });
    }

    handleClose();
  };

  let settings = [
    { name: "title", label: "Title", type: "text" },
    { name: "img", label: "Image", type: "text" },
    {
      name: "description",
      label: "Description",
      type: "text",
      multiline: true,
    },
    { name: "price", label: "Price ", type: "number" },
  ];

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Recipe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          {settings.map((setting) => (
            <Stack>
              <TextField
                id="outlined-controlled"
                label={setting["label"]}
                sx={{ margin: 1 }}
                value={data[setting["name"]]}
                type={setting["type"]}
                multiline={setting["multiline"]}
                onChange={(event) => {
                  setData({ ...data, [setting["name"]]: event.target.value });
                }}
              />
            </Stack>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SetProduct;
