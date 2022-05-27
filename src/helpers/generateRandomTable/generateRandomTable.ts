import { TableEntryType } from "@/store/types";
import getRandomFloat from "../getRandomFloat";
import getRandomInt from "../getRandomInt";
import getRandomStringRussian from "../getRandomRussianString";
import { v4 as uuidv4 } from "uuid";
const priceCap = 1000;
const quantityCap = 100;

export const generateRandomTable = (num: number): TableEntryType[] => {
  const data: TableEntryType[] = [];
  for (let i = 0; i < num; i++) {
    const uuid = uuidv4();
    data.push({
      name: getRandomStringRussian(5),
      price: parseFloat(getRandomFloat(priceCap).toFixed(2)),
      quantity: getRandomInt(quantityCap),
      id: uuid,
    });
  }
  return data;
};
