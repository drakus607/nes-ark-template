import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  connect: {
    background: "#106eea",
    fontFamily: '"Poppins", sans-serif',
    fontSize: "1.1rem",
  },
});

const ConnectButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.connect}
      variant="contained"
      color="primary"
      href={props.url}
    >
      {props.text}
    </Button>
  );
};

export default ConnectButton;
