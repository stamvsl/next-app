import { NextPage } from "next";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Flex, Button, Box, Input } from "@chakra-ui/react";

const SignIn = (props) => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    if (res.ok) {
      router.push("/main");
    } else {
      console.log("Failed to log in:", res.error);
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" height="80vh">
      <h1>Login</h1>

      <Input
        margin="10px"
        value={userInfo.name}
        onChange={({ target }) => setUserInfo({ ...userInfo, name: target.value })}
        type="string"
        placeholder="name"
        focusBorderColor="white"
      />
      <Input
        margin="10px"
        value={userInfo.email}
        onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
        type="email"
        placeholder="Email"
        focusBorderColor="white"
      />
      <Input
        margin="10px"
        value={userInfo.password}
        onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
        type="password"
        placeholder="********"
        focusBorderColor="white"
      />
      <Button type="submit" onClick={handleLogin} value="Login">
        Login
      </Button>

      <p>or</p>
      <Button onClick={() => router.push("/auth/signupPage")}>Sign up</Button>
    </Flex>
  );
};

export default SignIn;
