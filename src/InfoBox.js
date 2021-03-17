import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({
  title,
  cases,
  total,
  active,
  isRed,
  isBlue,
  isGreen,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox-selected"} ${
        isRed && "infoBox-red"
      } ${isBlue && "infoBox-blue"} ${isGreen && "infoBox-green"}`}
    >
      <CardContent>
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>
        <h2
          className={`infoBox_cases ${
            !isBlue && !isRed && "infoBox_cases-green"
          } ${!isGreen && !isRed && "infoBox_cases-blue"}`}
        >
          {cases}
        </h2>
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
