import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
    imgUrl:
      "https://res.cloudinary.com/dpcteokzf/image/upload/v1672726601/geoflix/geo_q5sig1.webp",
  },
  {
    _id: uuid(),
    categoryName: "Indo-Pacific",
    imgUrl:
      "https://res.cloudinary.com/dpcteokzf/image/upload/v1672725685/geoflix/indo_pacific_nw7rrc.webp",
    title: "Delve into Indo-pacific",
  },
  {
    _id: uuid(),
    categoryName: "Middle-East",
    imgUrl:
      "https://res.cloudinary.com/dpcteokzf/image/upload/v1672726571/geoflix/middleeast_uy33ku.webp",
    title: "Messed Middle-East",
  },
  {
    _id: uuid(),
    categoryName: "Strategic-Groups",
    imgUrl:
      "https://res.cloudinary.com/dpcteokzf/image/upload/v1672726557/geoflix/i2u2_p65yl9.webp",
    title: "Strategic Groups",
  },
];
