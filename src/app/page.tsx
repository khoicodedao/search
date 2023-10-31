"use client";
import { Card, Col, Row } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { Input, Space } from "antd";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
export default function Home() {
  const onSearch = (value: any, _e: any, info: any) =>
    console.log(info?.source, value);
  return (
    <main className="flex  flex-col items-center justify-between">
      <div style={{ width: "90%" }}>
        <Search
          placeholder="Tìm kiếm văn bản"
          allowClear
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </div>
    </main>
  );
}
