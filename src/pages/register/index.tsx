/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { RegisterForm } from "../../components/Form";
import styles from "./styles.module.scss";

interface userProps {
  userName: string;
  userPassword: string;
}


export default function Register() {
  return (
    <>
      <Head>
        <title>Register|Leadcode</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.logoLeadCode}>
          <img
            className={styles.elipseBackground}
            src="elipse.png"
            alt="Elipse Background"
          />
          <div>
            <img src="logo.svg" alt="Logo LeadCode" />
            <h1>&lt;LeadCode /&gt;</h1>
          </div>
        </div>
        <div className={styles.content}>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
