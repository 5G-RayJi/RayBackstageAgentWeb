<template>
  <Page :title="'測試1'">
    <!-- <MyDropdown :title="'類型'" :options="chartTypes"></MyDropdown> -->
    <div class="row">
      <div class="col-2 col-md-3" v-for="config in allChartConfig">
        <Chartjs
          :type="config.type"
          :data="config.data"
          ref="childComponentRef"
        />
      </div>
    </div>
  </Page>
</template>

<!------------------------------------------------------------------------------------------------->

<script lang="ts" setup>
//asd
import { useAppOptionStore } from "@/stores/app-option";
import { ref, computed, onMounted } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { useAppVariableStore } from "@/stores/app-variable";
import type { ChartConfiguration, ChartType } from "chart.js";

const allChartConfig = ref<ChartConfiguration[]>([]);
const appVariable = useAppVariableStore();
const appOption = useAppOptionStore();

const chartTypes = [
  "bar",
  "bubble",
  "doughnut",
  "line",
  "pie",
  "polarArea",
  "radar",
  "scatter",
];

onMounted(async () => {
  appOption.appContentFullHeight = true;
  appOption.appContentClass = "p-0";
});

onBeforeRouteLeave(() => {
  appOption.appContentFullHeight = false;
  appOption.appContentClass = "";
});

//line------------------------------------------------------------------------------------------------
const line: ChartConfiguration = {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        color: appVariable.color.blue,
        backgroundColor: "rgba(" + appVariable.color.blueRgb + ", .2)",
        borderColor: appVariable.color.blue,
        borderWidth: 1.5,
        pointBackgroundColor: appVariable.color.blue,
        pointBorderWidth: 1.5,
        pointRadius: 4,
        pointHoverBackgroundColor: appVariable.color.blue,
        pointHoverBorderColor: appVariable.color.blue,
        pointHoverRadius: 7,
        label: "Total Sales",
        data: [12, 19, 4, 5, 2, 3],
      },
    ],
  },
};
allChartConfig.value.push(line);

//bar------------------------------------------------------------------------------------------------
const bar: ChartConfiguration = {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total Visitors",
        data: [37, 31, 36, 34, 43, 31],
        backgroundColor: "rgba(" + appVariable.color.blueRgb + ", .5)",
        borderColor: appVariable.color.blue,
        borderWidth: 1.5,
      },
      {
        label: "New Visitors",
        data: [12, 16, 20, 14, 23, 21],
        backgroundColor:
          "rgba(" + appVariable.color.componentColorRgb + ", .2)" + ", .5)",
        borderColor: "rgba(" + appVariable.color.componentColorRgb + ", .65)",
        borderWidth: 1.5,
      },
    ],
  },
};
allChartConfig.value.push(bar);

