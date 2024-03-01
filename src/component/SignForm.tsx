import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { FC } from "react";
interface SignFormProps {
  isLoggingIn: boolean;
}

const SignForm: FC<SignFormProps> = ({ isLoggingIn }) => {
  return (
    <>
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
        <FormControl>
          {!isLoggingIn && (
            <>
              <FormLabel>Username</FormLabel>
              <Input
                // html input attribute
                name="username"
                type="text"
                placeholder="johndoe"
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>
        <Button sx={{ mt: 1 /* margin top */ }}>
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
    </>
  );
};

export default SignForm;
