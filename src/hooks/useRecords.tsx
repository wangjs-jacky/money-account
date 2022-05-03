import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

type RecordItem = {
  tagIds: string[];
  note: string;
  category: "+" | "-";
  amount: string;
  createAt: string; // IOS 8601
};

type newRecordItem = Omit<RecordItem, "createAt">;

// 专门用于缓存 Money 页面中被选中的数据
export const useRecords = () => {
  const [moneyRecords, setMoneyRecords] = useState<RecordItem[]>([]);
  //  读 records ，为了后续比较
  useEffect(() => {
    setMoneyRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);

  //  监听 records ,如果变化，则 写入 localStorage
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(moneyRecords));
  }, [moneyRecords]);

  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount === "0") {
      alert("请输入金额");
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      alert("请选择标签");
      return false;
    }
    const record = { ...newRecord, createAt: new Date().toISOString() }; // 存入 IOS 8601
    setMoneyRecords([...moneyRecords, record]);
    return true;
  };
  return { moneyRecords, addRecord };
};
