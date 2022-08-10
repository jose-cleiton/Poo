

type Todo = {
  title: string;
  description: string;
  completed: boolean;
 };

  const todo: Readonly<Todo> = {
    title: 'Trash',
    description: 'Take out trash',
    completed: false,
  }
 console.clear()
 function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate};
 }

 const todo2 : Todo  = updateTodo(todo, {completed: true});


 /** Pick */

 type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo3 : TodoPreview = {
  title: 'Trash',
  completed: false,
}

/** Omit */

type TodoPreview2 = Omit<Todo, 'description'>;

const todo4 : TodoPreview2 = {
  title: 'Trash',
  completed: false, 
  
}