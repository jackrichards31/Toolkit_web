// pages/index.tsx
import React from "react";
import DataGrid, { Column, Paging, Pager } from "devextreme-react/data-grid";

const data = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
];

const DataTable: React.FC = () => {
  return (
    <div>
      <h1>DevExtreme DataGrid Example</h1>
      <DataGrid dataSource={data} keyExpr="id" showBorders={true}>
        <Column dataField="id" caption="ID" />
        <Column dataField="name" caption="Name" />
        <Column dataField="age" caption="Age" />
        <Paging enabled={true} />
        <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 20]} />
      </DataGrid>
    </div>
  );
};

export default DataTable;
