import React, { useState } from "react";

const quizData = [
  {
    question: "Biến nào sau đây là hợp lệ trong JavaScript?",
    options: ["1variable", "_variable", "var-name", "var name2"],
    answer: "_variable",
  },
  {
    question:
      "Trong JavaScript, kiểu dữ liệu nào sau đây là kiểu dữ liệu nguyên thủy (primitive)?",
    options: ["object", "array", "string", "function"],
    answer: "string",
  },
  {
    question:
      "Thuật toán sắp xếp nào sau đây có độ phức tạp trung bình là O(n log n)?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Linear Sort"],
    answer: "Merge Sort",
  },
  {
    question: "Kết quả của `typeof null` trong JavaScript là gì?",
    options: ["'null'", "'undefined'", "'object'", "'number'"],
    answer: "'object'",
  },
  {
    question: "Bộ nhớ Stack dùng để làm gì?",
    options: [
      "Lưu trữ dữ liệu dạng hàng đợi",
      "Lưu trữ các lời gọi hàm (function calls)",
      "Lưu ảnh",
      "Lưu video",
    ],
    answer: "Lưu trữ các lời gọi hàm (function calls)",
  },
  {
    question: "Toán tử nào so sánh nghiêm ngặt giá trị và kiểu dữ liệu?",
    options: ["==", "===", "!=", "="],
    answer: "===",
  },
  {
    question: "JSON là viết tắt của gì?",
    options: [
      "Java Syntax Object Notation",
      "JavaScript Object Notation",
      "JavaScript Online Network",
      "Java Server Object Notation",
    ],
    answer: "JavaScript Object Notation",
  },
  {
    question:
      "Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Array", "Linked List"],
    answer: "Queue",
  },
  {
    question: "Câu lệnh nào in ra nội dung trong console trình duyệt?",
    options: ["print()", "console.log()", "echo()", "show()"],
    answer: "console.log()",
  },
  {
    question:
      "Khi bạn viết `let x;` trong JavaScript, giá trị ban đầu của x là gì?",
    options: ["null", "0", "undefined", "false"],
    answer: "undefined",
  },
  {
    question: "HTML là gì?",
    options: [
      "Ngôn ngữ lập trình để xử lý logic",
      "Ngôn ngữ đánh dấu để tạo cấu trúc website",
      "Framework của JavaScript",
      "Trình duyệt web",
    ],
    answer: "Ngôn ngữ đánh dấu để tạo cấu trúc website",
  },
  {
    question: "Trong thuật toán, Big O dùng để đo gì?",
    options: [
      "Tốc độ mạng",
      "Thời gian load ảnh",
      "Độ phức tạp của thuật toán",
      "Dung lượng RAM máy tính",
    ],
    answer: "Độ phức tạp của thuật toán",
  },
];

const Quiz = () => {
  // let optionSelected = "abc";

  // dùng useState()
  const [optionSelected, setOptionSelected] = useState("");
  // ==> useState return về 1 array có 2 phần tử là optionSelected và setOptionSelected, trong đó :
  // optionSelected là giá trị hiện tại cảu state và setOptionSelected là hàm callback để đổi giá trị state, cấu trúc này gọi là array destructuring(tức là phân rã array ra thành 2 biến riêng, cấu trúc này tương tự object destructuring).

  // save câu trả lời của người dùng
  const [userAnswers, setUserAnswers] = useState(
    Array.from({ length: quizData.length })
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleSelectedOption = (option, index) => { // code den 32:18
    // 1. nếu không dùng useState()

    // optionSelected = option;
    // console.log("optionSelected = " + optionSelected);

    // ==> mặc dù lúc này giá trị của optionSelected đã đổi thành nội dung của đáp án chứ không còn là giá trị abc
    // ==> lí do là react không tự cập nhật DOM khi bạn thay đổi giá trị của biến thường
    // ==> react chỉ cập nhật khi bạn cho nó biết là có trạng(state) thái thay đổi, nghĩa là state thay đổi
    // ==> CÓ THỂ HIỂU LÀ :
    // State là 1 biến đặc biệt trong react để thông báo về 1 TRẠNG THÁI của giao diện, khi state thay đổi thì react mới cập nhật UI,
    // còn khi 1 biến thường thay đổi thì react nó không quan tâm, mặc dù có đặc biến đó ở trong html thì react nó cũng sẽ bơ luôn.
    // => đây chính là lí do chúng cần state

    // 2. dùng useState()
    setOptionSelected(option);

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);
  };

  return (
    <div>
      <h2>Cau {currentQuestion + 1}</h2>
      <p className="question">{quizData[currentQuestion].question}</p>

      {quizData[currentQuestion].options.map((option) => (
        <button
          key={option}
          className="option"
          onClick={() => handleSelectedOption(option)}
        >
          {option}
        </button>
      ))}

      {optionSelected === quizData[currentQuestion].answer ? (
        <p className="correct-answer">Câu trả lời của bạn chính xác</p>
      ) : (
        <p className="incorrect-answer">Câu trả lời của bạn chưa chính xác</p>
      )}

      <div className="nav-buttons">
        <button>Quay Lại</button>
        <button>Kế Tiếp</button>
      </div>
    </div>
  );
};
export default Quiz;
