import { useState } from "react";
import { useRouter } from "next/router";
import { Flex, Input, Button } from "@chakra-ui/react";

const SignUp = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleSignUp = async () => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (response.ok) {
      router.push("/auth/signin");
    } else {
      // Handle errors
    }
  };
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" height="80vh">
      <h1>Sign up</h1>
      <Input
        type="email"
        margin="10px"
        placeholder="Email"
        focusBorderColor="white"
        value={userInfo.email}
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      />
      <Input
        type="password"
        margin="10px"
        focusBorderColor="white"
        placeholder="Password"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />
      <Button type="submit" onClick={handleSignUp}>
        Sign Up
      </Button>
    </Flex>
  );
};
export default SignUp;
