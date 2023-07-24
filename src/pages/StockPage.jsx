import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import stocks from "../data";
import { Link } from "react-router-dom";

import { useFamilyContext } from "../AppContext"; 


function SingleStock() {
    let {myStocks, setMyStocks} = useFamilyContext()

    const [stock, setStock] = useState({})

    const params = useParams()

    function getStock() {

        const specificStockData = stocks.filter((obj) => obj.symbol === params.symbol);
        setStock(specificStockData[0])
    }

    useEffect(() => {
        getStock()
        
    }, [])

    const elements = [];

    for (const key in stock) {
        elements.push(
        <td key={key}>
            <p className="tableheader">{key}</p>
            {stock[key]}
        </td>
        );
    }



    function handleButtonClick() {
        const newItem = {name: stock.name, symbol: stock.symbol};
        let arr = [...myStocks, newItem]
        setMyStocks(arr)
        console.log(arr)
    }




    // console.log(follow)



    return ( 
        <div className="list">
            <h1>Details about {stock.name}</h1>
            <table className="table2">
             <tbody>
                    <tr>
                        {elements}
                    </tr>                     
                </tbody>
            </table>
                    {/* <button className="followbtn" onClick={handleButtonClick}>Follow</button> */}
            <Link className="backbtn" to={`/stocks`}>
                    <button>Back to the list</button>
            </Link>
                     
        </div>
     );
}

export default SingleStock;