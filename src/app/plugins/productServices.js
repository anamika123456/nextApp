export async function productList(){
    let responseData = await fetch('http://localhost:3000/api/products');
    responseData = await responseData.json();
    responseData = responseData.response ;
    return responseData;
}

export async function productDetail(getProductId){
    let responseData = await fetch(`http://localhost:3000/api/products/${getProductId}`);
    responseData = await responseData.json();
    responseData = responseData.response ;
    return responseData;
}

export async function productAdd(request){
    let responseData = await fetch(`http://localhost:3000/api/products`,{
        method : "POST",
        body : JSON.stringify(request)
    });
    responseData = await responseData.json();
    responseData = responseData.success ;
    return responseData;
}

export async function productUpdateById(getJson, getProductId){
    let responseData = await fetch(`http://localhost:3000/api/products/${getProductId}`,{
        method : "PUT",
        body : JSON.stringify(getJson)
    });
    responseData = await responseData.json();
    responseData = responseData.success ;
    return responseData;
}

export async function productDeleteById(getProductId){
    let responseData = await fetch(`http://localhost:3000/api/products/${getProductId}`,{
        method : "delete"
    });
    responseData = await responseData.json();
    responseData = responseData.success ;
    return responseData;
}