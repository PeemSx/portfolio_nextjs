

const userRegister = async (userName:string, userEmail:string, userPassword:string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`, {
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
            password: userPassword,
        })
  
    })

    if(!response.ok){
        throw new Error("Failed to Register")
    }

    const data = response.json();
    // console.log(data);
    return await data;
}

export default userRegister
