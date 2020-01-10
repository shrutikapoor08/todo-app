import React, {useState, useEffect} from 'react';
import './style.css';
import items from './items';
import AddItem from './AddItem';


const Dashboard = () => {
    const [todos, setToDos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const test = items;
            setToDos(test);
        };
        fetchData();
    })

    const toggleItem = (item) => {
        item.isOpen = !item.isOpen;
        setToDos([...todos])
    };


    return (
        <div>
            <ul>
                <AddItem/>
                {todos && todos.map(item =>
                    <li onClick={() => toggleItem(item)} className={item.isOpen ? 'open' : 'closed'}>
                        {item.name}
                    </li>
                )}
            </ul>
        </div>

    )
};

export default Dashboard;