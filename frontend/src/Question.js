import { useContext } from "react";
import "./App.css";
import { SelectsContext } from "./Context";

const Question = props => {
    const {selections, setSelections} = useContext(SelectsContext);

    const firstVariantSelected = () => {
        setSelections({...selections, [props.uniqueName]: 1});
    }

    const secondVariantSelected = () => {
        setSelections({...selections, [props.uniqueName]: 2});
    }

    const thirdVariantSelected = () => {
        setSelections({...selections, [props.uniqueName]: 3});
    }

    let result;

    if (props.thirdVariant != undefined) {
        result = (
            <div className="questions">
                <h2 class="questionTitle">{props.uniqueName}. {props.questionTitle}</h2>
                <form>
                    <label>
                        <input type="radio" id={"firstVariant" + String(props.uniqueName)} name={props.uniqueName} onChange={firstVariantSelected} />
                        <span className="questionSpan">{props.firstVariant}</span>
                    </label>
                    <label>
                        <input type="radio" id={"secondVariant" + String(props.uniqueName)} name={props.uniqueName} onChange={secondVariantSelected} />
                        <span className="questionSpan">{props.secondVariant}</span>
                    </label>
                    <label>
                        <input type="radio" id={"thirdVariant" + String(props.uniqueName)} name={props.uniqueName} onChange={thirdVariantSelected} />
                        <span className="questionSpan">{props.thirdVariant}</span>
                    </label>
                </form>
            </div>
        );
    } else {
        result = (
            <div className="questions">
                <h2 class="questionTitle">{props.uniqueName}. {props.questionTitle}</h2>
                <form>
                    <label>
                        <input type="radio" id={"firstVariant" + String(props.uniqueName)} name={props.uniqueName} onChange={firstVariantSelected} />
                        <span className="questionSpan">{props.firstVariant}</span>
                    </label>
                    <label>
                        <input type="radio" id={"secondVariant" + String(props.uniqueName)} name={props.uniqueName} onChange={secondVariantSelected} />
                        <span className="questionSpan">{props.secondVariant}</span>
                    </label>
                </form>
            </div>
        );
    }

    return result;
}

export default Question;