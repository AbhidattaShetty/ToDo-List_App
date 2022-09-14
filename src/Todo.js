import { useState } from "react";

const Todo = () => {

    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputData(newValue);
    }

    {/*how to Add item section */ }
    function addItem() {
        setItems((prevItems) => {
            return [...prevItems, inputdata];
        });
        setInputData("");
    }

    {/*how to delete item section */ }

    const deleteItem = (id) => {
        const updatedItems = items.filter((curElem, index) => {
            return index !== id;
        });
        setItems(updatedItems);
    };

    {/*remove all the elements */ }

    const removeAll = () => {
        setItems([])
    }
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.png" alt="todologo" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Item" className="form-control"
                            value={inputdata}
                            onChange={handleChange}
                        />
                        <i className="fa fa-plus add-btn" onClick={addItem}></i>
                    </div>

                    {/* Show our items */}
                    <div className="showItems">
                        {items.map((curElem, index) => {
                            return (
                                <div className="eachItem" key={index}>
                                    <h3>{curElem}</h3>
                                    <div className="todo-btn">
                                        {/*<i className="fa fa-edit add-btn"></i>*/}
                                        <i className="fa fa-trash-alt add-btn" onClick={() => deleteItem(index)}></i>
                                    </div>
                                </div>
                            )
                        })}

                    </div>


                    {/* Remove All button */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;
