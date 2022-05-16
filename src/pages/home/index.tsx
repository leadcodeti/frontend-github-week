/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import { HStack, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const color = {
  orange: "#FD7F39",
  blue: "#24BFEB",
  purple: "#9324EB",
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
     }, 3000);
  },[])

  return (
    <>
      <Head>
          <title>Home | Leadcode</title>
      </Head>
      { isLoading ? 
      <>
       <div className={styles.loading}>
            <Spinner
              thickness="4px"
              speed="0.58s"
              emptyColor="gray.200"
              color="#24BFEB"
              size="xl"
            />
            <h1>&lt;LeadCode /&gt; </h1>
          </div>
      </>
      :
      <>
          <Header/>
      <div className={styles.container}>
        <div className={styles.content}>
           <h1>LeadCode Services</h1>
           <hr />
           <p>Fell Free to choose the better services for your business</p>
           <HStack 
              display='flex' 
              align='center' 
              justifyContent="center" 
              spacing={20}
              py="150"
            >
            <Card cardName="FRONT-END" cardColor={color.blue} />
            <Card cardName="BACK-END" cardColor={color.orange} />
            <Card cardName="UI/UX DESING" cardColor={color.purple} />
           </HStack>
        </div> 
      </div>
      </>
      }
    </>
  );
}