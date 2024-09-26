<template>
  <Page :title="'測試1'">
    <div class="row">
      <div class="col-3">
        <MyDropdown
          :title="'類型'"
          :options="chartTypes"
          @changeType="ttt"
        ></MyDropdown>
        <Chartjs :type="myType" :data="chart.data" ref="childComponentRef" />
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

const childComponentRef = ref(null);
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
const myType = ref("bar");
const ttt = (v: string) => {
  myType.value = v;
  childComponentRef.value.doSomething(v);
};
const appOption = useAppOptionStore();
const appVariable = useAppVariableStore();
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

onMounted(async () => {
  appOption.appContentFullHeight = true;
  appOption.appContentClass = "p-0";
});

onBeforeRouteLeave(() => {
  appOption.appContentFullHeight = false;
  appOption.appContentClass = "";
});
</script>
