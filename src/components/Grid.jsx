import React, { useState } from 'react'

const Grid = (props) => {
    const [color, setColor] = useState("white")

    const count = props.row * props.col
    let items = []
    let col = ""

    //choose color
    const choose = (e) => {
        setColor(e.target.value)
    }
    //fill single cell
    const fillOne = (e) => {
        e.target.style.background = color
    }
    //fill all empty
    const fillUncolored = () => {
        document.querySelectorAll(".grid-item").forEach(item => {
            if (item.style.background === "white") {
                item.style.background = color
            }
        })
    }
    //fill all
    const fillAll = () => {
        if (color !== "white") {
            document.querySelectorAll(".grid-item").forEach(item => {
                item.style.background = color
            })
        }
    }
    //clear all
    const clearAll = () => {
        document.querySelectorAll(".grid-item").forEach(item => {
            item.style.background = "white"
        })
    }
    //click on cell
    const mouseDown = (e) => {
        fillOne(e)
        document.querySelectorAll(".grid-item").forEach(item => {
            item.addEventListener("mouseover", fillOne)
        })
    }

    document.addEventListener("mouseup", () => {
        document.querySelectorAll(".grid-item").forEach(item => {
            item.removeEventListener("mouseover", fillOne)
        });
    });

    for (let i = 0; i < count; i++) {
        items.push(<div className="grid-item" onClick={fillOne} onMouseDown={mouseDown} style={{background: "white"}} key={i}></div>)
    }

    for (let i = 0; i < props.col; i++) {
        col += "auto "
    }
    //select color
    return (
        <div>
            <select id="color" onChange={choose} name="color">
                <option value="White">-Select Color-</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Pink">Pink</option>
            </select>
            
            <button onClick={fillUncolored}>Fill Uncolored</button> 
            <button onClick={fillAll}>Fill All</button>
            <button onClick={clearAll}>Clear All</button>

            <div className="grid" style={{gridTemplateColumns: col}}>
                {items}
            </div>
        </div>
       
    )
}

export default Grid