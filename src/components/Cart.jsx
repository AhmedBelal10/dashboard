import React, { useState , useEffect} from "react";
import { MdOutlineCancel } from "react-icons/md";
import { cartData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Cart = () => {
 
  const { handleClick, currentColor  } = useStateContext();
  const [counter, setCounter] = useState([]);

  useEffect(()=>{
    setCounter(cartData)
  },[])

  const plusCounter = (id) =>{
    const allData = [...cartData];
    allData[id-1].value++;
    setCounter(allData)
  }
  const minusCounter = (id) =>{
    const allData = [...cartData];
    allData[id-1].value--;
    if(allData[id-1].value < 0 ) allData[id-1].value = 0
    setCounter(allData)
  }
  

  return (
    <div className= "bigDiv bg-half-transparent w-screen fixed nav-item top-0 right-0 md:text-sm lg:text-sm ">
      <div className="float-right h-screen  bg-white dark:bg-[#484B52] w-3/4 lg:w-1/2 md:w-1/2 xl:w-1/4 ">
        <div className="main flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl dark:text-white">Shopping Cart</p>
          <button
            type="button"
            onClick={() => {
              handleClick(false);
            }}
            style={{ color: "rgb(153,171,180", borderRadius: "50%" }}
            className="text-2xl p-3 md:p-0 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="bg-slate-100 p-4  w-5/6 m-auto rounded-md dark:bg-main-dark-bg">
          {counter.map((item, index) => (
            <div
              key={index}
              className="small border-b-2 flex justify-between mt-4 pb-8 md:pb-5"
            >
              <img className="cart_img" src={item.image} alt="" />
              <div>
                <p className="item_name font-extrabold dark:text-white">{item.name}</p>
                <p className="dark:text-white">{item.category}</p>
                <div className="flex justify-start items-center mt-1 btns">
                  <p className="mr-3 font-semibold dark:text-white">{item.price}</p>
                  <div
                    className=" inline-flex rounded-md shadow-sm w-1/2"
                    role="group"
                  >
                    <button
                      type="button"
                      className="py-1 px-3 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                      onClick={()=> { minusCounter(item.id)}}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="py-1 px-3 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                      {item.value}
                    </button>
                    <button
                      type="button"
                      className="py-1 px-3 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                      onClick={()=>{plusCounter(item.id)}}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            <div className="mt-3 flex justify-between">
              <p className="text-gray-500 dark:text-white">Sub Total</p>
              <p className="font-extrabold dark:text-white">$980</p>
            </div>
            <div className="mt-3 flex justify-between">
              <p className="text-gray-500 dark:text-white">Total</p>
              <p className="font-extrabold dark:text-white">$980</p>
            </div>
            <button
              type="button"
              className="py-2 px-4 text-sm mb-4 font-medium w-full mt-3 rounded-lg text-white"
              style={{backgroundColor:currentColor}}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
