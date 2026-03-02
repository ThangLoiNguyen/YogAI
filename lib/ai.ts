export type AiCurriculumRequest = {
  topic: string;
  level: string;
  durationMin: number;
  studentHealthNotes?: string;
};

export type AiInsightRequest = {
  studentId: string;
};

// Các hàm này hiện chỉ mock dữ liệu.
// Sau này có thể nối với OpenAI / Anthropic và dùng streaming.

export async function generateCurriculumFromAI(
  input: AiCurriculumRequest,
): Promise<{ outline: string; warningNotes?: string }> {
  return {
    outline: `Giáo án demo cho chủ đề "${input.topic}" (${input.level}, ${input.durationMin} phút).`,
    warningNotes: input.studentHealthNotes
      ? "Lưu ý: có health notes, cần tránh tư thế gây áp lực mạnh lên vùng đang nhạy cảm."
      : undefined,
  };
}

export async function getStudentInsightFromAI(
  _input: AiInsightRequest,
): Promise<{ summary: string; nextSteps: string[] }> {
  return {
    summary:
      "Học viên đang dần ổn định về tần suất tập luyện, nhưng vẫn có dấu hiệu căng cứng vùng lưng dưới vào cuối ngày.",
    nextSteps: [
      "Thêm 1 block restorative 10 phút vào cuối 2 buổi trong tuần.",
      "Khuyến khích học viên thực hiện 3 tư thế yin nhẹ mỗi tối trước khi ngủ.",
    ],
  };
}

