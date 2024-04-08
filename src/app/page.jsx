"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { CarsList } from "./components/CarsList";
import { api } from "./http/backend";

// GET -- get some resource
// POST -- CREATE some resource
// PATCH -- Change some resource
// DELETE - delete some resource

export default function Home() {
  const [carsList, setCarsList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Component did Mount
    api.get("/api/random-cars").then((res) => {
      setCarsList(res);
    });
  }, []);

  const onFilter = (filter) => {
    console.log("filter on the UI", filter);
    let query = "";

    query = query + `fuel=${filter.fuel}`;
    query = query + `&location=${filter.location}`;
    query = query + `&model=${filter.model}`;
    query = query + `&type=${filter.type}`;
    query = query + `&year=${filter.year}`;
    query = query + `&minPrice=${filter.price.min}`;
    query = query + `&maxPrice=${filter.price.max}`;
    router.push(`/search?${query}`);
  };

  const onFiltersClear = () => {
    api.get("/api/cars").then((res) => {
      setCarsList(res);
    });
  };

  return (
    <>
      <Header></Header>
      <Filters onFilter={onFilter} onClear={onFiltersClear} />
      <div style={{ color: "white", margin: "24px 133px" }}>Featured Cars</div>
      <div className="wrapper">
        <CarsList cars={carsList} anything="dasda" passAnythingElse={{}} />
      </div>
    </>
  );
}
