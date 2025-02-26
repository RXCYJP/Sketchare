"use client";
import soal from "@/data/soal";
import { updateData, updateSiswa } from "@/lib/firebase/service";
import siswaService from "@/services/siswa/service";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

interface Question {
  question: string;
  options: string[];
  answer: string; // Correct answer (e.g., "A", "B", "C", "D")
}

const questions: Question[] = soal;
const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>(
    Array(questions.length).fill("") // Initialize with empty answers
  );
  const [isFinished, setIsFinished] = useState(false);
  const session: any = useSession();

  const { push } = useRouter();
  const handleAnswer = (answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const navigateQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const calculateScore = () => {
    const correctAnswers = userAnswers.filter(
      (answer, index) => answer === questions[index].answer
    ).length;
    return (correctAnswers / questions.length) * 100; // Convert to scale of 100
  };

  const isAnswered = (index: number) => userAnswers[index] !== "";

  const handleFinish = async () => {
    setIsFinished(true);
    const score = calculateScore();
    // Update user score in Firebase

    if (session.status === "authenticated") {
      try {
        const data: any = { score };
        await updateSiswa("user", data, session.data.user.id).then((res) => {
          console.log(res);
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Update skor gagal",
        });
      }
    }
  };

  console.log(session);
  const currentQuestion = questions[currentQuestionIndex];
  if (session.status === "loading") {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Quiz Pilihan Ganda</h1>
        <h2 className="text-lg font-semibold mb-4">Loading...</h2>
      </div>
    );
  }
  if (session.status === "unauthenticated") {
    push("/login");
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Quiz Pilihan Ganda</h1>
        <h2 className="text-lg font-semibold mb-4">
          Silahkan <Link href="/login">Login</Link> Terlebih Dahulu
        </h2>
      </div>
    );
  } else if (session.status === "authenticated") {
    return (
      <div className="max-w-lg mx-auto p-6 font-sans text-center">
        <h1 className="text-2xl font-bold mb-6">Quiz Pilihan Ganda</h1>
        <div>
          {/* Soal */}
          {!isFinished ? (
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">
                {currentQuestion.question}
              </h2>
              <div className="flex flex-col gap-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option[0])}
                    className={`p-3 border rounded-lg text-left ${
                      userAnswers[currentQuestionIndex] === option[0]
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-6 p-4 bg-green-100 border border-green-500 rounded-lg">
              <h3 className="text-xl font-bold">
                Skor Anda: {calculateScore().toFixed(2)} / 100
              </h3>
              <button onClick={() => {}}>Kembali</button>
            </div>
          )}
        </div>
        <div>
          {/* Tombol Navigasi */}
          {!isFinished && (
            <div className="flex justify-between mt-4">
              <button
                onClick={() =>
                  setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
                }
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2 rounded-lg ${
                  currentQuestionIndex === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Sebelumnya
              </button>
              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={() =>
                    setCurrentQuestionIndex((prev) =>
                      Math.min(prev + 1, questions.length - 1)
                    )
                  }
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                >
                  Selanjutnya
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                >
                  Selesai
                </button>
              )}
            </div>
          )}
        </div>

        <div className="mt-6 ">
          {/* Navigasi Soal */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateQuestion(index)}
                className={`w-10 h-10 rounded-md text-sm font-bold ${
                  index === currentQuestionIndex
                    ? "bg-yellow-500 text-white"
                    : isAnswered(index)
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default QuizPage;
