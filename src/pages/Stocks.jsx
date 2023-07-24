import stocks from "../data";
import { Link } from "react-router-dom";

function StockList() {
    return ( 
        <div className="list">
            <h1>Most Active Stocks</h1>
            <table>
             <tbody>
                    <tr>
                        <td>Company Name </td>
                        <td>Price</td>
                        <td>Change</td>
                    </tr>
                    {stocks.map((singleStock, index) => <tr key={index}>
                        <td className="stockName">
                            <Link to={`/stocks/${singleStock.symbol}`} key={singleStock.symbol}> 
                            {singleStock.name} ({singleStock.symbol}) 
                            </Link>
                        </td>
                        <td>{singleStock.lastPrice}</td>
                        <td style={singleStock.change > 0 ? {color:'green'} : {color:'red'}}>{singleStock.change.toFixed(2)} ({(singleStock.change.toFixed(2)/(singleStock.open/100)).toFixed(2)}%)</td>
                    </tr>
                        )}
                </tbody>
            </table>         
        </div>
     );
}

export default StockList;