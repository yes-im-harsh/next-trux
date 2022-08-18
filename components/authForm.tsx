import { Box, Flex, Input, Button } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutation";

const AuthForm: FC<{ mode: string }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <Box height="100vh" width="100vw" bg="black">
      <Flex justify="center" align="center" height="100px">
        Hello
      </Flex>

      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        Form
      </Flex>
    </Box>
  );
};

export default AuthForm;
