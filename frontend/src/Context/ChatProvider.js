const { createContext, useContext, useState, useEffect } = require("react");

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    JSON.parse(localStorage.getItem("userInfo"))
  } , [])
  return (
    <ChatContext.Provider value={{ user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export const chatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
