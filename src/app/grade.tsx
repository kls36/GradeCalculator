import { Pressable, ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { styles } from "../styles/theme";
import { Link } from "expo-router";
import {calculateWeightedGrade, getLetterGrade, GradeCategory, getTotalWeight} from "../utils/gradeCalc";


const initialCategories: GradeCategory[] = [
  { id: "1", name: "Homework", grade: "", weight: "30" },
  { id: "2", name: "Quizzes", grade: "", weight: "20" },
  { id: "3", name: "Exams", grade: "", weight: "50" },
];


export default function Grade() {
  const [categories, setCategories] = useState<GradeCategory[]>(
    initialCategories.map((category) => ({ ...category }))
  );

  const [finalGrade, setFinalGrade] = useState<number | null>(null);

  function updateCategory(
    id: string,
    field: "name" | "grade" | "weight",
    value: string
  ) {
    setCategories(
      categories.map((category) =>
        category.id === id ? { ...category, [field]: value } : category
      )
    );
  }

  function addCategory() {
    setCategories([ ...categories,
      {
        id: Date.now().toString(),
        name: "",
        grade: "",
        weight: "",
      },
    ]);
  }

  function removeCategory(id: string) {
    setCategories(categories.filter((category) => category.id !== id));
  }

  function resetCalculator() {
    setCategories(initialCategories.map((category) => ({ ...category })));
    setFinalGrade(null);
    setWeightError("");
  }
  
  const [weightError, setWeightError] = useState("");

function calculateGrade() {
  const totalWeight = getTotalWeight(categories);

  if (Math.abs(totalWeight - 100) > 0.01) {
    setWeightError(
      `Check your category weights, they add up to ${totalWeight}%  but they should equal 100%.`
    );
    setFinalGrade(null);
    return;
  }

  setWeightError("");
  setFinalGrade(calculateWeightedGrade(categories));
}

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <Text style={styles.title}>Grade Calculator</Text>
        <Text style={styles.subtitle}>
          Calculate your final grade by entering your grade average and weight for each category
        </Text>
  
        <ScrollView
          style={styles.tableArea}
          contentContainerStyle={styles.tableContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerText, styles.categoryColumn]}>
                Category
              </Text>
              <Text style={[styles.headerText, styles.gradeColumn]}>
                Grade
              </Text>
              <Text style={[styles.headerText, styles.weightColumn]}>
                Weight
              </Text>
              
            </View>
  
            {categories.map((category) => (
              <View key={category.id} style={styles.tableRow}>
                <TextInput
                  style={[styles.tableInput, styles.categoryColumn]}
                  placeholder="Homework"
                  value={category.name}
                  onChangeText={(value) =>
                    updateCategory(category.id, "name", value)
                  }
                />
  
                <TextInput
                  style={[styles.tableInput, styles.gradeColumn]}
                  placeholder="92"
                  value={category.grade}
                  onChangeText={(value) =>
                    updateCategory(category.id, "grade", value)
                  }
                  keyboardType="decimal-pad"
                />
  
                <TextInput
                  style={[styles.tableInput, styles.weightColumn]}
                  placeholder="25"
                  value={category.weight}
                  onChangeText={(value) =>
                    updateCategory(category.id, "weight", value)
                  }
                  keyboardType="decimal-pad"
                />
                <Pressable style={styles.removeButton}
                  onPress={() => removeCategory(category.id)} >
                  <Text style={styles.removeText}>×</Text>
                </Pressable>
              </View>
            ))}
          </View>
          <Pressable style={styles.addButton} onPress={addCategory}>
            <Text style={styles.buttonText2}>+ Add Category</Text>
          </Pressable>
        </ScrollView>
  
        <View style={styles.footer}>
        <Pressable style={styles.button} onPress={resetCalculator}>
            <Text style={styles.buttonText}>Reset Calculator</Text>
        </Pressable>
          <Pressable style={styles.calculateButton} onPress={calculateGrade}>
            <Text style={styles.buttonText}>Calculate Final Grade</Text>
          </Pressable>
          {weightError !== "" && (
            <View style={styles.resultBox}>
              <Text style={styles.resultLabel}>{weightError}</Text>
            </View>
          )}
          <View style={styles.resultSlot}>
            {finalGrade !== null && (
              <View style={styles.resultBox}>
                <Text style={styles.resultLabel}>Your current grade</Text>
                <Text style={styles.resultGrade}>
                  {finalGrade.toFixed(2)}% — {getLetterGrade(finalGrade)}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}