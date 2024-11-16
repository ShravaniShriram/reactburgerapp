import React from "react";
import { DealList } from "../helper/DealList";
import DealItem from "../components/DealItem";
import "../styls/Deals.css";

function Deals() {
    return (
        <div className="deal">
        <h1 className="dealTitle">Burgur House Deal's</h1>
        <div className="dealList">
            {DealList.map((dealItem, key) => {
            return (
                <DealItem
                key={key}
                image={dealItem.image}
                name= {dealItem.name}
                price={dealItem.price}
            />
            );
            })}
        </div>
    </div>
);
}
export default Deals;