import { UserContext } from "../hook/useContext";
import { ValuesProps } from "../types/props";


export function ValidationRegisterForm( values: ValuesProps){

  const { registerEmail } = UserContext();
  registerEmail(values.name);
  console.log(values.name)

  if (!values.name) {
    const errors = { name: "Name is required" };
    throw errors;
  }

  if (!values.email) {
    const errors = { email: "E-mail is required" };
    throw errors;
  }

  if (!values.password) {
    const errors = { password: "Password is required" };
    throw errors;
  }
}

export function ValidationLoginForm( values:{email:string,password:string}){
  if (!values.email) {
    const errors = { email: "E-mail is required" };
    throw errors;
  }
  if (!values.password) {
    const errors = { password: "Password is required" };
    throw errors;
  }
}