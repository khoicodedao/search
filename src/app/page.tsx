"use client";
import { Card, Input, List } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { useEffect, useState } from "react";

type Doc = {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: {
    content: string;
  };
};

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
  const [data, setData] = useState<Doc[]>([]);
  useEffect(() => {
    fetch("/api/home")
      .then((response) => response.json())
      .then((data) => setData(data.data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const onSearch = (value: any, _e: any, info: any) =>
    console.log(info?.source, value);
  return (
    <main className="flex  flex-col items-center">
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

      <div className="pt-4 ">
        <Card title="Các văn bản mới" size="default" style={{ width: 450 }}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <a href="https://ant.design">
                      {item["_source"]?.content?.split("@")[0]}
                    </a>
                  }
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    </main>
  );
}
