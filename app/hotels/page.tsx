import Link from "next/link";
import React from "react";
import { BiChevronLeft, BiPlus } from "react-icons/bi";
import HotelList from "../components/hotels/HotelTable";

const HotelTable = () => {
  return (
    <div className="page-container">
      <div className="flex justify-between">
        <div className="flex items-center">
          <BiChevronLeft />
          <h1>Hotels</h1>
        </div>
        <Link href="/hotels/create-hotels" className="link bg-grass-500">
          <BiPlus /> Add Hotels
        </Link>
      </div>
      <HotelList />
    </div>
  );
};

export default HotelTable;
