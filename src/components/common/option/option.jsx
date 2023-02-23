import React from "react";

const Option = (props) => {
const {value, text} = props


return (
    <option value={value}>{text} </option>
)
}

export default Option