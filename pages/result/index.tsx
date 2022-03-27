import { Button, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ComposedChart,
  Bar,
  PieChart,
  Pie,
  Sector,
} from "recharts";

const data1 = [
  {
    name: "N-2",
    CA: 5000000,
  },
  {
    name: "N-1",
    CA: 6100000,
  },
  {
    name: "N",
    CA: 4002000,
  },
];
const data3 = [
  {
    name: "N-2",
    Impayés: 5,
    Impayés_pro: 2,
  },
  {
    name: "N-1",
    Impayés: 3,
    Impayés_pro: 4,
  },
  {
    name: "N",
    Impayés: 6,
    Impayés_pro: 7,
  },
];
const data2 = [
  {
    name: "N-2",
    CAF: 3004000,
  },
  {
    name: "N-1",
    CAF: 2061000,
  },
  {
    name: "N",
    CAF: 2001000,
  },
];
const data5 = [
  { name: "Pondé = 1", name_: "+5", value: 200, name_2: "+" },
  { name: "Pondé = 0.8", name_: "+2.2", value: 200, name_2: "+5" },
  { name: "Pondé = 0.6", name_: "+0.3", value: 200, name_2: "+2.2" },
  { name: "Pondé = 0.4", name_: "-1.8", value: 200, name_2: "+1" },
  { name: "Pondé = 0.2", name_: "-4.9", value: 200, name_2: "-2.5" },
  { name: "Pondé = 0", name_: "-", value: 200, name_2: "-4.8" },
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
    name_,
    name_2,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333">{`Progréssion`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999">
        {`[${name_}%, ${name_2}]`}
      </text>
    </g>
  );
};

const HomeResult: NextPage = () => {
  const [state, setState] = useState({
    activeIndex: 0,
  });

  const onPieEnter = (_, index) => {
    setState({
      activeIndex: index,
    });
  };

  return (
    <div className="py-5">
      <Head>
        <title>SCORE LAB | Dashboard</title>
      </Head>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <div className="w-full sm:max-h-screen sm:overflow-y-scroll ">
            {/* ratio */}
            <h1 className="font-semibold text-blue-700 text-3xl my-3 text-center">
              Statistiques
            </h1>
            {/* CA */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl text-center my-3">CA Progression</h1>

              <LineChart
                width={450}
                height={300}
                data={data1}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="CA" stroke="#82ca9d" />
              </LineChart>
            </div>
            {/* CAF */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl text-center my-3">CAF Progression</h1>
              <AreaChart
                width={450}
                height={300}
                data={data2}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="CAF"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl text-center my-3">Impayés</h1>
              <ComposedChart
                width={450}
                height={400}
                data={data3}
                margin={{
                  top: 10,
                  right: 30,
                  bottom: 0,
                  left: 0,
                }}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Impayés" barSize={20} fill="#413ea0" />
                <Line
                  type="monotone"
                  dataKey="Impayés_pro"
                  name="Impayés Progression"
                  stroke="#ff7300"
                />
              </ComposedChart>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {/* risques */}
          <h1 className="font-semibold text-green-700 text-3xl my-3 text-center">
            Décision
          </h1>
          <div className="space-y-3">
            <h1 className="text-xl my-2 text-center">
              {" "}
              CA Progression Score:{" "}
              <span className="text-green-700">96.7%</span>{" "}
            </h1>
            <h1 className="text-xl my-2 text-center">
              {" "}
              CAF Progression Score:{" "}
              <span className="text-green-700">89.5%</span>{" "}
            </h1>
            <h1 className="text-xl my-2 text-center">
              {" "}
              Secteur Score: <span className="text-green-700">78.2%</span>{" "}
            </h1>
            <h1 className="text-xl my-2 text-center">
              {" "}
              Risks Score: <span className="text-green-700">88.25%</span>
            </h1>
            <h1 className="text-xl mb-2 mt-6 text-center">
              {" "}
              Final Score: <span className="text-green-700">90.2%</span>
            </h1>
          </div>
          {/* secteur d'activité */}
          <h1 className="font-semibold text-red-700 text-3xl mb-3 mt-10 text-center">
            Based Functions
          </h1>
          <div>
            <ul>
              <li className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-semibold mt-3 text-center">
                  Pondération du CA
                </h1>
                <PieChart width={450} height={450}>
                  <Pie
                    activeIndex={state?.activeIndex}
                    activeShape={renderActiveShape}
                    data={data5}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                  />
                </PieChart>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeResult;
