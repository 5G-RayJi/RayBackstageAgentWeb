//參考用
import type { ApexOptions } from "apexcharts";
/**Apex圖表配置結構(ApexConfig有添加屬性要記得補到ApexBase.vue內) */
export type ApexConfig = {
  /**圖表類型 */
  type: string;
  /**圖表寬度 */
  width: number;
  /**圖表高度 */
  height: number;
  /**樣式調整(注意有關Chart也是包在options內) */
  options?: ApexOptions;
  /**圖表資料 */
  series?: ApexChartSeries[];
};

/**圖表系列資料格式 */
export type ApexChartSeries = {
  /**系列名稱 */
  name: string;
  /**系列資料 */
  data: { x: any; y: any }[];
};

//預設設定-------------------------------------------------------------------------------
//預設設定-------------------------------------------------------------------------------
//預設設定-------------------------------------------------------------------------------

/**各圖表共用配置 */
export const getDefaultConfig = (): ApexConfig => {
  return {
    type: "line",
    width: 700,
    height: 400,
    options: {
      //特別注意chart結構不同,參照在options內
      chart: {
        id: "chartID",
        animations: {
          enabled: false,
          easing: "linear",
          animateGradually: {
            enabled: false,
          },
          dynamicAnimation: {
            enabled: false,
          },
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    series: [
      {
        name: "series-1",
      },
    ] as ApexChartSeries[],
  };
};

/**Line圖表配置=============================================================== */
export const getLineConfig = (): ApexConfig => {
  let config = getDefaultConfig();
  config.type = "line";
  config.options = {
    ...config.options,
    markers: {
      size: 3,
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
  };
  return config;
};

/**Area圖表配置=============================================================== */
export const getAreaConfig = (): ApexConfig => {
  let config = getDefaultConfig();
  config.type = "area";
  config.options = {
    ...config.options,
    markers: {
      size: 3,
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: true,
    },
  };
  return config;
};
