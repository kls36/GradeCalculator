export type GradeCategory = {
    id: string;
    name: string;
    grade: string;
    weight: string;
  };
  
  export function calculateWeightedGrade(categories: GradeCategory[]) {
    return categories.reduce((total, category) => {
      return total + Number(category.grade) * (Number(category.weight) / 100);
    }, 0);
  }
  
  export function getLetterGrade(grade: number) {
    if (grade >= 90) return "A";
    if (grade >= 80) return "B";
    if (grade >= 70) return "C";
    if (grade >= 60) return "D";
    return "F";
  }