"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Filters } from "./components/Filters";
import { PageWrapper } from "./components/PageWrapper";
import { CarsList } from "./components/CarsList";

// GET -- get some resource
// POST -- CREATE some resource
// PATCH -- Change some resource
// DELETE - delete some resource

export default function Home() {
  const [carsList, setCarsList] = useState([]);
  const user = JSON.parse(localStorage.getItem("AUTH"));
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:3001/api/random-cars?userId=${user?.id || null}`)
      .then((res) => res.json())
      .then(res => setCarsList(res))
  }, []);

  const onFilter = (filter) => {
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

  return (
    <PageWrapper>
      <Filters onFilter={onFilter} />
      <div style={{ color: "white", margin: "24px 133px" }}>Featured Cars</div>
      <div className="wrapper">
        <CarsList cars={carsList} anything="dasda" passAnythingElse={{}} />
      </div>
    </PageWrapper>
  );
}
