import React, { useState } from "react";
import "./styles.css";
import Question from "./components/Question";
import Result from "./components/Result";
import HomePage from "./components/HomePage";

const questions = [
  {
    question: "Какая планета ближе всего к Солнцу?",
    options: ["Земля", "Меркурий", "Марс", "Юпитер"],
    correctAnswer: "Меркурий",
    difficulty: "easy",
  },
  {
    question: "Какой океан самый большой?",
    options: ["Атлантический", "Тихий", "Индийский", "Южный"],
    correctAnswer: "Тихий",
    difficulty: "easy",
  },
  {
    question: "Какой элемент в периодической таблице имеет символ 'O'?",
    options: ["Кислород", "Азот", "Углерод", "Водород"],
    correctAnswer: "Кислород",
    difficulty: "easy",
  },
  {
    question: "Какая самая большая страна по территории?",
    options: ["США", "Канада", "Россия", "Китай"],
    correctAnswer: "Россия",
    difficulty: "easy",
  },
  {
    question: "Какая из этих книг написана Джоан Роулинг?",
    options: ["Гарри Поттер и философский камень", "Властелин колец", "Хоббит", "Код да Винчи"],
    correctAnswer: "Гарри Поттер и философский камень",
    difficulty: "easy",
  },
  {
    question: "Какой праздник отмечается 1 января?",
    options: ["День независимости", "Рождество", "Новый год", "День труда"],
    correctAnswer: "Новый год",
    difficulty: "easy",
  },
  {
    question: "Какая самая высокая гора в мире?",
    options: ["Эверест", "Килиманджаро", "Фудзияма", "Джомолунгма"],
    correctAnswer: "Эверест",
    difficulty: "easy",
  },
  {
    question: "Какой город является столицей Франции?",
    options: ["Берлин", "Рим", "Париж", "Лондон"],
    correctAnswer: "Париж",
    difficulty: "easy",
  },
  {
    question: "Какая птица не умеет летать?",
    options: ["Пингвин", "Сова", "Орёл", "Гусь"],
    correctAnswer: "Пингвин",
    difficulty: "easy",
  },
  {
    question: "Кто является автором картины 'Мона Лиза'?",
    options: ["Микеланджело", "Леонардо да Винчи", "Пикассо", "Ван Гог"],
    correctAnswer: "Леонардо да Винчи",
    difficulty: "easy",
  },
  {
    question: "Какая страна первой отправила человека в космос?",
    options: ["США", "Россия", "Китай", "Индия"],
    correctAnswer: "Россия",
    difficulty: "medium",
  },
  {
    question: "Какой газ составляет основную часть атмосферы Земли?",
    options: ["Кислород", "Азот", "Углекислый газ", "Водород"],
    correctAnswer: "Азот",
    difficulty: "medium",
  },
  {
    question: "В каком году был основан Google?",
    options: ["1995", "1996", "1998", "2000"],
    correctAnswer: "1998",
    difficulty: "medium",
  },
  {
    question: "Какой химический элемент имеет атомный номер 1?",
    options: ["Водород", "Гелий", "Углерод", "Кислород"],
    correctAnswer: "Водород",
    difficulty: "medium",
  },
  {
    question: "Что из этого является первым элементом в таблице Менделеева?",
    options: ["Водород", "Гелий", "Литий", "Бериллий"],
    correctAnswer: "Водород",
    difficulty: "medium",
  },
  {
    question: "Как называется процесс преобразования воды в пар?",
    options: ["Конденсация", "Испарение", "Замерзание", "Сублимация"],
    correctAnswer: "Испарение",
    difficulty: "medium",
  },
  {
    question: "Какая река является самой длинной в мире?",
    options: ["Амазонка", "Нил", "Миссисипи", "Янцзы"],
    correctAnswer: "Нил",
    difficulty: "medium",
  },
  {
    question: "Какой фильм стал первым в истории, собравшим более $2 миллиардов?",
    options: ["Титаник", "Аватар", "Мстители: Война бесконечности", "Звёздные войны"],
    correctAnswer: "Аватар",
    difficulty: "medium",
  },
  {
    question: "Какой вид спорта является самым популярным в мире?",
    options: ["Футбол", "Теннис", "Баскетбол", "Хоккей"],
    correctAnswer: "Футбол",
    difficulty: "medium",
  },
  {
    question: "Какой океан омывает побережье Австралии?",
    options: ["Атлантический", "Тихий", "Индийский", "Южный"],
    correctAnswer: "Тихий",
    difficulty: "medium",
  },
  {
    question: "Какая из этих стран не является членом ООН?",
    options: ["Косово", "Южная Корея", "Франция", "Австралия"],
    correctAnswer: "Косово",
    difficulty: "hard",
  },
  {
    question: "Какое вещество является основным строительным элементом клеток?",
    options: ["Жиры", "Белки", "Углеводы", "Вода"],
    correctAnswer: "Белки",
    difficulty: "hard",
  },
  {
    question: "Кто был первым человеком на Луне?",
    options: ["Нил Армстронг", "Юрий Гагарин", "Эдвин Олдрин", "Чак Йегер"],
    correctAnswer: "Нил Армстронг",
    difficulty: "hard",
  },
  {
    question: "Что из этого является первобытным звуком в английском языке?",
    options: ["А", "Э", "И", "О"],
    correctAnswer: "А",
    difficulty: "hard",
  },
  {
    question: "В каком году была подписана Декларация независимости США?",
    options: ["1776", "1781", "1800", "1791"],
    correctAnswer: "1776",
    difficulty: "hard",
  },
  {
    question: "Какая страна самая густонаселенная в мире?",
    options: ["Индия", "Китай", "Нигерия", "США"],
    correctAnswer: "Китай",
    difficulty: "hard",
  },
  {
    question: "Какой элемент был первым открытым радиоактивным элементом?",
    options: ["Радий", "Уран", "Плутоний", "Торий"],
    correctAnswer: "Радий",
    difficulty: "hard",
  },
  {
    question: "Какая часть тела человека может вырабатывать собственный антибиотик?",
    options: ["Кожа", "Печень", "Желудок", "Нос"],
    correctAnswer: "Кожа",
    difficulty: "hard",
  },
  {
    question: "Какая из этих теорий относится к описанию происхождения Вселенной?",
    options: ["Теория струн", "Теория большого взрыва", "Теория хаоса", "Теория относительности"],
    correctAnswer: "Теория большого взрыва",
    difficulty: "hard",
  },
  {
    question: "Какой элемент в таблице Менделеева был открыт последним?",
    options: ["Оганесон", "Ливерморий", "Теннесин", "Флеровий"],
    correctAnswer: "Оганесон",
    difficulty: "hard",
  },
      

];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showHomePage, setShowHomePage] = useState(true);
  const [timeLeft, setTimeLeft] = useState(60);
  const [intervalId, setIntervalId] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");

  const startQuiz = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setShowHomePage(false);

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerId);
          setShowResult(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setIntervalId(timerId);
  };

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestionIndex + 1 < filteredQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      clearInterval(intervalId);
      setShowResult(true);
    }
  };

  const filteredQuestions = questions.filter(
    (q) => q.difficulty === difficulty
  );

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">BrainStorm</h1>
      {showHomePage ? (
        <HomePage startQuiz={startQuiz} />
      ) : (
        <>
          <p>Оставшееся время: {timeLeft} секунд</p>
          {showResult ? (
            <Result questions={filteredQuestions} userAnswers={userAnswers} />
          ) : (
            <Question
              question={filteredQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
          )}
        </>
      )}
    
    </div>
  );
  
}

export default App;
