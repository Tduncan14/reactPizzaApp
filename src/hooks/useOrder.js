import {useState} from 'react';


export function useOrder(){

    const[Orders,setOrders] = useState([]);

    return {
        Orders,
        setOrders
    }
}