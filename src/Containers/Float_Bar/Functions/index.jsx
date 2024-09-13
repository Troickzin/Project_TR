import React from "react";
import { useNavigateA } from "react-router-dom";
const navigate = useNavigateA();

export function Home() {
  console.log("Home Click");
}

export function Shop() {
  console.log("Shop Click");
  navigate("/Shop");
}

export function Search() {
  console.log("Search Click");
}

export function Account() {
  console.log("Account Click");
}
