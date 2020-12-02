import React from "react";
import Select from "./Select";
import { action } from "@storybook/addon-actions";

export default {
  title: "Select",
  component: Select
};

const Template = args => <Select {...args} />;

// Basic Select
export const BasicSelect = Template.bind({});
BasicSelect.args = {
  onChangePropInput: action("Select change")
};
