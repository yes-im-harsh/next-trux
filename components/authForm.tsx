import { Box, Flex, Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import NextImage from "next/image";
import { auth } from "../lib/mutation";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bg="black">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 2px solid"
      >
        <NextImage src="/logo.svg" width={120} height={60} />
      </Flex>

      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              marginBottom="5"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              marginBottom="5"
            />
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              marginBottom="5"
              sx={{
                "&:hover": {
                  bg: "green.400",
                },
              }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
