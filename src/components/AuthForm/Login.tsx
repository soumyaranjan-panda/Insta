import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
    interface AuthInput {
        email: string;
        password: string;
    }
    const [inputs, setInputs] = useState<AuthInput>({
        email: "",
        password: "",
    });
    return (
        <>
            <Input
                placeholder="Email"
                fontSize={14}
                type="email"
                value={inputs.email}
                size={"sm"}
                onChange={(e) => {
                    setInputs({ ...inputs, email: e.target.value });
                }}
            />
            <Input
                placeholder="Password"
                fontSize={14}
                type="password"
                size={"sm"}
                value={inputs.password}
                onChange={(e) => {
                    setInputs({ ...inputs, password: e.target.value });
                }}
            />
            <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
                Log in
            </Button>
        </>
    );
};

export default Login;
