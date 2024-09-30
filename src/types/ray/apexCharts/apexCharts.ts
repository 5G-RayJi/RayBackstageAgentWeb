//參考用
import type { ApexOptions } from "apexcharts";

export interface ApexAxisChartSeries {
  name?: string;
  type?: string;
  color?: string;
  group?: string;
  hidden?: boolean;
  zIndex?: number;
  data:
    | (number | null)[]
    | {
        x: any;
        y: any;
        fill?: ApexFill;
        fillColor?: string;
        strokeColor?: string;
        meta?: any;
        goals?: any;
        barHeightOffset?: number;
        columnWidthOffset?: number;
      }[]
    | [number, number | null][]
    | [number, (number | null)[]][]
    | number[][];
}
[];

//所有Apex元件都會用到的放這---------------------------------------------
export interface ApexBaseOptions {
  chart: { id: string };
}

//只有ApexLine用到的放這---------------------------------------------
export interface ApexLineSeries {
  name: string;
  data: { x: any; y: any }[];
}

export interface ApexLineOptions extends ApexBaseOptions {
  /**各線段顏色設定 */
  colors?: string[];
  legend?: {
    show?: boolean;
  };
  markers?: {
    size?: number | number[];
  };
}
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

export type ApexChart = {
  id?: string;
  width?: number;
  height?: number;
};

export type ApexXAxis = {
  categories?: any;
};
