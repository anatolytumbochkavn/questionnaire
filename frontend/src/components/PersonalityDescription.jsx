import "../App.css";

const PersonalityDescription = props => {
    const createList = array => {
        const list = [];

        for (let i = 0; i < array.length; i++) {
            if (i == array.length - 1) {
                list.push(<h2 className="boxText">— {array[i]}.</h2>);
            } else {
                list.push(<h2 className="boxText">— {array[i]};</h2>);
            }
        }

        return list;
    }

    return (
        <div style={{whiteSpace: "pre-wrap"}}>
            <div className="descriptionBox">
                <h2 className="boxTitle">Итак, Вы — {props.personality.title}</h2>
                <h2 className="boxText">Расшифровывается как «{props.personality.characteristics}».</h2>
                <br />
                <h2 className="boxText">Девиз: «{props.personality.motto}».</h2>
                <br />
                <h2 className="boxText">Доминирующая функция: {props.personality.dominantFunction}. Вспомогательная функция: {props.personality.supportingFunction}.</h2>
                <br />
                <h2 className="boxText">{props.personality.afterfuncDescription}</h2>
            </div>
            <div className="descriptionBox">
                <h2 className="boxTitle">{props.personality.temperamentLetters}-темперамент</h2>
                <h2 className="boxText">{props.personality.temperament}</h2>
                <br />
                <h2 className="boxMiniTitle">Сильные стороны темперамента {props.personality.temperamentLetters}:</h2>
                <div>{createList(props.personality.temperamentPros)}</div>
            </div>
            <div className="descriptionBox">
                <h2 className="boxTitle">{props.personality.title}</h2>
                <h2 className="boxText">{props.personality.afterstrengthDescription}</h2>
            </div>
            <div className="descriptionBox">
                <h2 className="boxTitle">Руководители типа {props.personality.managersType} ({props.personality.managersSubtype[0]}, {props.personality.managersSubtype[1]}, {props.personality.managersSubtype[2]} и {props.personality.managersSubtype[3]})</h2>
                <h2 className="boxMiniTitle">Основные преимущества:</h2>
                <div>{createList(props.personality.managersPros)}</div>
                <br />
                <h2 className="boxMiniTitle">Основные претензии подчиненных:</h2>
                <div>{createList(props.personality.managersCons)}</div>
                <br />
                <h2 className="boxMiniTitle">Как строить взаимоотношения с руководителями {props.personality.managersType}-типа:</h2>
                <div>{createList(props.personality.relationsWithType)}</div>
                <br />
                <h2 className="boxText">{props.personality.threeWords[0]}, {props.personality.threeWords[1]}, {props.personality.threeWords[2]} — вот как можно емко и точно описать эту личность.</h2>
            </div>
            <div className="descriptionBox">
                <h2 className="boxTitle">Описание типа по ключевым словам</h2>
                <h2 className="boxText">{props.personality.typeDescription}</h2>
            </div>
            <div className="descriptionBox">
                <h2 className="boxTitle">Восприятие мира</h2>
                <h2 className="boxText">{props.personality.worldPerception}</h2>
            </div>
        </div>
    );
}

export default PersonalityDescription;