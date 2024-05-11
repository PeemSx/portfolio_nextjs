

const userLogin = async (userEmail:string, userPassword:string) => {


    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
        })
  
    })

    if(!response.ok){
        throw new Error("Failed to Login")
    }

    const data = response.json();
    // console.log(data);
    return await data;
}

export default userLogin
