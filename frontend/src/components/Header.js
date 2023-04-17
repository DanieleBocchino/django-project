import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Box, Toolbar, Typography, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SetProduct from "./SetProduct";

//Style
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header({ products, setFilteredProducts, setLoading }) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    nameFilter();
  }, [search]);

  let nameFilter = () => {
    let fp = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(fp);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SetProduct open={open} setOpen={setOpen} setLoading={setLoading} />
      <AppBar position="static">
        <Toolbar>
          <Button
            variant="outlined"
            color="success"
            startIcon={<AddIcon />}
            onClick={() => handleOpen()}
          >
            Add Product
          </Button>

          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            children="Menu"
          />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
