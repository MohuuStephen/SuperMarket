import { useEffect, useState } from 'react';
import './image.css'
import { useNavigate, useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Displayallproductdetails , Deleteproduct} from './connect';

export const Listallproduct=()=>
{
    const {count}=useParams();
    const navi=useNavigate();
    const[allvalues,setAllvalues]=useState([])

    const productvalue=async()=>
    {
        const temp=await Displayallproductdetails();
        setAllvalues(temp.data);
 
    }

    useEffect(()=>
    {
        productvalue();
    })

  
    return(
                <>
                <div className="container mt-5 bg-primary " >
                    <div className="row justify-content-center">
                                <div className="table-responsive-lg">
                                    <table className="col-lg-8 col-md-10 col-sm-12 table table-striped ">
                                        <thead id="texting">
                                            <tr>
                                                <th>productCount</th>
                                                <th>productCategory</th>
                                                <th>productBrand</th>
                                                <th>ProductName</th>
                                                <th>productOffer</th>
                                                <th>productPrice</th>  
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                        {
                                                allvalues.map((data)=>(
                                                    <tr>
                                                        <td>
                                                            <a href={`reading/${data.productCount}`} className="btn btn-outline-primary">{data.productCount}</a>
                                                        </td>
                                                        <td>{data.productCategory}</td>
                                                        <td>{data.productBrand}</td>
                                                        <td>{data.productName}</td>
                                                        <td>{data.productOffer}</td>
                                                        <td>{data.productPrice}</td>
                                                        <td>
                                                            <a className="btn btn-outline-secondary" href={`updating/${data.productCount}`}>UPDATE</a>
                                                            <button className="btn btn-outline-danger"
                                                             onClick={
                                                                async()=>{
                                                                    const t=await Deleteproduct(data.productCount);
                                                                    alert(t.data+" has been deleted successfully");
                                                                    navi("/ListallproductDetails")
                                                            }
                                                            }>
                                                                Delete
                                                            </button>
                                                         </td>
                                                    </tr>

                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>
                </>
            );
}