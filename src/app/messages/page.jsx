"use client";
import { PageWrapper } from "../components/PageWrapper";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const mockChats = [
  { id: 1, name: "Chat one", isSelected: false },
  { id: 2, name: "Chat tw0", isSelected: false },
];

const mockChatHistory = {
  1: [
    {
      id: 1,
      content: "Message 1",
      createdAt: "2024-06-24T13:37:55.716Z",
      isAuthor: true,
    },
    {
      id: 2,
      content: "Message 2",
      createdAt: "2024-06-24T13:39:55.716Z",
      isAuthor: false,
    },
    {
      id: 3,
      content: "Message 3",
      createdAt: "2024-06-24T13:41:55.716Z",
      isAuthor: false,
    },
    {
      id: 4,
      content: "Message 4",
      createdAt: "2024-06-24T13:45:55.716Z",
      isAuthor: true,
    },
    {
      id: 4,
      content: "Message 4",
      createdAt: "2024-06-24T13:45:55.716Z",
      isAuthor: true,
    },
  ],
  2: [
    {
      id: 332,
      content: "Mesfadsfdassage 1",
      createdAt: "2024-06-24T13:37:55.716Z",
      isAuthor: false,
    },
    {
      id: 2312,
      content: "Messfdasfdaage 2",
      createdAt: "2024-06-24T13:39:55.716Z",
      isAuthor: true,
    },
    {
      id: 3312,
      content: "Messfdasfadsage 3",
      createdAt: "2024-06-24T13:41:55.716Z",
      isAuthor: true,
    },
    {
      id: 3124,
      content: "Messadsfasdage 4",
      createdAt: "2024-06-24T13:45:55.716Z",
      isAuthor: false,
    },
    {
      id: 4312,
      content: "Message 4",
      createdAt: "2024-06-24T13:45:55.716Z",
      isAuthor: true,
    },
  ],
};

export default function Messages() {
  const [chats, setChats] = useState(mockChats);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (selectedChatId) {
      setMessages(mockChatHistory[selectedChatId]);
    }
  }, [selectedChatId]);

  const onKeyUpHandler = (e) => {
    if (e.key === "Enter") {
      setMessages([
        ...messages,
        {
          id: 332,
          content: e.target.value,
          createdAt: new Date(),
          isAuthor: true,
        },
      ]);
      setInputValue("");
    } else {
      // console.log('das',e.target.value);
      // setFieldValue(e.target.value);
    }
  };

  return (
    <PageWrapper>
      <div className="flex items-center justify-center h-screen my-5">
        <div className="flex flex-col w-full max-w-4xl h-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="py-4 px-5 bg-violet-600 text-white font-semibold">
            Chats
          </div>
          <div className="flex-1 flex overflow-hidden">
            <div className="w-1/4 bg-gray-100 border-r overflow-y-auto">
              {mockChats.map((chat) => (
                <div
                  key={chat.id}
                  className={`p-4 cursor-pointer hover:bg-gray-200 flex items-center ${
                    selectedChatId === chat.id ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedChatId(chat.id)}
                >
                  <img className="w-10 h-10 rounded-full mr-3" />
                  {chat.name}
                </div>
              ))}
            </div>
            <div className="w-3/4 flex flex-col">
              {!selectedChatId && (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-500">Please select a chat</p>
                </div>
              )}
              {selectedChatId && (
                <>
                  <div className="flex-1 p-4 overflow-y-auto">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex mb-4 ${
                          message.isAuthor ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-lg max-w-xs ${
                            message.isAuthor
                              ? "bg-violet-500 text-white"
                              : "bg-gray-300 text-black"
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t bg-gray-200 flex items-center">
                    <input
                      className="w-full p-2 border rounded mr-2"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyUp={onKeyUpHandler}
                      placeholder="Type a message..."
                    />
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="text-violet-600 cursor-pointer"
                      onClick={() => {
                        if (inputValue.trim()) {
                          setMessages([
                            ...messages,
                            {
                              id: messages.length + 1,
                              content: inputValue,
                              isAuthor: true,
                            },
                          ]);
                          setInputValue("");
                        }
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
