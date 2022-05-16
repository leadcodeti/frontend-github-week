import { unstable_FormSubmitButton as FormSubmitButton } from "reakit/Form";

import styles from "./styles.module.scss";

interface ButtonProps {
  buttonName: string;
  form: any;
}

export function Button({ buttonName, form }: ButtonProps) {
  return (
    <FormSubmitButton className={styles.button} type="submit" {...form}>
      <span>{buttonName}</span>
    </FormSubmitButton>
  );
}
