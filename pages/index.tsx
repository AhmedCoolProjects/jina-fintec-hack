import { Button, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import {
  CAFPart,
  CAPart,
  ChargePart,
  ImpayePart,
  MvntCreditPart,
  SecteurActivitePart,
  StatusSelectPart,
} from "../src/components";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="py-5">
      <Head>
        <title>SCORE LAB | Dashboard</title>
      </Head>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          {/* ratio */}
          <h1 className="font-semibold text-blue-700 text-3xl my-3 text-center">
            Ratio
          </h1>
          <CAPart />
          <CAFPart />
          <MvntCreditPart />
          <ChargePart />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {/* risques */}
          <h1 className="font-semibold text-red-700 text-3xl my-3 text-center">
            Risques
          </h1>
          <ImpayePart />
          <StatusSelectPart />
          {/* secteur d'activité */}
          <h1 className="font-semibold text-green-700 text-3xl mb-3 mt-10 text-center">
            Secteurs d&apos;activité
          </h1>
          <SecteurActivitePart />
          <Link href="/result" passHref>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              className="w-full py-3 my-3">
              Analyse & Score
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
