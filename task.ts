// Definición de una interfaz para una tarea
interface Task {
    id: number;
    description: string;
    completed: boolean;
  }
  
  // Clase que gestiona una lista de tareas
  class TodoList {
    private tasks: Task[] = [];
    private nextId: number = 1;
  
    addTask(description: string): void {
      const newTask: Task = {
        id: this.nextId++,
        description,
        completed: false,
      };
      this.tasks.push(newTask);
      console.log(`Tarea añadida: ${description}`);
    }
  
    completeTask(id: number): void {
      const task = this.tasks.find(t => t.id === id);
      if (task) {
        task.completed = true;
        console.log(`Tarea completada: ${task.description}`);
      } else {
        console.log(`Tarea con ID ${id} no encontrada.`);
      }
    }
  
    listTasks(): void {
      console.log("Lista de tareas:");
      this.tasks.forEach(task => {
        console.log(`${task.id}. [${task.completed ? "X" : " "}] ${task.description}`);
      });
    }
  }
  
  // Uso de la clase
  const myList = new TodoList();
  
  myList.addTask("Aprender TypeScript");
  myList.addTask("Construir una app");
  myList.addTask("Tomar un café");
  myList.completeTask(2);
  myList.listTasks();
  