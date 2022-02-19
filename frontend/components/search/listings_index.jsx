import React from "react";
import ListingIndexItem from "./listing_index_item";
import { Link } from "react-router-dom";
const ListingIndex = (props) => {
  
    if (Object.keys(props.listings).length === 0) {
      return null;
    }else{
 
    
      return(
        <div className="index-item">

          {Object.values(props.listings).map(listing => (
            <ListingIndexItem
              listings={listing}
              key={listing.id}
            />
          ))}
        </div>
      )
    }
  }
 


export default ListingIndex;