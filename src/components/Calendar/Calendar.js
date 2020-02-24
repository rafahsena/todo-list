import React from "react";
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";
import moment from "moment";

const propsToData = props => {
  const data = props.todos.map(todo => {
    const date = {
      title: todo.text,
      startDate: todo.date,
      endDate: todo.date + 1
    };
    return date;
  });
  return data;
};

const Calendar = props => {
  const day = moment().toDate();

  return (
    <Scheduler
      locale="pt-BR"
      data={propsToData(props)}
    >
      <ViewState defaultCurrentDate={day} />
      <Toolbar />
      <DateNavigator />
      <MonthView />
      <Appointments />
    </Scheduler>
  );
};

export default Calendar;
