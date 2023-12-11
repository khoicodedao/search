"use client";
import { Card, Input, List, Avatar } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { useEffect, useState } from "react";
import { Typography } from "antd";
import axios from "axios";
import Link from "next/link";
import { Button, Modal, Space } from "antd";
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
      highlightedText: string[];
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
  //============open detail=============
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  //==============end=====================
  useEffect(() => {
    fetch("/api/home")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const onSearch = async (value: string, _e: any, info: any) => {
    let res = await searchData(value);
    SetSearch(res);
  };
  const onChange = (e: any) => {
    if (e?.target.value.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  const Table = ({ data }: { data: string[] }) => {
    return (
      <table>
        <thead></thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <>{index + 1}. </>{" "}
              <td>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item,
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
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

      <div
        className="pt-4 "
        style={{ width: "90%", overflowX: "hidden", maxHeight: "75vh" }}
      >
        {!isSearching ? (
          <Card title="Các văn bản mới">
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-law-judge-emblem-justice-vector-png-image_34785100.png`}
                      />
                    }
                    title={
                      <Link
                        onClick={(e) => {
                          e.preventDefault();

                          Modal.confirm({
                            title: "Nội dung chính",
                            content: "",
                            footer: (_, { OkBtn, CancelBtn }) => (
                              <>
                                <div style={{ display: "flex" }}>
                                  <CancelBtn />
                                  <OkBtn />
                                </div>

                                {item["_source"]?.content?.split("@")[1]}
                              </>
                            ),
                          });
                        }}
                        className="ant-card-head-title uppercase font-bold max-w-full"
                        href="#"
                      >
                        {item["_source"]?.content?.split("@")[0]}
                      </Link>
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
                    avatar={
                      <Avatar
                        src={`https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-law-judge-emblem-justice-vector-png-image_34785100.png`}
                      />
                    }
                    title={
                      <Link
                        className="ant-card-head-title uppercase font-bold max-w-full"
                        href="#"
                      >
                        {item[1]?.content.split("@")[0]}
                      </Link>
                    }
                    description={
                      // <Typography>{item[0]?.highlightedText}</Typography>
                      // <div
                      //   dangerouslySetInnerHTML={{
                      //     __html: item[0]?.highlightedText,
                      //   }}
                      // />
                      <Table data={item[0]?.highlightedText} />
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
