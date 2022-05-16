/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";
import { Input } from "../../components/Input";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
} from "reakit/Form";
import { ValidationLoginForm } from "../../validation/validationForm";
import { UserContext } from "../../hook/useContext";

export default function Login() {
  const router = useRouter();
  const { registerEmail } = UserContext()

  const form = useFormState({
    values: { email: "", password: "" },
    onValidate: (values) => { 
      ValidationLoginForm(values),
      registerEmail(values.email)
    },

    onSubmit: async (data) => {
      try {
        const response = await api.post("/auth", data);
        if (response.status === 200) {
          setTimeout(() => {
            router.push("/home");
          }, 600);
        }
      } catch (error) {
        toast.error("Verify your E-mail or Password", {
          autoClose: 5000,
        });
      }
    },
    resetOnSubmitSucceed: true,
  });

  return (
    <>
      <Head>
        <title>Login | Leadcode</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.logoLeadCode}>
          <div>
            <img src="logo.svg" alt="LeadCode" />
            <h1>&lt;LeadCode /&gt; </h1>
          </div>
        </div>

        <div className={styles.loginForm}>
          <img src="elipseright.png" alt="Elipse Background" />

          <Form {...form}>
            <h1>Login</h1>
            <div className={styles.inputArea}>
              <Input
                name="email"
                placeholder="johndoe@example.com"
                type="email"
                htmlFor="E-mail"
                form={form}
              />
              <Input
                name="password"
                placeholder="ex.123"
                type="password"
                htmlFor="Password"
                form={form}
              />
            </div>
            <Link href="/register">create an account?</Link>
            <Button buttonName="Sign In" form={form} />
          </Form>
        </div>
      </main>
    </>
  );
}
