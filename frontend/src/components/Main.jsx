import "../App.css";

import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Main = () => {
    return (
        <div className="mainAndInfo">
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
                            <Card.Img variant="top" src={require("../images/wikipedia.png")} />
                            <Card.Body>
                                <Card.Title>Википедия</Card.Title>
                                <Card.Text>
                                    Материал из Википедии — свободной энциклопедии.
                                </Card.Text>
                                <Button variant="primary" onClick={() => {window.open("https://ru.wikipedia.org/wiki/%D0%A2%D0%B8%D0%BF%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%D0%9C%D0%B0%D0%B9%D0%B5%D1%80%D1%81_%E2%80%94_%D0%91%D1%80%D0%B8%D0%B3%D0%B3%D1%81")}}>Посетить</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: "32.5%" }}>
                            <Card.Img variant="top" src={require("../images/isabel.jpg")} />
                            <Card.Body>
                                <Card.Title>Википедия</Card.Title>
                                <Card.Text>
                                    Биография Изабель Бриггс Майерс, автора теста.
                                </Card.Text>
                                <Button variant="primary" onClick={() => {window.open("https://ru.wikipedia.org/wiki/%D0%98%D0%B7%D0%B0%D0%B1%D0%B5%D0%BB%D1%8C_%D0%91%D1%80%D0%B8%D0%B3%D0%B3%D1%81_%D0%9C%D0%B0%D0%B9%D0%B5%D1%80%D1%81")}}>Посетить</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: "32.5%" }}>
                            <Card.Img variant="top" src={require("../images/foundation.jpg")} />
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
    );
}

export default Main;