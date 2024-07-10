"use client";

import { employees } from "@/constants";
import DataGrid, {
  Column,
  ColumnFixing,
  Export,
  GroupPanel,
  HeaderFilter,
  Paging,
  SearchPanel,
} from "devextreme-react/cjs/data-grid";
import { Workbook } from "exceljs";
import saveAs from "file-saver";
import { exportDataGrid } from "devextreme/excel_exporter";
import React from "react";

const exportFormats = ["xlsx"];

const exportGrid = (e: any) => {
  if (e.format === "xlsx") {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet("Main sheet");
    exportDataGrid({
      worksheet,
      component: e.component,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(
          new Blob([buffer], { type: "application/octet-stream" }),
          "DataGrid.xlsx",
        );
      });
    });
    e.cancel = true;
  }
};

const ExtremeDataTable = () => {
  return (
    <div>
      <DataGrid
        dataSource={employees}
        id="dataGrid"
        keyExpr="EmployeeID"
        showBorders={false}
        columnAutoWidth={true}
        rowAlternationEnabled={true}
        onExporting={exportGrid}
        paging={{ pageSize: 10 }}
      >
        <ColumnFixing enabled={true} />
        <GroupPanel visible={true} />
        <HeaderFilter visible={true} />
        <SearchPanel visible={true} />
        <Export enabled={true} formats={exportFormats} />
        <Paging defaultPageSize={10} />
        <Column
          dataField="EmployeeID"
          caption="ID"
          alignment="left"
          dataType="number"
        />
        <Column dataField="FullName" caption="Full Name" dataType="string" />
        <Column dataField="Position" caption="Position" dataType="string" />
        <Column dataField="BirthDate" caption="Birth Date" dataType="date" />
        <Column
          dataField="City"
          caption="City"
          alignment="left"
          dataType="string"
        />
        <Column
          dataField="Country"
          caption="Country"
          alignment="left"
          dataType="string"
        />
      </DataGrid>
    </div>
  );
};

export default ExtremeDataTable;
