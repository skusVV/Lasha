"use client";
import { useState } from "react";
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
  defaultLiters,
  defaultInteriorColor,
  defaultInteriorMaterial,
} from "../constants/constants";
import { faPlus, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function AdminPanel() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("tab1");
  const log = () => console.log("cheese");

  const tabs = [
    {
      id: "tab1",
      label: "Exterior Color",
      content: defaultModels.map((model, index) => (
        <div
          className="ml-5 group transform transition-transform duration-200 hover:scale-105"
          key={index}
        >
          <button onClick={log}>{model.name}</button>
        </div>
      )),
    },
    {
      id: "tab2",
      label: "Car Models",
      content: defaultSelectedCarModels.map((model, index) => (
        <div className="ml-5 group transform transition-transform duration-200 hover:scale-105">
          {" "}
          <button key={index}>
            {model.madeByKey}
            {" - "}
            {model.name}
          </button>
        </div>
      )),
    },
    {
      id: "tab3",
      label: "Locations",
      content: defaultLocation.map((model, index) => (
        <div className="ml-5 group transform transition-transform duration-200 hover:scale-105">
          <button key={index}>{model.name}</button>
        </div>
      )),
    },
    {
      id: "tab4",
      label: "Engine Capacity",
      content: defaultLiters.map((model, index) => (
        <div className="ml-5 group transform transition-transform duration-200 hover:scale-105">
          <button onClick={log} key={index}>
            {model.name}
          </button>
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      )),
    },
  ];
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
            <div className="p-2">
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <input
              type="text"
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
