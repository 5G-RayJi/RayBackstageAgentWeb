<template>
  <h1>VueApexChart</h1>

  <div class="row">
    <div class="col-md-3">
      <VueApexCharts
        type="line"
        :height="300"
        :options="line.options"
        :series="line.series"
      ></VueApexCharts>
    </div>
    <div class="col-md-3">
      <VueApexCharts
        type="area"
        :height="300"
        :options="area.options"
        :series="area.series"
      ></VueApexCharts>
    </div>
  </div>
</template>
<script setup>
import VueApexCharts from "vue3-apexcharts";

//line------------------------------------------------------------
const line = ref({
  options: {
    chart: {
      id: "vuechart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
});
//area------------------------------------------------------------
const area = ref({
  series: [
    {
      name: "STOCK ABC",
      data: [1, 2, 3],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    title: {
      text: "Fundamental Analysis of Stocks",
      align: "left",
    },
    subtitle: {
      text: "Price Movements",
      align: "left",
    },
    labels: ["a", "b", "c"],
    xaxis: {
      type: "string",
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
    },
  },
});

//bar------------------------------------------------------------
const bar = ref({
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  },
});
</script>
<style></style>