//radar------------------------------------------------------------------------------------------------
const radar: ChartConfiguration = {
  type: "radar",
  data: {
    labels: [
      "United States",
      "Canada",
      "Australia",
      "Netherlands",
      "Germany",
      "New Zealand",
      "Singapore",
    ],
    datasets: [
      {
        label: "Mobile",
        backgroundColor: "rgba(" + appVariable.color.blueRgb + ", .2)",
        borderColor: appVariable.color.blue,
        pointBackgroundColor: appVariable.color.blue,
        pointBorderColor: appVariable.color.blue,
        pointHoverBackgroundColor: appVariable.color.blue,
        pointHoverBorderColor: appVariable.color.blue,
        data: [65, 59, 90, 81, 56, 55, 40],
        borderWidth: 1.5,
      },
      {
        label: "Desktop",
        backgroundColor: "rgba(" + appVariable.color.gray500Rgb + ", .2)",
        borderColor: appVariable.color.gray500,
        pointBackgroundColor: appVariable.color.gray500,
        pointBorderColor: appVariable.color.gray500,
        pointHoverBackgroundColor: appVariable.color.gray500,
        pointHoverBorderColor: appVariable.color.gray500,
        data: [28, 48, 40, 19, 96, 27, 100],
        borderWidth: 1.5,
      },
    ],
  },
};
allChartConfig.value.push(radar);
//polarArea------------------------------------------------------------------------------------------------
const polarArea: ChartConfiguration = {
  type: "polarArea",
  data: {
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          "rgba(" + appVariable.color.blueRgb + ", .5)",
          "rgba(" + appVariable.color.gray100Rgb + ", .2)" + ", .5)",
          "rgba(" + appVariable.color.gray300Rgb + ", .5)",
          "rgba(" + appVariable.color.gray500Rgb + ", .5)",
          "rgba(" + appVariable.color.gray800Rgb + ", .5)",
        ],
        borderWidth: 0,
      },
    ],
    labels: ["IE", "Safari", "Chrome", "Firefox", "Opera"],
  },
};
allChartConfig.value.push(polarArea);
//pie------------------------------------------------------------------------------------------------
const pie: ChartConfiguration = {
  type: "pie",
  data: {
    labels: ["Total Visitor", "New Visitor", "Returning Visitor"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(" + appVariable.color.redRgb + ", .5)",
          "rgba(" + appVariable.color.greenRgb + ", .5)" + ", .5)",
          "rgba(" + appVariable.color.blueRgb + ", .5)",
        ],
        hoverBackgroundColor: [
          "rgba(" + appVariable.color.redRgb + ", 1)",
          "rgba(" + appVariable.color.greenRgb + ", 1)",
          "rgba(" + appVariable.color.blueRgb + ", 1)",
        ],
        borderWidth: 0,
      },
    ],
  },
};
allChartConfig.value.push(pie);
//doughnut------------------------------------------------------------------------------------------------
const doughnut: ChartConfiguration = {
  type: "doughnut",
  data: {
    labels: ["Total Visitor", "New Visitor", "Returning Visitor"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(" + appVariable.color.redRgb + ", .5)",
          "rgba(" + appVariable.color.greenRgb + ", .5)" + ", .5)",
          "rgba(" + appVariable.color.blueRgb + ", .5)",
        ],
        hoverBackgroundColor: [
          appVariable.color.red,
          appVariable.color.green,
          appVariable.color.blue,
        ],
        borderWidth: 0,
      },
    ],
  },
};
allChartConfig.value.push(doughnut);

//bubble------------------------------------------------------------------------------------------------
const bubble: ChartConfiguration = {
  type: "bubble",
  data: {
    datasets: [
      {
        label: "First Dataset",
        data: [
          {
            x: 20,
            y: 30,
            r: 10,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
        ],
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  },
};
allChartConfig.value.push(bubble);

//scatter------------------------------------------------------------------------------------------------
const scatter: ChartConfiguration = {
  type: "bubble",
  data: {
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 0.5,
            y: 5.5,
          },
        ],
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  },
};
allChartConfig.value.push(scatter);

//父傳子------------------------------------------------------------------------------
/*
const childComponentRef = ref(null);
const myType = ref("bar");
const onChangeType = (v: string) => {
  myType.value = v;
  childComponentRef.value.doSomething(v);
};
const chartLabels = computed(() => {
  return ["a", "b", "c"];
});
const chartData = computed(() => {
  return [0.5, 0.5, 1];
});
const chart = ref({
  type: "pie",
  labels: chartLabels.value,
  data: {
    labels: chartLabels.value,
    datasets: [
      {
        data: chartData.value,
        backgroundColor: [
          "rgba(" + appVariable.color.themeRgb + ", .5)",
          "rgba(" + appVariable.color.redRgb + ", .2)" + ", .5)",
          "rgba(" + appVariable.color.gray600Rgb + ", .5)",
        ],
        hoverBackgroundColor: [
          appVariable.color.theme,
          appVariable.color.red,
          appVariable.color.gray900,
        ],
        borderWidth: 0,
      },
    ],
  },
});
*/
</script>
