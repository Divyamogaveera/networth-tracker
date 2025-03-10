import { useState, useEffect } from "react";
import axios from "axios";

const NwtWorthTracker = () => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/networth");
            setTransactions(response.data);
        }
        catch (error) {
            console.log("error fetching transactions", error);
        }
    };

    useEffect(()=>{
        fetchTransactions();
    },[]);

    return(
        <>
        <h2>Net WOrth tracker</h2>
        <ul>
            {transactions.map((transactions, index)=>(
                <li key={index}>
                    {transactions.description}- ${transactions.amount}
                </li>
            ))}
        </ul>
        </>
    )
};

export default NwtWorthTracker;