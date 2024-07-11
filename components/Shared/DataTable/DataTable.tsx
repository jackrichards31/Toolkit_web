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
import { jsPDF as JSPDF } from "jspdf";
import { exportDataGrid as exportPDF } from "devextreme/pdf_exporter";
import React from "react";

const exportFormats = ["xlsx", "pdf"];

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
  } else if (e.format === "pdf") {
    const doc = new JSPDF();
    exportPDF({
      jsPDFDocument: doc,
      component: e.component,
    }).then(() => {
      doc.save("Merchant - MID.pdf");
    });
  }
};

const ExtremeDataTable = ({ type }: { type: string }) => {
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
        onRowClick={() => {}}
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
          fixed={true}
          dataType="number"
        />
        <Column
          dataField="FullName"
          caption="Full Name"
          dataType="string"
          fixed={true}
        />
        <Column
          dataField="Position"
          caption="Position"
          dataType="string"
          fixed={true}
        />
        <Column
          dataField="BirthDate"
          caption="Birth Date"
          dataType="date"
          fixed={true}
        />
        <Column
          dataField="City"
          caption="City"
          alignment="left"
          dataType="string"
          fixed={true}
        />
        <Column
          dataField="Country"
          caption="Country"
          alignment="left"
          dataType="string"
          fixed={true}
        />
      </DataGrid>
    </div>
  );
};

export default ExtremeDataTable;
