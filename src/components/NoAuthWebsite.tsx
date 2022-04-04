import React, { useState } from "react";
import { Fragment } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";

type LoginProps = {
  login(username: string): void;
};

export const NoAuthWebsite = (props: LoginProps) => {
  const [userName, setUserName] = useState<string>("");

  const submitHandler = () => {
    props.login(userName);
  };

  const onEnterDown = (e: any) => {
    if (e.keyCode === 13) submitHandler();
  };

  const footer = (
    <span>
      <Button
        label="Login"
        icon="pi pi-sign-in"
        className="p-button-primary"
        onClick={submitHandler}
      />
    </span>
  );

  return (
    <Fragment>
      <Card
        footer={footer}
        title="NoAuthWebsite"
        subTitle="please login with user name"
      >
        <InputText
          placeholder="username"
          required={true}
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          onKeyDown={(e) => onEnterDown(e) }
        />
      </Card>
    </Fragment>
  );
};