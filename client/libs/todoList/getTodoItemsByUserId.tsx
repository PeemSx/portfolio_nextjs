const getTodoItemsByUserId = async (token:string,id:string) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/todoLists/user/${id}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        },

    })

    if(!response.ok){
        throw new Error("Failed to getTodoItemsByUserId")
    }

    const data = response.json();
    // console.log(data);
    return await data;
}

export default getTodoItemsByUserId
