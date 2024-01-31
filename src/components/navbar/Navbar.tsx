"use client";
import { AccountCircle, Add } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";

function Navbar() {
  return (
    <StyledAppbar color="transparent" position="sticky">
      <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
        <Typography
          component={Link}
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          POCKETBOOK
        </Typography>
        <Box>
          <IconButton LinkComponent={Link} href="/new" size="small">
            <Add />
          </IconButton>
          <IconButton size="small">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </StyledAppbar>
  );
}

const StyledAppbar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  borderBottomStyle: "solid",
  borderBottomWidth: "thin",
  borderBottomColor: theme.palette.divider,
  backdropFilter: "blur(8px)",
}));

export default Navbar;
