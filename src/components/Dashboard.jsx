import React, {useState} from 'react';
import './style.css';

const items = [
    { name: "do this", isOpen: true},
    { name: "do that", isOpen: true },
    { name: "clean shit", isOpen: true},
    { name: "close the toilet seat", isOpen: true}
];

const Dashboard = () => {
     const [todos, setToDos] = useState(items);

    const toggleItem = (item) => {
         item.isOpen = !item.isOpen;
        setToDos([...todos])
    };


return (
        <div>
            <ul>
                {todos && todos.map(item =>
                    <li onClick={() => toggleItem(item)} className={item.isOpen ? 'open' : 'closed'}>
                        {item.name}
                    </li>
                )}
            </ul>
        </div>

)};

export default Dashboard;