import { useState, useEffect } from 'react';
import { useContext } from 'react';
import TaskContext from '../contexts/TaskContext';

const useTasks = () => {
  const taskContext = useContext(TaskContext);
  const [tasks, setTasks] = useState(taskContext.tasks);

  useEffect(() => {
    setTasks(taskContext.tasks);
  }, [taskContext.tasks]);

  return tasks;
};

export default useTasks;