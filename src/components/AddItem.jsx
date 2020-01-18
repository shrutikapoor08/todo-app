import React, { useState, useEffect } from "react";

const AddItem = () => {

    return (
    <form onSubmit={ (event) => console.log(event.target)}>
      <label htmlFor="item">Item</label>
      <input type="text" id="name" name="name" required size="10" />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
