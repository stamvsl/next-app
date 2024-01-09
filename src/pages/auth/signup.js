import { useState } from "react";
import { useRouter } from "next/router";
import { signUp } from "next-auth/react";
import { Flex, Input, Button } from "@chakra-ui/react";

const SignUp = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleSignUp = async () => {
    try {
      await signUp("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
      });

      router.replace("/auth/signin");
    } catch (error) {
      console.error("Signup failed", error);
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
      <Button onClick={handleSignUp}>Sign Up</Button>
    </Flex>
  );
};
export default SignUp;
