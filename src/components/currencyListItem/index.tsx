import React from "react";
import { ILatestRatesResponse } from "../../store/latestRatesSlice";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";

type CurrencyListItemPropsType = {
  item: ILatestRatesResponse;
};
const CurrencyListItem: React.FC<CurrencyListItemPropsType> = (props) => {
  const result = props.item.result?.toFixed(2);
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontWeight: "bolder" }} variant="h5">
        {props.item.query?.from}
      </Typography>
      <ChangeCircleRoundedIcon />
      <Typography
        sx={{ width: "25%", display: "flex", justifyContent: "flex-end" }}
        variant="h6"
      >
        {result} {props.item.query?.to}
      </Typography>
    </ListItem>
  );
};

export default CurrencyListItem;
