<script setup>
import Chart from "chart.js/auto";
import { useAppVariableStore } from "@/stores/app-variable";

const appVariable = useAppVariableStore();

const props = defineProps(["data", "type", "options", "width", "height"]);

const ccc = ref();

const chartInstance = ref();

onMounted(() => {
  Chart.defaults.font.family = appVariable.font.bodyFontFamily;
  Chart.defaults.color = appVariable.color.bodyColor;
  Chart.defaults.borderColor = appVariable.color.borderColor;
  Chart.defaults.plugins.legend.display = false;
  Chart.defaults.plugins.tooltip.padding = {
    left: 8,
    right: 12,
    top: 8,
    bottom: 8,
  };
  Chart.defaults.plugins.tooltip.cornerRadius = 8;
  Chart.defaults.plugins.tooltip.titleMarginBottom = 6;
  Chart.defaults.plugins.tooltip.color = "#000";
  Chart.defaults.plugins.tooltip.multiKeyBackground =
    appVariable.color.componentColor;
  Chart.defaults.plugins.tooltip.backgroundColor = "#000";
  Chart.defaults.plugins.tooltip.titleFont.family =
    appVariable.font.bodyFontFamily;
  Chart.defaults.plugins.tooltip.titleFont.weight =
    appVariable.font.bodyFontWeight;
  Chart.defaults.plugins.tooltip.footerFont.family =
    appVariable.font.bodyFontFamily;
  Chart.defaults.plugins.tooltip.displayColors = true;
  Chart.defaults.plugins.tooltip.boxPadding = 6;
  Chart.defaults.scale.grid.color = appVariable.color.borderColor;
  Chart.defaults.scale.beginAtZero = true;
  Chart.defaults.scale.ticks.backdropColor =
    "rgba(" + appVariable.color.componentColorRgb + ", 0)";

  chartInstance.value = createChart(props.type);
});

const doSomething = (v) => {
  chartInstance.value.destroy();
  chartInstance.value = createChart(v);
};

const createChart = (type) => {
  return new Chart(ccc.value, {
    type: type,
    data: props.data,
    options: props.options,
  });
};
defineExpose({
  doSomething,
});
</script>

<template>
  <canvas ref="ccc" :height="height" />
</template>
