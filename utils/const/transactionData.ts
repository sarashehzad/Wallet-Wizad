import { colors } from "../../theme/colors";

export const transactionsData = [
  {
    id: 1,
    amount: "-$1500",
    date: "12/11/2022",
    title: "Travel",
    subtitle: "Air USA",
    art: {
      background: colors.mainOrange,
      icon: "airplane",
    },
  },
  {
    id: 2,
    amount: "-$40",
    date: "22/12/2022",
    title: "Taxi",
    subtitle: "Uber",
    art: {
      background: colors.lightBlue,
      icon: "car",
    },
  },
  {
    id: 3,
    amount: "-$100",
    date: "12/1/2023",
    title: "Shopping",
    subtitle: "Amazon",
    art: {
      background: colors.accent,
      icon: "cart",
    },
  },
];
