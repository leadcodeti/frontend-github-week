/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { useRouter } from "next/router";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
} from "reakit/Form";
import { ValidationRegisterForm } from "../../validation/validationForm";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./styles.module.scss";


// {
//   "name": "OZEIAS GOMES PEREIRA",
//   "email": "ozeias@gmail.com",
//   "password": "1234567",
//   "confirmPassword": "1234567"
// }

export function RegisterForm() {
  const router = useRouter();

  const form = useFormState({
    values: { name:"", email: "", password: "" },
    onValidate: (values) => { ValidationRegisterForm(values)},

    onSubmit: async (data) => {
      console.log(data)
      try {
        const response = await api.post("/users", data);
        if (response.status === 200) {
          setTimeout(() => {
            router.push("/home");
          }, 600);
        }
      } catch (error) {
        toast.error("User already exist", {
          autoClose: 5000,
        });
      }
    },
    resetOnSubmitSucceed: true,
  });

  return (

       <Form {...form} 
         className={styles.container}
       >
      <h1>Create an account</h1>
      <Input
        name="name"
        placeholder="John Doe"
        type="text"
        htmlFor="Name"
        form={form}
      />
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
       <Input
        name="confirmPassword"
        placeholder="ex.123"
        type="password"
        htmlFor="Confirm Password"
        form={form}
      />
      
      <Link href="/login">I already have an account</Link>
      <Button buttonName="Create"  form={form}/>
    </Form>
   
  );
}
