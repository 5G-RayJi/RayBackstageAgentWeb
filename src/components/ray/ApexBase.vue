<template>
  <apexchart
    :type="$props.config.type"
    :width="$props.config.width"
    :height="$props.config.height"
    :options="$props.config.options"
    :series="$props.config.series"
    :toolbar="'asd'"
  ></apexchart>
</template>
<script lang="ts" setup>
import type { ApexConfig } from "@/types/ray/apexCharts/apexCharts";

/**外部設定property */
defineProps<{ config: ApexConfig }>();
</script>
