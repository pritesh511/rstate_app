import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Ref = BottomSheet;

interface Props {
  //   openFilterBottomSheet: () => void;
  closeFilterBottomSheet: () => void;
}

const FilterBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const { closeFilterBottomSheet } = props;
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  if (!ref) return <></>;
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        handleIndicatorStyle={{ backgroundColor: "#fff" }}
        // backgroundStyle={{ backgroundColor: "#1d0f4e" }}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: 1000,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default FilterBottomSheet;
