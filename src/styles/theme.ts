import { StyleSheet } from "react-native";

export const colors = {
  beige: "#F6F6E6",
  navy: "#131381",
  white: "#FFFFFF",
  gray: "#808080",
  black: "#000000",
  cornBlue: "#6495ED"
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  bigText: {
    fontFamily: "InstrumentSemiBold",
    color: '#131381',
    fontSize: 50,
    fontWeight: "bold",
    textAlign: 'center',
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
  title: {
    color: "#131381",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 40,
    textAlign: "center",
  },
  subtitle: {
    color: "#131381",
    fontSize: 16,
    marginBottom: 20,
    marginTop: 8,
    textAlign: "center",
  },
  categoryBox: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 16,
    padding: 16,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryTitle: {
    color: "#131381",
    fontSize: 19,
    fontWeight: "bold",
  },
  removeText: {
    color: "#B91C1C",
    fontWeight: "bold",
  },
  input: {
    borderColor: "#131381",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    marginTop: 10,
    padding: 12,
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
    marginTop: 24,
    padding: 20,
  },
  resultLabel: {
    color: "#131381",
    fontSize: 18,
  },
  resultGrade: {
    color: "#131381",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8,
  },
  });
