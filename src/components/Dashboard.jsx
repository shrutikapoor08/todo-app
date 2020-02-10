import React, {useState, useEffect, useContext} from 'react';
import './style.css';
import AddItem from './AddItem';
import Context from '../context';

const Dashboard = () => {
    const {state} =useContext(Context);
    const [todos, setToDos] = useState([state]);

    useEffect(() => {
        async function fetchData() {
            setToDos(state.items);
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
                {todos.length > 0 && todos.map(item =>
                    <li onClick={() => toggleItem(item)} className={item.isOpen ? 'open' : 'closed'}>
                        {item.name}
                    </li>
                )}
            </ul>
        </div>

    )
};

export default Dashboard;
