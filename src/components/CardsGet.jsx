import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const DonutChart = () => {
  useEffect(() => {
    // Create root element
    let root = am5.Root.new("chartdiv");

    // Disable the amCharts logo (requires a commercial license)
    root._logo.dispose();

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
        layout: root.verticalLayout,
        innerRadius: am5.percent(60),
      })
    );

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
      })
    );

    // Remove labels
    series.labels.template.set("forceHidden", true);
    series.ticks.template.set("forceHidden", true);

    // Set colors for the series
    series.set(
      "colors",
      am5.ColorSet.new(root, {
        colors: [
          am5.color(0x9fa1a6),
          am5.color(0xf2aa6b),
          am5.color(0xf28f6b),
        ],
      })
    );

    // Configure gradient
    let gradient = am5.RadialGradient.new(root, {
      stops: [
        { color: am5.color(0x000000) },
        { color: am5.color(0x000000) },
        {},
      ],
    });

    // Configure slices
    series.slices.template.setAll({
      fillGradient: gradient,
      strokeWidth: 2,
      stroke: am5.color(0xffffff),
      cornerRadius: 10,
      shadowOpacity: 0.1,
      shadowOffsetX: 2,
      shadowOffsetY: 2,
      shadowColor: am5.color(0x000000),
      fillPattern: am5.GrainPattern.new(root, {
        maxOpacity: 0.2,
        density: 0.5,
        colors: [am5.color(0x000000)],
      }),
    });

    series.slices.template.states.create("hover", {
      shadowOpacity: 1,
      shadowBlur: 10,
    });

    // Set series data
    series.data.setAll([
      { category: "Silver", value: 200 },
      { category: "Gold", value: 500 },
      { category: "Agua", value: 300 },
    ]);

    // Animate series
    series.appear(1000, 100);

    // Clean up chart on component unmount
    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>;
};

export default DonutChart;
