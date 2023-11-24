import React, { useState, useEffect } from "react";
import { i18n, Typography } from "@nutrien/cxp-components";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

i18n.init({
  backend: {
    loadPath: `${process.env.CLOUDFRONT_URL}/locales/{{lng}}/{{ns}}.json`,
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: 160,
    },
  })
);

const App = () => {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <>
      <Typography variant="h1">Hello</Typography>
    </>
  );
};

export default App;
