import React from "react";
import { Typography } from "@material-ui/core";

export default function Footer(props: { className?: string }) {
  return (
    <footer className={`grow ${props.className || ""}`}>
      <Typography align="center" color="inherit">
        Copyright &copy; {new Date().getFullYear()} DECREE Digital
      </Typography>
    </footer>
  );
}
