import React, { useEffect, useState } from "react";
import style from "./Chat.module.css";
import { useLocation } from "react-router-dom";

import img from "../../../assets";
import { ConvertTime } from "../../../utils/apiFeature";
import Loader from "../../Loader/Loader";

const Chat = ({
  functionName,
  readMessage,
  friendMsg = [],
  account,
  userName,
  Loading,
  currentUserName,
  currentUserAddress,
}) => {
  const location = useLocation();
  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState({
    name: "",
    address: "",
  });

  useEffect(() => {
    if (location.state) {
      setChatData(location.state);
    }
  }, [location.state]);

  return (
    <div className={style.Chat}>
      {currentUserName && currentUserAddress && (
        <div className={style.Chat_user_info}>
          <img src={img.accountName} alt="User" width={70} height={70} />
          <div className={style.Chat_user_info_box}>
            <h4>{currentUserName}</h4>
            <p className={style.show}>{currentUserAddress}</p>
          </div>
        </div>
      )}

      <div className={style.Chat_box_box}>
        <div className={style.Chat_box}>
          <div className={style.Chat_box_left}>
            {friendMsg.length > 0 ? (
              friendMsg.map((el, i) => (
                <div key={i} className={style.Chat_box_left_title}>
                  <img src={img.accountName} alt="Sender" width={50} height={50} />
                  <span>
                    {el.sender === chatData.address ? chatData.name : userName}{" "}
                    <small>{ConvertTime(el.timestamp)}</small>
                  </span>
                  <p>{el.msg}</p>
                </div>
              ))
            ) : (
              <p>No messages yet.</p>
            )}
          </div>
        </div>

        {currentUserAddress && (
          <div className={style.Chat_box_send}>
            <div className={style.Chat_box_send_img}>
              <img src={img.smile} alt="smile" width={50} height={50} />
              <input
                type="text"
                placeholder="Type your message..."
                onChange={(e) => setMessage(e.target.value)}
              />
              <img src={img.file} alt="file" width={50} height={50} />
              {Loading ? (
                <Loader />
              ) : (
                <img
                  src={img.send}
                  alt="send"
                  width={50}
                  height={50}
                  onClick={() => functionName({ msg: message, address: chatData.address })}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
