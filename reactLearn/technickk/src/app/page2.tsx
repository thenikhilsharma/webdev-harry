"use client"

import Image from "next/image";

export default function Home() {
  const HandleClick = async() => {
    let data = {
      name: "NICK",
      role: "Coder"
    }
    let a = await fetch('/api/add', {method: "POST", headers:{"Content-Type": "application/json",}, body: JSON.stringify(data)})
    let res = await a.json()
    console.log(a)
  }

  return (
    <>
      <h1>HOME PAGE</h1>
      <h2>NEXT JS API ROUTE</h2>
      <button onClick={HandleClick}>click me</button>
    </>
  );
}
