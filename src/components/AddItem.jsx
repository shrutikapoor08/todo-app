import React, {useState, useEffect} from 'react';
import  items  from './items';

const AddItem = () => {
    const [value, setValue] = useState("");

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    };

    const submitHandler = (event) => {
        items.push(value);
        event.preventDefault();
    };

return (
<div>
<label htmlFor="item">Item</label>
<input type="text" id="name" name="name" required size="10" onChange={onChangeHandler}/>
<button onClick={submitHandler}>Add Item</button>
</div>)

};

export default AddItem;