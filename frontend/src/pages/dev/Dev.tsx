import React, { useState } from "react";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Icon from "../../components/icon/Icon";
import Switcher from "../../components/switcher/Switcher";
import classes from "./dev.module.scss";

type Props = {};

export default function Dev(props: Props) {
  const [selected, setSelected] = useState("test");

  return (
    <>
      <div>
        <Header level={1}>Switcher</Header>
        <Switcher
          items={[
            {
              value: "test",
              content: (forwardRef, props) => (
                <Button
                  transparent
                  noHoverEffect
                  forwardRef={forwardRef}
                  {...props}>
                  sup dude?
                </Button>
              ),
            },
            {
              value: "test2",
              content: (forwardRef, props) => (
                <Button
                  icon={<Icon icon="home" />}
                  transparent
                  noHoverEffect
                  forwardRef={forwardRef}
                  {...props}>
                  sup dude?
                </Button>
              ),
            },
            {
              value: "test3",
              content: (forwardRef, props) => (
                <Button
                  transparent
                  noHoverEffect
                  forwardRef={forwardRef}
                  {...props}>
                  YEP
                </Button>
              ),
            },
          ]}
          onChange={setSelected}
          selected={selected}
        />
        <div>Selected: {selected}</div>
      </div>
    </>
  );
}
