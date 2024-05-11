const getUserprofile = async (token:string) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        },

    })

    if(!response.ok){
        throw new Error("Failed to getUserprofile")
    }

    const data = response.json();
    // console.log(data);
    return await data;
}

export default getUserprofile
