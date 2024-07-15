"use client";

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
import { Badge } from "@/components/ui/badge";

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

interface ExtremeDataTableProps<T> {
  pageSize: number;
  data: T[];
  columnsToDisplay?: (keyof T)[];
}

// For generating devExtreme data table
const isDate = (value: any): value is Date => {
  return value instanceof Date;
};

export const generateColumns = <T extends object>(
  data: T[],
  columnsToDisplay?: (keyof T)[],
) => {
  if (data.length === 0) return [];
  const keys = columnsToDisplay || (Object.keys(data[0]) as (keyof T)[]);
  return keys.map((key) => {
    let dataType: "string" | "number" | "date" | undefined = "string";
    if (typeof data[0][key] === "number") dataType = "number";
    if (isDate(data[0][key])) dataType = "date";
    const columnConfig: any = { dataField: key as string, dataType };

    // Add custom cellRender for specific columns
    if (key === "status") {
      columnConfig.cellRender = (cellData: any) => {
        const value = cellData.value;
        let variant:
          | "secondary"
          | "success"
          | "default"
          | "destructive"
          | "outline"
          | null
          | undefined = "secondary";
        if (
          value === "Success" ||
          value === "Shipped" ||
          value === "Fulfilled" ||
          value === "Processed" ||
          value === "Active"
        )
          variant = "success";
        if (value === "Denied" || value === "Cancelled")
          variant = "destructive";

        return (
          <Badge className="text-xs" variant={variant}>
            {value}
          </Badge>
        );
      };
    }

    return columnConfig;
  });
};

// Capitalize the first letter of the string
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * This is a dynamic DevExtreme data table.
 * Usage: data is required (data={exployee}), pageSize is required (pageSize={5}), and columnsToDisplay is not required but if you want to display some columns specifically instead of displaying them all.
 * You can declare it like this columnsToDisplay = {['id', 'title', 'name', ...]}
 * @data {your data}
 * @pageSize {5 (for example)}
 * @columnsToDisplay {['id', 'title', 'name', ...]}
 * @returns
 */
const ExtremeDataTable = <T extends object>({
  pageSize,
  data,
  columnsToDisplay,
}: ExtremeDataTableProps<T>) => {
  const columns = generateColumns(data, columnsToDisplay);

  return (
    <div>
      <DataGrid
        dataSource={data}
        id="dataGrid"
        showBorders={false}
        columnAutoWidth={true}
        rowAlternationEnabled={true}
        onExporting={exportGrid}
        paging={{ pageSize }}
        onRowClick={() => {}}
      >
        <ColumnFixing enabled={true} />
        <GroupPanel visible={true} />
        <HeaderFilter visible={true} />
        <SearchPanel visible={true} />
        <Export enabled={true} formats={exportFormats} />
        <Paging defaultPageSize={10} />
        {columns.map((col) => (
          <Column
            key={col.dataField}
            dataField={col.dataField}
            dataType={col.dataType}
            caption={capitalizeFirstLetter(
              col.dataField.replace(/([A-Z])/g, " $1").trim(),
            )}
            alignment="left"
            fixed={true}
            cellRender={col.cellRender}
          />
        ))}
      </DataGrid>
    </div>
  );
};

export default ExtremeDataTable;
