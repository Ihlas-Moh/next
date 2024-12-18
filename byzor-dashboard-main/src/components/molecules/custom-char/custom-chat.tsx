"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface ChartProps {
  title: string;
  description?: string;
  data: any[];
  xKey: string;
  yKeys: string[];
  colors: string[];
  type: "line" | "bar";
}

export function CustomChart({
  title,
  description,
  data,
  xKey,
  type,
}: ChartProps) {
  const Chart = type === "line" ? LineChart : BarChart;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <Chart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Legend />
          </Chart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
