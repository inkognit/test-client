import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { PhotoUploader } from "../components/uploader";
import { useSignUp } from "../hooks/useSignUp";
import { TSignUpFormData, TTarget } from "../payloads/types";

export const SignUpPage = () => {
  const { sendRequest, resposeData, isLoading, error } = useSignUp();
  const [formData, setFormData] = useState<TSignUpFormData>({
    firstName: "",
    lastName: "",
    middleName: "",
    login: "",
    password: "",
    birthday: "",
    avatar: "",
    email: "",
  });
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    const isSomeFieldEmpty = Object.values(formData).some(
      (v) => typeof v === "string" && (!v.trim() || v.length < 3),
    );
    setSubmitDisabled(isSomeFieldEmpty);
  }, [formData]);

  const onChange = ({ target: { name, value } }: TTarget) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: any) => {
    // e.preventDefault();
    if (submitDisabled) return;
    sendRequest(formData);
    alert(process.env.REACT_APP_BACKEND_URL);

    console.log("🚀 ~ onSubmit ~ formData:", formData);

    // window.location.reload();
  };
  if (isLoading) return <Typography>Идет загрузка</Typography>;
  return (
    <Container
      sx={{
        padding: "20%",
      }}
    >
      <Grid
        spacing={2}
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <PhotoUploader setFormData={setFormData} formData={formData} />
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <TextField
              name="login"
              id="login"
              label="login"
              onChange={onChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <TextField
              name="password"
              id="password"
              label="password"
              onChange={onChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <TextField
              name="email"
              id="email"
              label="email"
              onChange={onChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <TextField
              name="firstName"
              id="firstName"
              label="firstName"
              onChange={onChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <TextField
              name="lastName"
              id="lastName"
              label="lastName"
              onChange={onChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack>
            <TextField
              name="middleName"
              id="middleName"
              label="middleName"
              onChange={onChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "100%" },
            }}
          >
            <TextField
              name="sex"
              id="sex"
              label="sex"
              select
              onChange={onChange}
            >
              <MenuItem key="women" value={0}>
                women
              </MenuItem>
              <MenuItem key="men" value={1}>
                men
              </MenuItem>
            </TextField>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Your birthday"
                name="birthday"
                onChange={(value) => {
                  setFormData({
                    ...formData,
                    birthday: dayjs(value).format("YYYY-MM-DD"),
                  });
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={onSubmit}>Зарегистрироваться</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

