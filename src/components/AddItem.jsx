import React, {useState, useEffect} from 'react';


const AddItem = () => {
    const submitHandler = () => {
        console.log('teschbdhvd')
        return false;
    };

return (
<form onSubmit={submitHandler}>
<label htmlFor="item">Item</label>
<input type="text" id="name" name="name" required size="10" />
<button type="submit">Add Item</button>
</form>)

};

export default AddItem;