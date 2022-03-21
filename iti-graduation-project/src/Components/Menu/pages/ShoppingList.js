import { addToCart } from "../store/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect , useState } from "react";
import { Button, Table } from "react-bootstrap";
import Rows from "../components/Rows";
import EmptyCart from "./Menu/EmptyCart";
import { Card } from "react-bootstrap";

function ShoppingList(){

    const total = 0;
    //this.props.cart.map(item => total += item.product.price * item.quantity);



    const dispatch = useDispatch()

    const [Menu,setMenu] = useState([])

    const FavMen= useSelector((state)=>{return state.menu})

    const filterMenu = Menu.filter((m)=>{
        return FavMen.includes(m._id)
    })

    useEffect(()=>{
        axios.get('http://localhost:4000/foods')
        .then((res)=>{
            setMenu(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const handelMenu=(id)=>{
        if (FavMen.includes(id))
        {
            console.log(id)
            const index= FavMen.indexOf(id)
            console.log(index)
            FavMen.splice(index,1)
            dispatch(
                addToCart([...FavMen])
            )
        }else{
            dispatch(addToCart([id, ...FavMen]))
        }
    }

    if(filterMenu==0){
        return(<EmptyCart/>)
    }else{
        return(
            <>
            <>
             <h1 style={{color:'#47B07F'}}> Favourit Meals </h1>
                    <>
                    <div className="cart">
                    <div className=" col-8" > 
                    <Table >
                            <thead>
                                <tr>
                                
                                <th>Meal</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   
                                filterMenu.map(men=>{
                                    return(
                                        <>
                                     <Rows img = {men.image}
                                        name= {men.name}
                                        price={men.price}
                                        remove={handelMenu}
                                        total={men.price}
                                        id={men._id}
                                    />
                                        </>
                                    )
    
                                })
                                }                           
                            </tbody>

                    </Table>
                <div>
                    {/* {    filterMenu.map(men=>{
                            total=+ men.price
                        })
                    } */}
                    <div className="panel-footer">
                    <div className="row text-center">
                        <div className="col-xs-11">
                            <h4 className="text-right">Total <strong>${total.toFixed(3)}</strong></h4>
                        </div>
                    </div>
                </div>
                    </div>
                    </div>
                    <div className=" total col-4">
                    <Card className=" bg-dark text-white " style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title className=" M-2 P-2 fw-bold" style={{fontWeight:"bolder" , fontSize:"28px"}}>CARD TOTAL </Card.Title>
                            <Card.Text>
                                <div>SubTotal :<span>0</span> </div>
                                <div>Discount : <span>0</span></div>
                                <div>Total :<span>0</span> </div>
                            </Card.Text>
                            <Button className="bg-light text-danger font-weight-bold">Checkout Now</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    </div>
                    </>
                    
            </>
            </>
        )
    }

   
}

export default ShoppingList