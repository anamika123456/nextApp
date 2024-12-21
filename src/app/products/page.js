import Link from "next/link";
import * as services from "../plugins/productServices";
import DeleteBtn from './tableDeleteBtn';
export default async function Page(){
    let productListData = await services.productList();
    
    return(
        <div className="container-md">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link href="/addProducts" className="btn btn-primary me-md-2 my-3" type="button">Add Products</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Company</th>
                        <th scope="col">Color</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productListData.map((list,index)=>{
                        return <tr key={list.id}>
                            <th scope="row">{index+1}</th>
                            <td>{list.name}</td>
                            <td>{list.price}</td>
                            <td>{list.company}</td>
                            <td>{list.color}</td>
                            <td>{list.category}</td>
                            <td>
                                <Link href={`/products/${list._id}`} className="btn btn-secondary" type="button">View</Link>
                                <Link href={`/products/${list._id}/update`} className="btn btn-primary mx-3" type="button">Edit</Link>
                                <DeleteBtn productId={list._id} />
                            </td>
                        </tr>;
                    })}
                </tbody>
            </table>
        </div>
    );
}