import React, { useState } from "react";
import s from "./form.module.scss";
import { Input } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";

const Form = () => {
  const [user, setUser] = useState({
    name: "han",
    password: "",
  });

  return (
    <div>
      <Input
        size="large"
        placeholder="large size"
        prefix={<UsergroupAddOutlined />}
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      />
      <Input
        size="large"
        placeholder="large size"
        prefix={<UsergroupAddOutlined />}
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
    </div>
  );
};

export default Form;
