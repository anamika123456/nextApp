export async function login(getJsonData){
    let responseData = await fetch(`http://localhost:3000/api/login`,{
        method : "POST",
        body : JSON.stringify(getJsonData)
    });
    responseData = await responseData.json();
    
    return responseData.success ;
}