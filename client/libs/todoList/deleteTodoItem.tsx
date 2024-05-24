const deleteTodoItem = async (token:string,id:string) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/todoLists/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`,
        },

    })

    if(!response.ok){
        throw new Error("Failed to deleteTodoItem")
    }

    const data = response.json();
    // console.log(data);
    return await data;
}

export default deleteTodoItem
