"use client";
import { useState, useEffect } from "react";
import { PageWrapper } from "../components/PageWrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  carModels,
  defaultLocation,
  defaultYears,
  defaultModels,
  defaultSelectedCarModels,
  defaultCurrency,
  defaultFuel,
  defaultExteriorColor,
  defaultInteriorColor,
  defaultInteriorMaterial,
} from "../constants/constants";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function AdminPanel() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("manufacturer");
  const log = () => console.log("cheese");
  const [engineCapacity, setEngineCapacity] = useState([]);
  const [locations, setLocations] = useState([]);
  const [manufacturer, setManufacturer] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/api/car-attributes/manufacturer`)
      .then((res) => res.json())
      .then((res) => setManufacturer(res));

    fetch(`http://localhost:3001/api/car-attributes/engine-capacity`)
      .then((res) => res.json())
      .then((res) => setEngineCapacity(res));

    fetch(`http://localhost:3001/api/car-attributes/locations`)
      .then((res) => res.json())
      .then((res) => setLocations(res));
  }, []);

  const removeItem = (id) => {
    if (activeTab === "manufacturer") {
      fetch(`http://localhost:3001/api/car-attributes/manufacturer/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => setManufacturer(res));
    }

    if (activeTab === "engine-capacity") {
      fetch(`http://localhost:3001/api/car-attributes/engine-capacity/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => setEngineCapacity(res));
    }

    if (activeTab === "locations") {
      fetch(`http://localhost:3001/api/car-attributes/locations/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => setLocations(res));
    }
  };

  const tabs = [
    {
      id: "manufacturer",
      label: "Manufacturer",
      content: manufacturer.map((model, index) => (
        <div className="ml-5 flex items-center transform transition-transform duration-200 hover:scale-105">
          <div className="w-1/2">
            <button onClick={log} key={index} className="mr-2">
              {model.name}
            </button>
          </div>
          <div className="w-1/2 flex justify-end mr-5 ">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => removeItem(model.id)}
              className="cursor-pointer"
            />
          </div>
        </div>
      )),
    },
    {
      id: "car-models",
      label: "Car Models",
      content: defaultSelectedCarModels.map((model, index) => (
        <div className="ml-5 flex items-center transform transition-transform duration-200 hover:scale-105">
          <div className="w-1/2">
            <button onClick={log} key={index} className="mr-2">
              {`[${model.madeByKey}]`}
              {"  "}
              {model.name}
            </button>
          </div>
          <div className="w-1/2 flex justify-end mr-5 ">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => removeItem(model.id)}
              className="cursor-pointer"
            />
          </div>
        </div>
      )),
    },
    {
      id: "locations",
      label: "Locations",
      content: locations.map((model, index) => (
        <div className="ml-5 flex items-center transform transition-transform duration-200 hover:scale-105">
          <div className="w-1/2">
            <button onClick={log} key={index} className="mr-2">
              {model.name}
            </button>
          </div>
          <div className="w-1/2 flex justify-end mr-5 ">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => removeItem(model.id)}
              className="cursor-pointer"
            />
          </div>
        </div>
      )),
    },
    {
      id: "engine-capacity",
      label: "Engine Capacity",
      content: engineCapacity.map((model, index) => (
        <div className="ml-5 flex items-center transform transition-transform duration-200 hover:scale-105">
          <div className="w-1/2">
            <button onClick={log} key={index} className="mr-2">
              {model.name}
            </button>
          </div>
          <div className="w-1/2 flex justify-end mr-5 ">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => removeItem(model.id)}
              className="cursor-pointer"
            />
          </div>
        </div>
      )),
    },
  ];

  const handleClick = () => {
    if (activeTab === "manufacturer") {
      fetch(`http://localhost:3001/api/car-attributes/manufacturer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value }),
      })
        .then((res) => res.json())
        .then((res) => setManufacturer(res));
    }

    if (activeTab === "engine-capacity") {
      fetch(`http://localhost:3001/api/car-attributes/engine-capacity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value }),
      })
        .then((res) => res.json())
        .then((res) => setEngineCapacity(res));
    }

    if (activeTab === "locations") {
      fetch(`http://localhost:3001/api/car-attributes/locations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value }),
      })
        .then((res) => res.json())
        .then((res) => setLocations(res));
    }
  };

  return (
    <PageWrapper>
      <div className="text-white w-[600px] mt-[100px] mb-[100px] mx-auto">
        <div className="flex mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-white border-b-2 ${
                activeTab === tab.id ? "border-white" : "border-transparent"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4 border border-dark-white rounded-lg">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <div className="p-2" onClick={handleClick}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Add Item"
              className="flex-1 py-2 pl-2 border-none bg-transparent"
            />
          </div>
          <div className="">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
