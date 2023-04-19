import {useDispatch, useSelector} from "react-redux";
import {selectBooks} from "../features/book/bookSlice"
import "../styles/home.scss";
import Book from "./Book";
import {selectCart,addToCart} from "../features/cart/cartSlice";
import {useNavigate} from "react-router-dom";
export default function Home(){

    //redux
    //Implement at least one Redux connect function to read values from the Redux store 
    const books = useSelector(selectBooks); //matches value from store
    const cart = useSelector(selectCart); //matches value from store

    //react router dom
    const navigate = useNavigate()


    return <div className={"Home"}>
        <button className="btn" onClick={()=>navigate("/cart")}>Cart {cart.length}</button>
        <button className="btn" onClick={()=>navigate("/login")}>Login</button>
        <div className="container">
        <div className={"bookGroup"}>
        {
            books.map((b, i) => {
                return <Book key={i} data={b} index={i}/>
            })
        }
        </div>

        </div>

    </div>
}