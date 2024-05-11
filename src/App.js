import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Сколько есть типов данных в JavaScript?',
    variants: [
      5,
      10,
      8,
      6
    ],
    correct: 3,
  },
  {
    title: 'Разница между == и ===',
    variants: [
      '==  - этот оператор сравнивает длинну строк, а === сравнивает длину чисел',
      'Оператор == выполняет нестрогое сравнение, сравнивая значения с приведением типов, если это необходимо, а оператор === выполняет строгое сравнение, сравнивая значения без приведения типов',
      'Это операторы сравнения ',
    ],
    correct: 1,
  },
  {
    title: 'Что такое Promise, и какие бывают состояния',
    variants: [
      'Это обещание, которое никогда не выполняют',
      'Promise - это объект в JavaScript, который представляет результат синхронной операции. Состояния: 1.Fall in love.2.Dead inside.3.Broke heart ',
      'Promise - это объект в JavaScript, который представляет результат асинхронной операции. Состояния: `1.Pending.2.Fullfield.3.Rejected',
      'Я не знаю'
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({question, onClickVariant, step}) {
  const percentage =Math.round( step / questions.length * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setConrrect] = useState(0)
  const question =  questions[step];

const onClickVariant = (index) => {
  setStep(step +1);

  if(index === question.correct) { 
    setConrrect(correct+1);
  }
}

  return (
    <div className="App">
     {
      step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} />:<Result correct={correct} />
     }
    </div>
  );
}

export default App;
