"use client";
import { Card, Input, List } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { useEffect, useState } from "react";
import { Typography } from "antd";
import { Parser } from "html-to-react";
import axios from "axios";
type TDoc = {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: {
    content: string;
  };
};

type TSearch = [
  [
    {
      highlightedText: Array<string>;
    },
    {
      content: string;
    }
  ]
];
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const searchData = async (query: string) => {
  const requestData = {
    query,
  };
  try {
    const response = await axios.post(
      "/api/search",
      requestData // Pass data as query parameters
    );
    return response.data;
  } catch (error) {}
};
const { Paragraph } = Typography;
export default function Home() {
  const [data, setData] = useState<TDoc[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [search, SetSearch] = useState<TSearch>();

  useEffect(() => {
    fetch("/api/home")
      .then((response) => response.json())
      .then((data) => setData(data.data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const onSearch = async (value: string, _e: any, info: any) => {
    let res = await searchData(value);
    SetSearch(res);
  };
  const onChange = (e: any) => {
    console.log(e?.target.value);
    if (e?.target.value.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

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
          onChange={onChange}
        />
      </div>

      <div className="pt-4 " style={{ width: "90%" }}>
        {!isSearching ? (
          <Card title="Các văn bản mới">
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <a href="#">{item["_source"]?.content?.split("@")[0]}</a>
                    }
                    description={
                      item["_source"]?.content?.split("@")[1].slice(0, 100) +
                      "..."
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        ) : (
          <Card title="Kết quả tìm kiếm">
            <List
              itemLayout="horizontal"
              dataSource={search}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href="#">{item[1].content.split("@")[0]}</a>}
                    description={
                      <Typography>{item[0].highlightedText}</Typography>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        )}
      </div>
    </main>
  );
}
