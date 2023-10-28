"use client";
import axios from "axios";
import React from "react";
import { BiTrash } from "react-icons/bi";
import { NextResponse } from "next/server";

interface PropType {
  data: string;
}

const HotelDeleteButton = ({ data }: PropType) => {
  // ==== DELETE HOTEL ======
  const handleDelete = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/delete-hotel",
        { hotelName: data },
      );
      alert("Hotel Deleted");
      location.reload();
      return NextResponse.json(response.data);
    } catch (error: any) {
      return NextResponse.json({ message: error.message });
    }
  };

  return (
    <button className="bg-tang-500" onClick={handleDelete}>
      <BiTrash />
    </button>
  );
};

export default HotelDeleteButton;
