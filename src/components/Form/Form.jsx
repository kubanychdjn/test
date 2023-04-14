import React, { useState } from "react";
import s from "./form.module.scss";
import { Input } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Form = () => {
  const [user, setUser] = useState({
    name: "han",
    password: "",
  });

  return (
    <div className={s.container}>
      <Input
        size="large"
        placeholder="large size"
        prefix={<UsergroupAddOutlined />}
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
        className={s.form_input}
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

      <Button className={s.form_btn}>Add user</Button>
    </div>
  );
};

export default Form;
