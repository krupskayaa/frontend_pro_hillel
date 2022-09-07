import "./style.scss";

const SelectOption = (props) => {
    return (
        <div className="select">
            <span className="select__label">{props.spanTxt}</span>
            <select className="select__opt">
                <option>{props.optTxt}</option>
            </select>
        </div>
    )
}

export default SelectOption;