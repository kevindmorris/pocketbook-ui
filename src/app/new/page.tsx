"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import moment from "moment";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  const today = dayjs(moment().valueOf());

  const [date, setDate] = React.useState<Dayjs>(today);
  const [description, setDescription] = React.useState<string>("");
  const [amount, setAmount] = React.useState<string>("");
  const [createAnother, setCreateAnother] = React.useState<boolean>(true);

  const handleDate = (value: any) => {
    setDate(value);
  };
  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const onClear = () => {
    setDate(today);
    setDescription("");
    setAmount("");
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const options = {
      method: "post",
      url: "http://localhost:5000/items",
      data: {
        date: moment(date.valueOf()).format("yyyy-MM-DDThh:mm:ss.SSS"),
        description: description,
        amount: parseFloat(amount),
      },
    };

    try {
      axios(options);
    } catch (error) {
      console.log(error);
    }

    if (createAnother) {
      onClear();
    } else {
      router.push("/");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ my: 2 }}>
      <Typography variant="h1">Create an entry</Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Fill out the form with a new expense.
      </Typography>
      <Divider />
      <form onSubmit={onSubmit}>
        <Box sx={{ my: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Basic date picker"
              slotProps={{
                textField: {
                  variant: "standard",
                  fullWidth: true,
                  InputLabelProps: { shrink: true },
                },
              }}
              value={date}
              onChange={handleDate}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{ my: 2 }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="description-input" shrink>
              Description
            </InputLabel>
            <Input
              id="description-input"
              value={description}
              onChange={handleDescription}
            />
          </FormControl>
        </Box>
        <Box sx={{ my: 2 }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="amount-input" shrink>
              Amount
            </InputLabel>
            <Input
              id="amount-input"
              type="number"
              value={amount}
              onChange={handleAmount}
            />
          </FormControl>
        </Box>
        <Box sx={{ my: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={createAnother}
                onChange={() => setCreateAnother(!createAnother)}
              />
            }
            label="Create another entry"
          />
        </Box>
        <Box
          sx={{ my: 2, display: "flex", justifyContent: "flex-end", gap: 1 }}
        >
          <Button size="small" onClick={onClear}>
            Clear
          </Button>
          <Button variant="contained" size="small" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
}
