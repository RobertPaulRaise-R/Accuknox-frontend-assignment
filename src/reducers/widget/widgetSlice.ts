import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WidgetType {
  name: string;
  data: string;
}

export interface Categories {
  [key: string]: WidgetType[];
}

interface Payload {
  category: string;
  widget: {
    name: string;
    data: string;
  };
}

interface WidgetState {
  categories: Categories;
  searchResults: string[];
}

const initialState: WidgetState = {
  categories: {
    Raise: [
      { name: "Cloud Accounts", data: "No data available" },
      { name: "Cloud Account Risk Management", data: "None" },
    ],
    CSPM: [
      { name: "Cloud Accounts", data: "No data available" },
      { name: "Cloud Account Risk Management", data: "None" },
    ],
    CWPP: [
      {
        name: "Top 5 NameSpace Specific Alerts",
        data: "No graph data available",
      },
    ],
  },
  searchResults: [],
};

const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories[action.payload];
    },
    addWidget: (state, action: PayloadAction<Payload>) => {
      const { category, widget } = action.payload;
      if (!state.categories[category]) {
        state.categories[category] = [];
      }
      state.categories[category].push(widget);
    },
    removeWidget: (state, action: PayloadAction<Payload>) => {
      const { category, widget } = action.payload;
      state.categories[category] = state.categories[category].filter(
        (w) => w.name !== widget.name
      );
    },
    searchWidgets: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();
      const namesArray = Object.values(state.categories).flatMap((category) =>
        category.map((item) => item.name)
      );
      state.searchResults = namesArray.filter((name) =>
        name.toLowerCase().includes(query)
      );
    },
  },
});

export const { addCategory, addWidget, removeWidget, searchWidgets } =
  widgetSlice.actions;

export default widgetSlice.reducer;
