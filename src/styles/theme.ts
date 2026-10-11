import { StyleSheet } from "react-native";


export const colors = {
  beige: "#F6F6E6",
  navy: "#131381",
  white: "#FFFFFF",
  gray: "#808080",
  black: "#000000",
  cornBlue: "#6495ED"
};
export const fonts = {
  InstrumentRegular: require("../../assets/fonts/static/InstrumentSans-Regular.ttf"),
  InstrumentBold: require("../../assets/fonts/static/InstrumentSans-Bold.ttf"),
  InstrumentSemiBold: require("../../assets/fonts/static/InstrumentSans-SemiBold.ttf"),
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F6E6",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: 500,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.beige,
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
  },
  bigText: {
    fontFamily: "InstrumentSemiBold",
    color: 'navy',
    fontSize: 50,
    textAlign: 'center',
    width: "100%",
  },

  button: {
    backgroundColor: colors.navy,
    borderRadius: 8,
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },

  buttonText: {
    color: colors.beige,
    fontFamily: "InstrumentBold",
    fontSize: 18,
    textAlign: 'center'
  },
  buttonText2: {
    color: colors.navy,
    fontFamily: "InstrumentBold",
    fontSize: 18,
    textAlign: 'center'
  },
  title: {
    fontFamily: "InstrumentBold",
    color: colors.navy,
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 40,
    textAlign: "center",
  },
  subtitle: {
    color: colors.navy,
    fontFamily: "InstrumentRegular",
    fontSize: 16,
    marginBottom: 20,
    marginTop: 8,
    textAlign: "center",
  },
  removeText: {
    color: "#B91C1C",
    fontFamily: "InstrumentRegular",
    fontWeight: "bold",
  },
  addButton: {
    alignItems: "center",
    borderColor: "#131381",
    borderRadius: 8,
    borderWidth: 2,
    marginTop: 22,
    padding: 14,
  },
  calculateButton: {
    alignItems: "center",
    backgroundColor: "#131381",
    borderRadius: 8,
    marginTop: 14,
    padding: 15,
  },
  resultBox: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "navy",
    borderWidth: 2,
    marginTop: 24,
    padding: 20,
  },
  resultLabel: {
    color: "#131381",
    fontFamily: "InstrumentRegular",
    fontSize: 18,
  },
  resultGrade: {
    color: "#131381",
    fontSize: 28,
    fontFamily: "InstrumentBold",
    marginTop: 8,
  },
  tableHeader: {
    flexDirection: "row",
    marginTop: 24,
    paddingBottom: 8,
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },
  headerText: {
    color: "#131381",
    fontFamily: "InstrumentSemiBold",
    
  },
  tableInput: {
    borderColor: "#131381",
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 15,
    padding: 10,
  },
  categoryColumn: {
    flex: 1.6,
  },
  gradeColumn: {
    flex: 1,
  },
  weightColumn: {
    flex: 1,
  },
  removeButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  tableArea: {
    flex: 1,
  },
  tableContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    width: "100%",
    maxWidth: 480,
  },
  footer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 12,
  },
  resultSlot: {
    minHeight: 70,
    width: "100%",
    justifyContent: "center",
  },
});

