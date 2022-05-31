import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Heading, Link, Text } from '@chakra-ui/core'

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creating App of Voting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Heading as="h1" size="2xl" mb="2">
          Welcome to <Link color="teal.500" href="https://nextjs.org">Voting-System!</Link>
        </Heading>
        <Text className={styles.description}>
          This is another a project podCodar{' '}
          <Link color="#8e407a" href="https://www.notion.so/podcodar/VS-42132534db42406e9e9fe1e6defa0ab9">Wiki.</Link>
        </Text>
      </main>
    </div>
  );
};

export default Home;
