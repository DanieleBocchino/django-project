import React, { useState } from "react";
import Button from "@mui/material/Button";

import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function SetProduct({ open, setOpen, setLoading, product = {}, edit = false }) {
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

  const [data, setData] = useState(product);

  const handleClose = () => setOpen(false);

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

  return (
    <div>
      <Dialog
        TransitionComponent={Transition}
        fullWidth={true}
        open={open}
        onClose={handleClose}
        maxWidth={"sm"}
      >
        <DialogTitle>New Product</DialogTitle>

        <DialogContent>
          {settings.map((setting) => (
            <Stack>
              <TextField
                id="outlined-controlled"
                label={setting["label"]}
                color="warning"
                sx={{
                  margin: 1,
                }}
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
          <Button color="warning" onClick={handleSubmit} children={"Add"} />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SetProduct;
