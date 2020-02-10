import React, {useState, useContext} from 'react';
import Context from '../context';

const AddItem = () => {
    const [value, setValue] = useState("");
    const {state, dispatch} = useContext(Context);

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    };

    const submitHandler = (event) => {
        const { items } = state ;
        console.log(items);
        items.push({name: value, isOpen: true});
        dispatch({type: "ADD_ITEM", payload: items})
        event.preventDefault();
    };

    return (
        <div>
            <label htmlFor="item">Item</label>
            <input type="text" id="name" name="name" required size="10" onChange={onChangeHandler}/>
            <button onClick={submitHandler}>Add Item</button>
        </div>
        )
};

export default AddItem;
