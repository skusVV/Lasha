"use client";
import { PageWrapper } from '../components/PageWrapper';
import { useState, useEffect } from "react";
import styled from "styled-components";

export const StyledSection = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    padding: 20px 200px;
    
    .chats-list {
        width: 25%;
        border: 1px solid grey;
    }
    .chat {
        width: 75%;
        border: 1px solid grey;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .chat-item {
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding-left: 12px;
        transition: all 300ms ease;
        color: #fff;

        &:hover {
            background: rgba(255, 255, 255, 0.1);
        }
    }
    
    .no-chat {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
    
    .chat-editor {
        width: 100%;
        height: 100%;
        
        &-header{
            height: 10%;
            background: red;
        }
        &-body{
            height: 70%;
            padding: 24px;
            //background: blue;
        }

        &-footer {
            height: 20%;
            background: green;
            padding: 8px;
            
            &-field {
                width: 100%;
                height: 100%;
            }
        }
    }
    
    .message-wrapper {
        width: 100%;
        display: flex;

        &-author {
          justify-content: flex-end;
        }
    }
    
    .message {
        height: 40px;
        border-radius: 5px;
        padding: 8px;
        width: fit-content;
        background: lavender;
        margin-bottom: 12px;
        
        &-author {
            background: green;
        }
        
    }
`;

const mockChats = [
  {id: 1, name: 'Chat one', isSelected: false },
  {id: 2, name: 'Chat tw0', isSelected: false }
];

const mockChatHistory = {
  '1': [
    { id: 1, content: 'Message 1', createdAt: "2024-06-24T13:37:55.716Z", isAuthor: true },
    { id: 2, content: 'Message 2', createdAt: "2024-06-24T13:39:55.716Z", isAuthor: false },
    { id: 3, content: 'Message 3', createdAt: "2024-06-24T13:41:55.716Z", isAuthor: false },
    { id: 4, content: 'Message 4', createdAt: "2024-06-24T13:45:55.716Z", isAuthor: true },
    { id: 4, content: 'Message 4', createdAt: "2024-06-24T13:45:55.716Z", isAuthor: true },
  ],
  '2': [
    { id: 332, content: 'Mesfadsfdassage 1', createdAt: "2024-06-24T13:37:55.716Z", isAuthor: false },
    { id: 2312, content: 'Messfdasfdaage 2', createdAt: "2024-06-24T13:39:55.716Z", isAuthor: true },
    { id: 3312, content: 'Messfdasfadsage 3', createdAt: "2024-06-24T13:41:55.716Z", isAuthor: true },
    { id: 3124, content: 'Messadsfasdage 4', createdAt: "2024-06-24T13:45:55.716Z", isAuthor: false },
    { id: 4312, content: 'Message 4', createdAt: "2024-06-24T13:45:55.716Z", isAuthor: true },
  ]
}


export default function Messages () {
  const [ chats, setChats ] = useState(mockChats);
  const [ selectedChatId, setSelectedChatId ] = useState(null);
  const [ messages, setMessages ] = useState([]);
  // const [fieldValue, setFieldValue] = useState('');

  useEffect(() => {
    if(selectedChatId) {
      setMessages(mockChatHistory[selectedChatId]);
    }
  }, [selectedChatId])

  const onKeyUpHandler = (e) => {
    if (e.key === 'Enter') {
      setMessages(
        [
          ...messages,
          {
            id: 332, content: e.target.value, createdAt: new Date(), isAuthor: true
          },
        ]
      );
      // setFieldValue('');
    } else {
      // console.log('das',e.target.value);
      // setFieldValue(e.target.value);
    }
  }

  return (
    <PageWrapper>
      <StyledSection>
        <div className="chats-list">
          {
            chats.map((chat, index) => {
              return <div key={index} className="chat-item" onClick={() => setSelectedChatId(chat.id)}>{chat.name}</div>;
            })
          }
        </div>
        <div className="chat">
          {
            !selectedChatId && <div className="no-chat">Please, select any chat from the list.</div>
          }
          {
            selectedChatId && (
              <div className="chat-editor">
                <div className="chat-editor-header">header</div>
                <div className="chat-editor-body">
                  {
                    messages.map((message, index) => {
                      return (
                        <div key={index} className={`message-wrapper ${message.isAuthor ? "message-wrapper-author" : ""}`}>
                          <div className={`message ${message.isAuthor ? "message-author" : ""}`}>{message.content}</div>
                        </div>
                      )
                      // return <div key={index} className={`message ${message.isAuthor ? 'message-author' : ''}`}>{message.content}</div>
                    })
                  }
                </div>
                <div className="chat-editor-footer">
                  <textarea className="chat-editor-footer-field"
                            onKeyUp={onKeyUpHandler}
                            placeholder="Type..."></textarea>
                </div>
              </div>
            )
          }
        </div>
      </StyledSection>
    </PageWrapper>
  )
}