import React, { useState } from "react";

export default function CreateNewMenu(props) {

    const [value, setValue] = useState('');
    const options = props.jsonData.map((text) => {
        text.map(()=>{
            
        })
        return <option key={index}>{text.title}</option>;
     });

    //  const options = props.jsonData.map((text, index) => {
    // return <option key={index}>{text.title}</option>;


    return (
        <div className="white-color">
            <h1>Create New Menus</h1>
            <form>
                <div className="menuSelect">
                    <select value={value} onChange={(event) => setValue(event.target.value)}>
                      {options}
                      <p>
                        Выбрана опция: {value}
                    </p>
                    </select>
                </div>
                <div>
                    <div></div>
                    {/* {title}{branch}
                    {date}{name} */}
                </div>
            </form>
        </div>
    )
}