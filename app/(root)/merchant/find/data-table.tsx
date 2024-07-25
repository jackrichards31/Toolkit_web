// "use client";

// import MerchantDetails from "@/components/merchants/MerchantDetails";
// import MerchantSearch from "@/components/merchants/MerchantSearch";
// import ExtremeDataTable from "@/components/Shared/DataTable/DataTable";
// import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
// import { employees, merchantTabs } from "@/constants";
// import React from "react";

// export default function DataTable() {
//   return (
//     <div className="grid grid-cols-2 gap-5 max-2xl:grid-cols-1">
//       <div className="w-full rounded-md border p-5 max-sm:w-fit">
//         <Tabs defaultValue="mid" className="mb-4 w-full">
//           <TabsList className="w-full">
//             {merchantTabs.map((item) => (
//               <TabsTrigger
//                 key={item.value}
//                 value={item.value}
//                 className="w-full"
//               >
//                 {item.title}
//               </TabsTrigger>
//             ))}
//           </TabsList>
//           {merchantTabs.map((item) => (
//             <TabsContent key={item.value} value={item.value} className="mt-5">
//               <h1 className="font-semibold">Merchant - Find ({item.title})</h1>
//               <MerchantSearch type={item.title} />
//               <ExtremeDataTable
//                 pageSize={10}
//                 data={employees}
//                 columnsToDisplay={["EmployeeID", "FullName", "City", "Country"]}
//               />
//             </TabsContent>
//           ))}
//         </Tabs>
//       </div>

//       <div className="flex justify-center max-md:hidden">
//         <MerchantDetails />
//       </div>
//     </div>
//   );
// }
import React from "react";

const DataTable = () => {
  return <div></div>;
};

export default DataTable;
