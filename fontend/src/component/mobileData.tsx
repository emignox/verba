// buttonsData.js
import {
  faHome,
  faUsers,
  faPlus,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

export const buttonsData = [
  {
    icon: faHome,
    buttonClass: "w-14 rounded-md",
    iconClass: "text-white text-2xl",
    link: "/",
  },
  {
    icon: faUsers,
    buttonClass: "",
    iconClass: "text-white text-xl",
    link: "/friendsList",
  },
  {
    icon: faPlus,
    buttonClass: "w-14 rounded-md",
    iconClass: "text-white text-3xl",
  },
  {
    icon: faCog,
    buttonClass: "",
    iconClass: "lg:text-2xl lg:mx-2 text-white text-2xl",
    link: "/settings",
  },
];
