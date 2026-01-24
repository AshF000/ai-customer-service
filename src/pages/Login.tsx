import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
// import type { UserAdmin } from "@/type";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordErr, setPasswordErr] = useState<string>("");

  const {login} = useAuth()

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setEmailErr("");
    setPasswordErr("");
  };

  const handleSubmit = async () => {
    if (!email.trim()) setEmailErr("Nai to kichu");
    console.log(email, password);
    login(email, password);
    // const user: UserAdmin = await res.json();
    // console.table(user);
  };

  return (
    <div className="w-100 bg-slate-50 dark:bg-slate-700 px-2 py-6 text-slate-900 border-2 border-slate-400 dark:border-0 dark:text-slate-300 aspect-square rounded-2xl absolute top-1/2 left-1/2 -translate-1/2">
      <div className="w-10/12 mx-auto flex flex-col gap-4">
        <Field>
          <FieldLabel htmlFor="input-field-username">Email</FieldLabel>
          <Input
            id="input-field-email"
            type="email"
            placeholder="Enter your email"
            value={email ?? ""}
            onChange={(e) => {
              setEmailErr("");
              setEmail(e.target.value);
            }}
          />
          <FieldDescription className={`text-red-600 dark:text-red-400`}>
            {emailErr ?? ""}
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="input-field-password">Password</FieldLabel>
          <Input
            id="input-field-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPasswordErr("");
              setPassword(e.target.value);
            }}
          />
          <FieldDescription>{passwordErr ?? ""}</FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Button type="reset" variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            className={`bg-slate-700 dark:bg-white text-white dark:text-slate-800`}
          >
            Submit
          </Button>
        </Field>
      </div>
    </div>
  );
};

export default Login;
