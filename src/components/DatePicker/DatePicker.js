import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Event from "@material-ui/icons/Event";
import CloseIcon from "@material-ui/icons/Close";
import DatePick from "react-date-picker";

const DatePicker = props => {
  const {className, date, onChange} = props;
  const iconProps = date
    ? {
        clearIcon: (
          <IconButton size="small">
            <CloseIcon color="secondary" />
          </IconButton>
        ),
        calendarIcon: null
      }
    : {
        calendarIcon: (
          <IconButton size="small">
            <Event color="secondary" />
          </IconButton>
        ),
        clearIcon: null
      };

  return (
    <DatePick
      className={className}
      value={date}
      onChange={date => onChange(date)}
      {...iconProps}
    />
  );
};

export default DatePicker;
