import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DateHeader from "./DateHeader";
import { getMetricMetaInfo } from "../utils/helpers";
import { gray } from "../utils/colors";

export default function MetricCard({date, metrics}) {
  return (
    <View>
      {date && <DateHeader date={date} />}
      {Object.keys(metrics).map(x => {
        const { getIcon, displayName, unit, backgroundColor } = getMetricMetaInfo(x);

        return (
          <View style={styles.metric} key={x}>
            {getIcon()}
            <View>
              <Text style={{fontSize: 20}}>
                {displayName}
              </Text>
              <Text style={{fontSize: 16, color: gray}}>
                {metrics[x]} {unit}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  metric: {
    flexDirection: "row",
    marginTop: 12
  }
});
