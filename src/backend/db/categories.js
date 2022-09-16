import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },
  {
    _id: uuid(),
    categoryName: "Indo-Pacific",
  },
  {
    _id: uuid(),
    categoryName: "Middle-East",
  },
  {
    _id: uuid(),
    categoryName: "Strategic-Groups",
  },
];
