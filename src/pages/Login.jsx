import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  const handleSubmit = async () => {
    if (!username.trim()) setUsernameErr("Nai to kichu");
    console.log(username, password);
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 50, // optional, defaults to 60
      }),
    });
    const user = await res.json();
    console.table(user);
  };

  return (
    <div className="w-100 bg-slate-700 px-2 py-6 text-slate-300 aspect-square rounded-2xl absolute top-1/2 left-1/2 -translate-1/2">
      <div className="w-10/12 mx-auto flex flex-col gap-4">
        <Field>
          <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
          <Input
            id="input-field-username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => {
              setUsernameErr("");
              setUsername(e.target.value);
            }}
          />
          <FieldDescription className={`text-red-400`}>
            {usernameErr || ""}
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="input-field-password">Password</FieldLabel>
          <Input
            id="input-field-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPasswordErr("");
              setPassword(e.target.value);
            }}
          />
          <FieldDescription>{passwordErr || ""}</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Button type="reset" variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            className={`bg-white text-slate-800`}
          >
            Submit
          </Button>
        </Field>
      </div>
    </div>
  );
};

export default Login;
