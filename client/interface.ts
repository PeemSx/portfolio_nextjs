export interface TodoItem {

    topic: string;
    description: string;
    status: string;
    startedDate: string;
    completedDate: string;
    ownerId: string;
    
  }

  export interface TodoItemOne {
    _id: string,  
    topic: string;
    description: string;
    status: string;
    startedDate: string;
    completedDate: string;
    ownerId: string;
    createdAt : string;
    __v : number
  }

  export interface TodoItemJson {

    success: boolean;
    data: TodoItemOne[]
    
  }