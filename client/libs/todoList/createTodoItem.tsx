import { Topic } from "@mui/icons-material";
import TopMenu from "../../app/components/TopMenu";
import { TodoItem } from "../../interface";

const createTodoItem = async (token:string, todoItem: TodoItem) => {

    // console.log(todoItem)
    const {topic, description, status,startedDate,completedDate, ownerId} = todoItem

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/todoLists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            topic,
            description,
            status,
            startedDate,
            completedDate,
            ownerId
        })
    })

    if(!response.ok){
        throw new Error("Failed to createTodoItem")
    }

    const data = response.json();

    return await data;
}

export default createTodoItem
