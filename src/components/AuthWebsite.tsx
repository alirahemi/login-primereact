import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";
import { Fragment } from "react";

type LogoutProps = {
  user: string;
  logout(): void;
};

export const AuthWebsite = (props: LogoutProps) => {

  const submitHandler = () => {
    props.logout();
  };

  const footer = (
    <span>
      <Button
        label="Logout"
        icon="pi pi-sign-out"
        className="p-button-primary"
        onClick={submitHandler}
      />
    </span>
  );

  return (
    <Fragment>
      <Card
        footer={footer}
        title="AuthWebsite"
        subTitle={"Welcome " + props.user}
      >
      </Card>
    </Fragment>
  );
};
