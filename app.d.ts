interface AllGaugeValues {
  timestamp: Date;
  readings: {
    label: string;
    value: number;
    quality: string;
  }[];
}

interface SingleGaugeHistory {
  label: string;
  readings: { timestamp: Date; value: number; quality: string }[];
}

interface ChartDataPoint {
  date: Date;
  value: number;
}

interface ChartDimensions {
  width: number;
  height: number;
  margin: { top: number; right: number; bottom: number; left: number };
}
