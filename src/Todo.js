import { useState } from "react";

const Todo = () => {

    const [inputdata, setInputData] = useState("");
    const [items, setItems]= useState([]);

    {/*add the items function */}
    const addItem = ()=>{
        if(!inputdata){
            alert("Please fill the data");
        } else {
            const myNewInputData = {
                id : new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData])
            setInputData("");
        }
    }

    {/*how to delete item section */}

    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
          return curElem.id !== index;
        });
        setItems(updatedItems);
      };

  {/*remove all the elements */}
      
   const removeAll = () => {
     setItems([]);
   };

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.png" alt="todologo"/>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                    <input type="text" placeholder="✍ Add Item" className="form-control"
                      value={inputdata}
                      onChange={(event) => setInputData(event.target.value)}
                    />
                        <i className="fa fa-plus add-btn" onClick={addItem}></i>
                    </div>

                    {/* Show our items */}
                    <div className="showItems">
                    {items.map((curElem)=>{
                        return(
                            <div className="eachItem" key={curElem.id}>
                            <h3>{curElem.name}</h3>
                            <div className="todo-btn">
                            {/*<i className="fa fa-edit add-btn"></i>*/}
                            <i className="fa fa-trash-alt add-btn" onClick={() => deleteItem(curElem.id)}></i>
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