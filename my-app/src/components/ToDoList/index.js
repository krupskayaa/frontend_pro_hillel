import "./style.css";

function ToDoList({todos, setTodos}) {
 
    const isCompleted = (id) => {
        const newToDos = todos.map((elem) => {
            if (elem.id === id) {
              elem.done = true;
            }
            return elem;
        });
        setTodos(newToDos);
    }

    return (
        <ul className="to-do__list">{
            todos.map(elem => (
                <li key={elem.id} className="to-do__list-task">
                    <p className={`to-do__task ${elem.done ? "complete-p" : ""}`}>{elem.text}</p>
                    <button className={`to-do__btn-done ${elem.done ? "complete-btn" : ""}`} onClick={() => isCompleted(elem.id)}>done</button>
                </li>
            ))
        }</ul>
    )
};

export default ToDoList;