import React from "react";
import Counter from "../components/counter";
import Head from "../components/head";
import Customers from "../pages/customer";

function MainContent() {
  return (
    <div className="bg-yellow-700">
     
      <main className="flex flex-col gap-3">
        <div className="">
          <Head />
        </div>
        <div className="">
          <Counter />
        </div>
        <div className="">
          <Customers />
        </div>
      </main>
    </div>
  );
}

export default MainContent;
