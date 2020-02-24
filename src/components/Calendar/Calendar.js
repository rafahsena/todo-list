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
      data={[
        {
          startDate: "2020-02-24 10:00",
          endDate: "2020-02-24 10:01",
          title: "Meeting"
        },
        {
          startDate: "2018-11-01 18:00",
          endDate: "2018-11-01 19:30",
          title: "Go to a gym"
        }
      ]}
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
