"use client";
import axios from "axios";
import React from "react";

function Page() {
  const [items, setItems] = React.useState<any[]>([]);
  const fetchItems = async () => {
    const options = {
      method: "get",
      url: "http://localhost:5000/items",
    };

    try {
      const res = await axios(options);
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchItems();
  }, []);

  return <main>{JSON.stringify(items)}</main>;
}

export default Page;
