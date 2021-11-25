import React from "react";

/* UI Library Components */
import { Card } from "antd";

/* Libraries */
import { Column } from "@ant-design/charts";

const ColumnChart = ({ data, title, total, height = 422 }) => {
  let config = {
    data: data,
    appendPadding: [20, 20, 0, 20],
    xField: "year",
    yField: "value",
    /* label: { position: "middle" }, */
    /* scrollbar: { type: "horizontal" }, */
    slider: { start: 0.0, end: 1 },
    columnWidthRatio: 0.6,
    columnBackground: { style: { fill: "rgba(0,0,0,0.1)" } },
    tooltip: {
      formatter: (datum) => {
        return {
          title: `Año: ${datum.year}`,
          name: "Citas",
          value: datum.value,
        };
      },
    },
    xAxis: {
      label: {
        /* autoHide: false, */
        autoRotate: false,
      },
    },
  };

  return (
    <Card
      size="small"
      title={title}
      headStyle={{ backgroundColor: "#003e65", color: "white" }}
      bodyStyle={{ padding: "10px", height: height }}
    >
      <div className="chart">
        <p id="column__statistic">
          Total: <b>{total}</b>
        </p>
        <Column {...config} style={{ height: "88%" }} />
      </div>
    </Card>
  );
};
export default ColumnChart;