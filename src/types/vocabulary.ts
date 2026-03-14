export interface Word {
  id: string;
  word: string;
  phonetic: string;
  definition: string;
  example: string;
  category: string; // Ví dụ: Oxford 3000, IELTS, TOEIC
  status: "new" | "learning" | "mastered"; // Trạng thái học tập
}
