import React from "react";
import { storiesOf } from "@storybook/react";
// 这里引入你想展示的组件
import Button from "../components/Button";
import Suggest from "../components/Suggest";
import Rating from "../components/Rating";
import Form from "../components/Form";

storiesOf("Button", module)
  .add("with text", () => (
    // 一个 add 表示添加一个 story
    <Button>Hello Button</Button>
  ))
  .add("with some href", () => (
    // 这里是另一个 story
    <Button href={"www.baidu.com"}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Suggest", module)
  .add("with text", () => (
    // 一个 add 表示添加一个 story
    <Suggest>Hello Suggest</Suggest>
  ))
  .add("with some options", () => (
    // 这里是另一个 story
    <Suggest options={["eenie", "meenie", "miney", "mo"]}></Suggest>
  ));

storiesOf("Rating", module)
  .add("with text", () => (
    // 一个 add 表示添加一个 story
    <Rating defaultValue={4}>Hello Rating</Rating>
  ))
  .add("with some option", () => (
    // 这里是另一个 story
    <Rating max={11}></Rating>
  ));

storiesOf("Suggest", module)
  .add("with text", () => (
    // 一个 add 表示添加一个 story
    <Suggest>Hello Suggest</Suggest>
  ))
  .add("with some options", () => (
    // 这里是另一个 story
    <Suggest options={["eenie", "meenie", "miney", "mo"]}></Suggest>
  ));

storiesOf("Form", module)
  .addDecorator((storyFn) => (
    <div style={{ textAlign: "center" }}>{storyFn()}</div>
  ))
  .add(
    "with some option",
    () => (
      // 这里是另一个 story
      <Form
        fields={[
          { label: "Rating", type: "rating", id: "rateme" },
          { label: "Greetings", id: "freetext" },
        ]}
        initialData={{ rateme: 4, freetext: "Hello" }}
      />
    ),
    {
      notes: { markdown }, // 将会渲染 markdown 内容
    }
  );
