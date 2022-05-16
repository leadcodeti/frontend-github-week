import {
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
} from "reakit/Form";

import styles from "./styles.module.scss";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  htmlFor: string;
  form: any;
}

export function Input({ name, placeholder, type, htmlFor, form }: InputProps) {
  return (
    <div className={styles.inputContent}>
      <FormLabel className={styles.label} {...form} name={name}>
        {htmlFor}
      </FormLabel>
      <FormInput
        className={styles.input}
        {...form}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <FormMessage className={styles.error} {...form} name={name} />
    </div>
  );
}
