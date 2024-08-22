const Section = ({ title, tasks, addTask, section }) => {
    const [newTask, setNewTask] = useState('');
  
    const handleAddTask = () => {
      if (newTask) {
        addTask({ name: newTask });
        setNewTask('');
      }
    };
  
    return (
      <div className="section">
        <h3>{title}</h3>
        <ul>
          {tasks.map((task, index) => (
            <Draggable key={index} draggableId={`${section}-${index}`} index={index}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <span>{task.name}</span>
                </li>
              )}
            </Draggable>
          ))}
        </ul>
        <div className="add-task">
          <input
            type="text"
            placeholder="New task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
      </div>
    );
  };
  export default Section
  