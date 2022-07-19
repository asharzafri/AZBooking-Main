import React from "react";
//import 'date-fns';
import { useRouter } from "next/router";
import {
  Grid,
  Button,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import Layout from "../components/layout";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import { Spacer,useInput, Input } from "@nextui-org/react";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function Booking() {
  const router = useRouter();
  const classes = useStyles();
  // router.push('/login');
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const checkoutHandler = () => {
    router.push("/");
  };

  const conformationHandler = () => {
    router.push("/conformation");
  };

  return (
    <Layout tittle="Booking">
      <Spacer y={4} />
      <form className={classes.form}>
        <Typography component="h1" variant="h1">
          Booking
        </Typography>
        <Typography>
          Please select a time when you would like to schedule an appointment.
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justifyContent="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
            <Spacer y={4} />

            <Input
              {...bindings}
              fullWidth
              clearable
              shadow={false}
              onClearClick={reset}
              status={helper.color}
              color={helper.color}
              helperColor={helper.color}
              helperText={helper.text}
              type="email"
              label="Email"
              placeholder="Enter email"
            />
            <Spacer y={1} />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={conformationHandler}
            >
              Book an appointment
            </Button>
            <Spacer y={1} />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={checkoutHandler}
            >
              Back to main
            </Button>
          </Grid>
        </MuiPickersUtilsProvider>
      </form>
      <Spacer y={13} />
    </Layout>
  );
}
