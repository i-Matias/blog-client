import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Link from "@mui/joy/Link";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks";
import { login, register } from "../store/features/authSlice";
interface SignFormProps {
  isLoggingIn: boolean;
}

const SignForm: FC<SignFormProps> = ({ isLoggingIn }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  //const isError = useAppSelector((state) => state.auth.isError);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (isLoggingIn) {
      dispatch(login(formData)).then((res) => {
        if (res.payload) {
          navigate("/");
        }
      });
    } else {
      dispatch(register(formData)).then((res) => {
        if (res.payload) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <Sheet
        sx={{
          width: 300,
          mx: "auto", // margin left & right
          my: 20, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          {isLoggingIn ? (
            <Typography level="body-sm">Sign in to continue.</Typography>
          ) : (
            <Typography level="body-sm">
              Create an account to continue.
            </Typography>
          )}
        </div>
        <FormControl component="form">
          {!isLoggingIn && (
            <>
              <FormLabel>Username</FormLabel>
              <Input
                // html input attribute
                name="username"
                type="text"
                placeholder="johndoe"
                onChange={handleChange}
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
        </FormControl>
        <Button
          type="submit"
          sx={{ mt: 1 /* margin top */ }}
          onClick={handleClick}
        >
          {isLoggingIn ? "Log in" : "Sign up"}
        </Button>
        <Typography
          endDecorator={
            isLoggingIn ? (
              <Link href="/register">Sign up</Link>
            ) : (
              <Link href="/login">Sign in</Link>
            )
          }
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          {isLoggingIn ? "Don't have an account?" : "Already have an account?"}
        </Typography>
      </Sheet>
    </div>
  );
};

export default SignForm;
