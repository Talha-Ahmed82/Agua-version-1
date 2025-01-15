import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let root;

    const initChart = async () => {
      if (!chartRef.current) return;

      const am5 = await import("@amcharts/amcharts5");
      const am5percent = await import("@amcharts/amcharts5/percent");
      const am5themes_Animated = await import("@amcharts/amcharts5/themes/Animated");

      // Initialize root
      root = am5.Root.new(chartRef.current);

      // Apply themes
      root.setThemes([am5themes_Animated.default.new(root)]);

      // Create PieChart
      const chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          radius: am5.percent(90),
          innerRadius: am5.percent(50),
        })
      );

      // Create PieSeries
      const series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "category",
        })
      );

      // Set data
      series.data.setAll([
        { category: "Category A", value: 40 },
        { category: "Category B", value: 25 },
        { category: "Category C", value: 20 },
        { category: "Category D", value: 15 },
      ]);

      // Animate slices
      series.slices.template.setAll({
        strokeOpacity: 0,
        strokeWidth: 2,
        cornerRadius: 5,
      });

      series.slices.template.states.create("hover", {
        scale: 1.1,
        strokeWidth: 3,
      });

      // Animation for series appearance
      series.appear(1000, 100);

      // Animate slices individually
      series.slices.template.adapters.add("fillGradient", (fillGradient, target) => {
        return am5.RadialGradient.new(root, {
          stops: [
            { brighten: -0.3 },
            { brighten: -0.1 },
            { brighten: 0.1 },
          ],
        });
      });

      // Add Legend
      const legend = chart.children.push(
        am5.Legend.new(root, {
          centerX: am5.percent(50),
          x: am5.percent(50),
          layout: root.horizontalLayout,
        })
      );

      legend.data.setAll(series.dataItems);
    };

    initChart();

    return () => {
      if (root) root.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "500px" }} />;
};

export default dynamic(() => Promise.resolve(PieChart), { ssr: false });
