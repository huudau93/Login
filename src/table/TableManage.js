import React, { useState } from "react";
import { Table, Button } from "antd";
import fileicon from "../asset/image/file.png";
import "./TableManage.css";

const columns = [
  {
    title: "Ten người dùng",
    dataIndex: "name",
  },
  {
    title: "Danh mục",
    dataIndex: "list",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
  },
  {
    title: "Ngày tạo",
    dataIndex: "date",
  },
  {
    title: "Cập nhật cuối",
    dataIndex: "upload",
  },

  {
    title: () => (
      <div className="wrapperBtn">
        <button className="btn btn-primary">
          <img src={fileicon} alt="icon" style={{ marginRight: 11 }} />
          Tạo mẫu đề xuất
        </button>
      </div>
    ),
    dataIndex: "",
    key: "x",
    render: () => (
      <div className="wrapperBtn">
        <div
          style={{
            borderRight: "1px solid #EBEBF0",
          }}
        >
          <Button
            className="borderNone"
            type="primary "
            ghost
            style={{
              // border: "0px",
              boxShadow: "initial",
              border: 0,
            }}
          >
            Sửa
          </Button>
        </div>
        <Button
          style={{
            // border: "0px",
            boxShadow: "initial",
            border: 0,
          }}
          type="primary "
          ghost
        >
          Khóa
        </Button>
      </div>
    ),
  },
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Xin nghỉ ${i}`,
    list: 32,
    status: `Active`,
    date: new Date().toLocaleTimeString(),
    upload: new Date().toLocaleTimeString(),
    render: () => <a>Delete</a>,
  });
}

class TableManage extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: "odd",
          text: "Select Odd Row",
          onSelect: (changableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: "even",
          text: "Select Even Row",
          onSelect: (changableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    );
  }
}
export default TableManage;
