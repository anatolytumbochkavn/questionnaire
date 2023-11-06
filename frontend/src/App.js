import { useState, useEffect  } from "react";

import "./App.css";
import Question from "./Question";
import PersonalityDescription from "./PersonalityDescription";
import { SelectsContext } from "./Context";
import { personalities } from "./personalities";
import { questions } from "./questions";

import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const App = () => {
  const [mainAndInfoHidden, setMainAndInfoHidden] = useState(false);
  const [testAndResultHidden, setTestAndResultHidden] = useState(true);
  const [aboutUsHidden, setAboutUsHidden] = useState(true);

  const [startTestHidden, setStartTestHidden] = useState(false);
  const [questionsHidden, setQuestionsHidden] = useState({display: "none"});
  const [nextHidden, setNextHidden] = useState(true);
  const [testDescriptionHidden, setTestDescriptionHidden] = useState(false);
  const [resultHidden, setResultHidden] = useState(true);

  const [testMainText, setTestMainText] = useState("Узнайте, кто вы из 16 личностей!");
  const [nextText, setNextText] = useState("Далее");

  const [arr, setArr] = useState([]);
  const [selections, setSelections] = useState({});
  const [result, setResult] = useState();

  const setBlockVisible = (mainHidden, testHidden, aboutUsHidden) => {
    setMainAndInfoHidden(mainHidden);
    setTestAndResultHidden(testHidden);
    setAboutUsHidden(aboutUsHidden);
  }

  const mainClicked = () => {
    setBlockVisible(false, true, true);
  }

  const testClicked = () => {
    setBlockVisible(true, false, true);
  }

  const aboutUsClicked = () => {
    setBlockVisible(true, true, false);
  }

  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const startTestClicked = () => {
    setTestMainText("Прогресс: 0 из 94");
    setTestDescriptionHidden(true);
    setStartTestHidden(true);
    setQuestionsHidden({display: "block"});
    setNextHidden(false);
    nextClicked();
  }

  const points = {
    e: 0,
    i: 0,
    s: 0,
    n: 0,
    t: 0,
    f: 0,
    j: 0,
    p: 0
  }

  const nextClicked = () => {
    if (answeredQuestions != 94) {
      if (Object.keys(selections).length == answeredQuestions) {
        setArr([]);

        let supplement = 5;

        if (answeredQuestions == 90) {
          supplement = 4;
          setNextText("Завершить тестирование");
        }

        for (let i = answeredQuestions; i < answeredQuestions + supplement; i++) {
          if (questions[i][3] != undefined) {
            setArr(oldArr => [...oldArr, <Question questionTitle={`${questions[i][0]}:`} firstVariant={`${questions[i][1]};`} secondVariant={`${questions[i][2]};`} thirdVariant={`${questions[i][3]}.`} uniqueName={i + 1} key={i}></Question>]);
          } else {
            setArr(oldArr => [...oldArr, <Question questionTitle={`${questions[i][0]}:`} firstVariant={`${questions[i][1]};`} secondVariant={`${questions[i][2]}.`} uniqueName={i + 1} key={i}></Question>]);
          }
        }

        setAnsweredQuestions(answeredQuestions + supplement);
        setTestMainText("Прогресс: " + answeredQuestions + " из 94");

        console.log(selections);
      } else {
        alert("Вы ответили не на все вопросы!");
      }
    } else {
      const checkResults = (questionNumber, letter1, letter2, letter3, bonus1, bonus2, bonus3) => {
        if (selections[questionNumber] == 1) {
          points[letter1] += bonus1;
        } else if (selections[questionNumber] == 2) {
          points[letter2] += bonus2;
        } else {
          points[letter3] += bonus3;
        }
      }

      checkResults(1, "e", "i", null, 2, 2, null);
      checkResults(2, "s", "n", null, 2, 2, null);
      checkResults(3, "f", "t", null, 2, 1, null);
      checkResults(4, "j", "p", null, 2, 1, null);
      checkResults(5, "e", "i", null, 1, 2, null);
      checkResults(6, "n", "s", null, 2, 1, null);
      checkResults(7, "f", "t", null, 1, 2, null);
      checkResults(8, "j", "p", null, 2, 1, null);
      checkResults(9, "e", "i", null, 2, 2, null);
      checkResults(10, "s", "n", null, 2, 2, null);
      checkResults(11, "f", "t", null, 2, 2, null);
      checkResults(12, "p", "j", null, 1, 1, null);
      checkResults(13, "i", "e", null, 1, 2, null);
      checkResults(14, "s", "n", null, 1, 2, null);
      checkResults(15, "f", null, null, 2, null, null);
      checkResults(16, "j", "p", null, 2, 2, null);
      checkResults(17, "i", "e", null, 1, 2, null);
      checkResults(18, "n", "s", null, 1, 2, null);
      checkResults(19, "f", null, null, 2, null, null);
      checkResults(20, "j", "p", "p", 1, 1, 1);
      checkResults(21, "e", "i", null, 2, 2, null);
      checkResults(22, null, "s", null, null, 1, null);
      checkResults(23, "t", null, null, 1, null, null);
      checkResults(24, "p", null, "j", 1, null, 1);
      checkResults(25, "e", "i", null, 1, 1, null);
      checkResults(26, "s", "n", null, 1, 1, null);
      checkResults(27, null, "t", null, null, 2, null);
      checkResults(28, "j", "p", null, 1, 2, null);
      checkResults(29, "e", null, null, 1, null, null);
      checkResults(30, "s", null, null, 1, null, null);
      checkResults(31, "f", "t", null, 1, 2, null);
      checkResults(32, "j", "p", null, 1, 1, null);
      checkResults(33, "e", "i", null, 1, 1, null);
      checkResults(34, "n", "s", null, 2, 1, null);
      checkResults(35, "t", "f", null, 2, 1, null);
      checkResults(36, "p", "j", null, 1, 1, null);
      checkResults(37, "i", "e", null, 1, 2, null);
      checkResults(38, null, "s", null, null, 2, null);
      checkResults(39, "t", "f", null, 2, 1, null);
      checkResults(40, "p", "p", null, 1, 2, null);
      checkResults(41, null, "i", null, null, 2, null);
      checkResults(42, "s", null, null, 2, null, null);
      checkResults(43, "t", "f", null, 1, 2, null);
      checkResults(44, "p", "j", null, 1, 1, null);
      checkResults(45, "e", "i", null, 1, 2, null);
      checkResults(46, "s", "n", null, 2, 1, null);
      checkResults(47, "t", "f", null, 1, 2, null);
      checkResults(48, "p", "j", null, 1, 1, null);
      checkResults(49, null, "e", "i", null, 1, 2);
      checkResults(50, "s", "n", null, 2, 1, null);
      checkResults(51, "f", "t", null, 1, 2, null);
      checkResults(52, "j", "p", null, 2, 1, null);
      checkResults(53, "e", "i", null, 1, 1, null);
      checkResults(54, "n", "s", null, 2, 1, null);
      checkResults(55, "t", "f", null, 1, 1, null);
      checkResults(56, "p", null, null, 1, null, null);
      checkResults(57, "e", "i", null, 1, 2, null);
      checkResults(58, "s", "n", null, 1, 1, null);
      checkResults(59, "t", "f", null, 1, 2, null);
      checkResults(60, null, "p", "p", null, 1, 1);
      checkResults(61, "e", "i", null, 1, 2, null);
      checkResults(62, null, "s", null, null, 2, null);
      checkResults(63, "t", null, null, 2, null, null);
      checkResults(64, "j", null, null, 1, null, null);
      checkResults(65, "i", "e", null, 1, 2, null);
      checkResults(66, "s", null, null, 2, null, null);
      checkResults(67, null, "t", null, null, 2, null);
      checkResults(68, "j", "p", null, 2, 2, null);
      checkResults(69, "i", "e", null, 1, 1, null);
      checkResults(70, "s", null, null, 2, null, null);
      checkResults(71, null, "t", null, null, 2, null);
      checkResults(72, "j", "p", null, 2, 2, null);
      checkResults(73, null, "i", null, null, 1, null);
      checkResults(74, "s", "n", null, 1, 1, null);
      checkResults(75, null, "t", null, null, 2, null);
      checkResults(76, "j", "p", null, 2, 2, null);
      checkResults(77, "e", "i", null, 1, 1, null);
      checkResults(78, "s", "n", null, 1, 2, null);
      checkResults(79, null, "t", null, null, 1, null);
      checkResults(80, "p", "j", null, 2, 1, null);
      checkResults(81, "e", null, null, 1, null, null);
      checkResults(82, "s", "n", null, 2, 1, null);
      checkResults(83, "f", "t", null, 1, 1, null);
      checkResults(84, "j", "p", null, 1, 1, null);
      checkResults(85, "n", null, null, 2, null, null);
      checkResults(86, "t", null, null, 2, null, null);
      checkResults(87, null, "j", null, null, 1, null);
      checkResults(88, "n", null, null, 2, null, null);
      checkResults(89, "f", null, null, 1, null, null);
      checkResults(90, "j", "p", null, 2, 1, null);
      checkResults(91, "s", null, null, 1, null, null);
      checkResults(92, "p", null, null, 1, null, null);
      checkResults(93, "s", null, null, 1, null, null);
      checkResults(94, "s", "n", null, 1, 1, null);

      alert("Вы прошли опрос!");

      setQuestionsHidden({display: "none"});
      setResultHidden(false);
      setTestMainText("Результаты");

      console.log(points);

      const getPersonality = (letter1, letter2) => {
        if (points[letter1] > points[letter2]) {
          return letter1;
        } else if (points[letter1] < points[letter2]) {
          return letter2;
        } else {
          return letter1;
        }
      }

      setResult(<PersonalityDescription personality={personalities[getPersonality("e", "i") + getPersonality("s", "n") + getPersonality("t", "f") + getPersonality("j", "p")]}></PersonalityDescription>);
    }
  }

  return (
    <div>
      <div className="navigation">
        <div className="navigationCenter">
          <img src={require("./images/rst.png")} style={{width: "3%"}} />
          <h2 id="navButton" onClick={mainClicked}>Главная</h2>
          <h2 id="navButton" onClick={testClicked}>РШТ</h2>
          <h2 id="navButton" onClick={testClicked}>Пройти тест</h2>
          <h2 id="navButton" onClick={aboutUsClicked}>О нас</h2>
        </div>
      </div>
      <div className="mainAndInfo" hidden={mainAndInfoHidden}>
        <div className="main">
          <h2 className="logoText">Онлайн-тест на тип личности<br />по Майерс-Бриггс</h2>
          <h2 className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
        <div className="testInformation">
          <h2>Всю информацию вы можете найти здесь</h2>
          <div className="faq">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Что такое тест на тип личности по Майерс-Бриггс (MBTI)?</Accordion.Header>
                <Accordion.Body>
                Суть системы психологического тестирования MBTI заключается в том, что, благодаря измерению уникальных 
                комбинаций личностных факторов человека, можно предугадать его склонность к определённому виду деятельности, 
                стиль его действий, характер решений и прочие особенности, позволяющие ему чувствовать себя комфортно и 
                уверенно. Для чего и были придуманы 4 шкалы (дескриптора), по которым исследуется личность:<br />
                — ориентация сознания (интроверсия — экстраверсия);<br />
                — ориентация в ситуации (здравый смысл — интуиция);<br />
                — основа принятия решений (логос — пафос);<br />
                — способ подготовки решений (рациональность — иррациональность).
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Какое количество вопросов в тесте? Насколько долго его проходить?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Сколько существует типов личностей в рамках этого теста?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>По каким критериям оценивается личность?</Accordion.Header>
                <Accordion.Body>
                Тест включает в себя 8 шкал, объединённых попарно. Назначение типологии и тестов — помочь человеку в определении его индивидуальных предпочтений, установив, какие полюса шкал ему более соответствуют.<br />
                1. Шкала E—I — ориентация сознания: Е (<i>extraversion</i>, экстраверсия) — ориентация сознания наружу, на объекты, I (Introversion, интроверсия) — ориентация сознания внутрь, на субъекта.<br />
                2. Шкала S—N — способ ориентировки в ситуации: S (<i>sensing</i>, ощущение) — ориентировка на материальную информацию, N (iNtuition, интуиция) — ориентировка на интуитивную информацию.<br />
                3. Шкала T—F — основа принятия решений: T (<i>thinking</i>, мышление) — логическое взвешивание альтернатив, F (Feeling, чувство) — принятие решений на эмоциональной основе этики.<br />
                4. Шкала J—P — способ подготовки решений: J (<i>judging</i>, суждение) — рациональное предпочтение планировать и заранее упорядочивать информацию, P (Perception, восприятие) — иррациональное предпочтение действовать без детальной предварительной подготовки, больше ориентируясь по обстоятельствам.<br />
                Сочетание шкал даёт обозначение одного из 16 типов, например: ENTP, ISFJ и т. д.<br />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h2 className="cardsText">Остались вопросы? Узнайте о тесте больше на других интернет-ресурсах</h2>
            <div className="cards">
              <Card style={{ width: "32.5%" }}>
                <Card.Img variant="top" src={require("./images/wikipedia.png")} />
                <Card.Body>
                  <Card.Title>Википедия</Card.Title>
                  <Card.Text>
                    Материал из Википедии — свободной энциклопедии.
                  </Card.Text>
                  <Button variant="primary" onClick={() => {window.open("https://ru.wikipedia.org/wiki/%D0%A2%D0%B8%D0%BF%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%D0%9C%D0%B0%D0%B9%D0%B5%D1%80%D1%81_%E2%80%94_%D0%91%D1%80%D0%B8%D0%B3%D0%B3%D1%81")}}>Посетить</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "32.5%" }}>
                <Card.Img variant="top" src={require("./images/isabel.jpg")} />
                <Card.Body>
                  <Card.Title>Википедия</Card.Title>
                  <Card.Text>
                    Биография Изабель Бриггс Майерс, автора теста.
                  </Card.Text>
                  <Button variant="primary" onClick={() => {window.open("https://ru.wikipedia.org/wiki/%D0%98%D0%B7%D0%B0%D0%B1%D0%B5%D0%BB%D1%8C_%D0%91%D1%80%D0%B8%D0%B3%D0%B3%D1%81_%D0%9C%D0%B0%D0%B9%D0%B5%D1%80%D1%81")}}>Посетить</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "32.5%" }}>
                <Card.Img variant="top" src={require("./images/foundation.jpg")} />
                <Card.Body>
                  <Card.Title>Myers & Briggs Found.</Card.Title>
                  <Card.Text>
                    Ещё больше информации о тесте Майерс-Бриггс.
                  </Card.Text>
                  <Button variant="primary" onClick={() => {window.open("https://www.myersbriggs.org/")}}>Посетить</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="testAndResult" hidden={testAndResultHidden}>
        <div className="test">
          <div className="test" id="template" style={{paddingTop: "4%"}}>
            <h2 id="mainTemplate" className="testMain">{testMainText}</h2>
            <h2 id="descriptionTemplate" hidden={testDescriptionHidden}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            <div className="moveStartTest" hidden={startTestHidden}>
              <button className="startTest" onClick={startTestClicked}>Начать тестирование</button>
            </div>
          </div>
        </div>
        <div id="template" style={{paddingTop: "1%"}}>
          <SelectsContext.Provider value={{selections, setSelections}}>
            <div className="box" id="questionsBox" style={questionsHidden}>{arr}</div>
          </SelectsContext.Provider>
        </div>
        <div className="testResult" hidden={resultHidden}>{result}</div>
        <div className="moveNextButton">
          <button className="nextButton" hidden={nextHidden} onClick={nextClicked}>{nextText}</button>
        </div>
      </div>
      <div className="aboutUs">
        <div id="template" style={{paddingTop: "4%"}} hidden={aboutUsHidden}>
          <h2 id="mainTemplate">Здравствуйте, давайте знакомиться!</h2>
          <h2 className="aboutUsDescription" id="descriptionTemplate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
