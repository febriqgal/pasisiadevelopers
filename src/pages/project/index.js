import Layout from "@/components/layout";
import React from "react";
import Styles from "../../styles/Home.module.css";
import { Grid, Card, Text } from "@nextui-org/react";
export default function Project() {
  const MockItem = ({ text }) => {
    return (
      <Card
        className="bg-slate-500 border"
        css={{ h: "$20", $$cardColor: "$colors$primary" }}
      >
        <Card.Body>
          <Text
            className="text-center flex justify-center items-center"
            color="white"
          >
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <Layout>
      <Grid.Container className="my-[92px] px-16" gap={2} justify="center">
        <Grid className="h-[100px]" xs={6}>
          <MockItem text="1" />
        </Grid>
        <Grid xs={6}>
          <MockItem text="2" />
        </Grid>
        <Grid xs={6}>
          <MockItem text="3" />
        </Grid>
        <Grid xs={3}>
          <MockItem text="4" />
        </Grid>
        <Grid xs={3}>
          <MockItem text="5" />
        </Grid>
        <Grid xs={3}>
          <MockItem text="6" />
        </Grid>
        <Grid xs={3}>
          <MockItem text="7" />
        </Grid>
        <Grid xs={3}>
          <MockItem text="8" />
        </Grid>
        <Grid xs={3}>
          <MockItem text="9" />
        </Grid>
        <Grid xs={3}>
          <MockItem text="10" />
        </Grid>
        <Grid xs={6}>
          <MockItem text="11" />
        </Grid>
        <Grid xs={3}>
          <MockItem text="12" />
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
