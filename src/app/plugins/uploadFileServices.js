export async function uploadDocument(getData){
    let response = await fetch('http://localhost:3000/api/uploadFile',{
        method: "POST",
        body: getData
    });
    console.log('response=111===', response)
    response = await response.json();
    return response.success ;
}