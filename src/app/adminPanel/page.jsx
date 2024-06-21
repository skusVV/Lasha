"use client";
import { useState, useEffect } from "react";
import { PageWrapper } from "../components/PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("manufacturer");
  const log = () => console.log("cheese");
  const [engineCapacity, setEngineCapacity] = useState([]);
  const [locations, setLocations] = useState([]);
  const [manufacturer, setManufacturer] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/api/car-attributes/manufacturer`)
      .then((res) => res.json())
      .then((res) => setManufacturer(res.filter(item => item.name !== '---')));

    fetch(`http://localhost:3001/api/car-attributes/carModel`)
      .then((res) => res.json())
      .then((res) => setCarModels(res.filter(item => item.name !== '---')));

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
        .then((res) => {
          setValue('');
          setManufacturer(res);
        });
    }

    if (activeTab === "carModel") {
      fetch(`http://localhost:3001/api/car-attributes/carModel/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setValue('');
          setCarModels(res);
        });
    }

    if (activeTab === "engine-capacity") {
      fetch(`http://localhost:3001/api/car-attributes/engine-capacity/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setValue('');
          setEngineCapacity(res);
        });
    }

    if (activeTab === "locations") {
      fetch(`http://localhost:3001/api/car-attributes/locations/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setValue('');
          setLocations(res);
        });
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
      id: "carModel",
      label: "Car Models",
      content: carModels
       .filter(model => model.madeByKey === selectedManufacturer)
       .map((model, index) => (
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

  const handleClick = (attributeType) => {
    fetch(`http://localhost:3001/api/car-attributes/${attributeType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    })
      .then((res) => res.json())
      .then((res) => {
        setValue('');
        if(attributeType === "manufacturer") {
          setManufacturer(res);
        }

        if(activeTab === "carModel") {
          setCarModels(res);
        }

        if(attributeType === "engine-capacity") {
          setEngineCapacity(res);
        }

        if(attributeType === "locations") {
          setLocations(res);
        }
      });
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
          {activeTab !== "carModel" && (
            <div className="flex items-center border border-gray-300 rounded-lg">
              <div className="p-2" onClick={() => handleClick(activeTab)}>
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
          )}
          {activeTab === "carModel" && (
            <div className="ml-4 flex align-center items-center border border-gray-300 rounded-lg">
              <div className="">
                <select
                  className="p-2 mr-2 border-none bg-transparent outline-none text-white"
                  name="carModelSelect"
                  id="carModelSelect"
                  onChange={(e) => setSelectedManufacturer(e.target.value)}
                >
                  <option disabled selected>
                    Select Manufacturer
                  </option>
                  {manufacturer.map((manufacturer, index) => (
                    <option
                      key={index}
                      className="bg-transparent text-white"
                      value={manufacturer.value}
                    >
                      {manufacturer.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="border-l border-gray-300 h-4"></div>
              <div className="ml-1 flex align-center items-center">
                <div className="p-2" onClick={() => handleClick(activeTab)}>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Add Item"
                  className="flex border-none bg-transparent outline-none"
                />
              </div>
            </div>
          )}

          <div className="">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
