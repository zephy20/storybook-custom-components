import React from "react";
import Input from "./Input";
import { action } from "@storybook/addon-actions";

export default {
  title: "Input",
  component: Input,
  argTypes: { onChange: { action: "clicked" } }
};

const Template = args => <Input {...args} />;

// Basic Input
export const BasicInput = Template.bind({});
BasicInput.args = {
  onChangePropInput: action("Input change")
};

// With error display
export const WithErrorInput = Template.bind({});
WithErrorInput.args = {
  onChangePropInput: action("Input change"),
  showError: true
};

// With min length
export const WithMinimumLengthInput = Template.bind({});
WithErrorInput.args = {
  onChangePropInput: action("Input change"),
  minlength: 10
};

// With placeholder
export const WithCustomPlaceholderInput = Template.bind({});
WithErrorInput.args = {
  onChangePropInput: action("Input change"),
  inputPlaceholder: "Hello there"
};
