import { SidebarLink } from "@/types";
import {
  Store,
  FileDown,
  UserCog,
  User,
  Barcode,
  CpuIcon,
  BadgeDollarSign,
  Calendar,
  FileText,
  Drill,
  Headset,
  HandPlatter,
  Home,
} from "lucide-react";
import { z } from "zod";

export const themes = [
  { value: "light", label: "Light", icon: "icon/sun.svg" },
  { value: "dark", label: "Dark", icon: "icon/moon.svg" },
  { value: "system", label: "System", icon: "icon/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    icon: Home,
    route: "/",
    desc: "Home page",
    label: "Home",
    options: [],
  },
  {
    icon: Store,
    route: "/merchant/find",
    desc: "Find MID, Agent, and Processor.",
    label: "Merchant",
    options: ["MID", "Agent", "Processor"],
  },
  {
    icon: Drill,
    route: "/equipment",
    desc: "Equipments",
    label: "Equipment",
    options: [],
  },
  {
    icon: Headset,
    route: "/agent",
    desc: "Agents",
    label: "Agent",
    options: [],
  },
  {
    icon: BadgeDollarSign,
    route: "/financial",
    desc: "Financial",
    label: "Financial",
    options: [],
  },
  {
    icon: HandPlatter,
    route: "/services",
    desc: "Services",
    label: "Services",
    options: [],
  },
  {
    icon: FileDown,
    route: "/fsp",
    desc: "Report the FSP",
    label: "FSP",
    options: ["FSP"],
  },
  {
    icon: UserCog,
    route: "/admin",
    desc: "Admin panel",
    label: "Admin",
    options: ["Admin"],
  },
];

export const profileLinks = [
  {
    title: "Profile",
    url: "/profile",
  },
  {
    title: "Settings",
    url: "/settings",
  },
  {
    title: "Logout",
    url: "/logout",
  },
];

export const merchantTabs = [
  {
    icons: Barcode,
    title: "MID",
    value: "mid",
  },
  {
    icons: User,
    title: "Agent",
    value: "agent",
  },
  {
    icons: CpuIcon,
    title: "Processor",
    value: "processor",
  },
  {
    icons: Calendar,
    title: "Created Date",
    value: "created_at",
  },
  {
    icons: FileText,
    title: "Reports",
    value: "reports",
  },
];

export const merchantMainTabs = [
  {
    title: "Find",
    value: "find",
    route: "/merchant/find"
  },
  {
    title: "Summary",
    value: "summary",
    route: "/merchant/summary"
  },
  {
    title: "Information",
    value: "information",
    route: "/merchant/information/info"
  },
  {
    title: "Reports",
    value: "reports",
    route: "/merchant/reports"
  }
];
/**
 * This employees data is for mock-up data only!
 */
export const employees = [
  {
    EmployeeID: 1,
    FullName: "Nancy Davolio",
    Position: "Sales Representative",
    TitleOfCourtesy: "Ms.",
    BirthDate: "1968-12-08T00:00:00.000Z",
    HireDate: "2011-05-01T00:00:00.000Z",
    Address: "507 - 20th Ave. E.\r\nApt. 2A",
    City: "Seattle",
    Region: "WA",
    PostalCode: "98122",
    Country: "USA",
    HomePhone: "(206) 555-9857",
    Extension: "5467",
    Photo:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
    Notes:
      'Education includes a BA in psychology from Colorado State University in 1990.  She also completed "The Art of the Cold Call."  Nancy is a member of Toastmasters International.',
    ReportsTo: 2,
  },
  {
    EmployeeID: 2,
    FullName: "Andrew Fuller",
    Position: "Vice President, Sales",
    TitleOfCourtesy: "Dr.",
    BirthDate: "1972-02-19T00:00:00.000Z",
    HireDate: "2011-08-14T00:00:00.000Z",
    Address: "908 W. Capital Way",
    City: "Tacoma",
    Region: "WA",
    PostalCode: "98401",
    Country: "USA",
    HomePhone: "(206) 555-9482",
    Extension: "3457",
    Photo:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/02.png",
    Notes:
      "Andrew received his BTS commercial in 1994 and a Ph.D. in international marketing from the University of Dallas in 2001.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 2012 and to vice president of sales in March 2013.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.",
    ReportsTo: null,
  },
  {
    EmployeeID: 3,
    FullName: "Janet Leverling",
    Position: "Sales Representative",
    TitleOfCourtesy: "Ms.",
    BirthDate: "1983-08-30T00:00:00.000Z",
    HireDate: "2011-04-01T00:00:00.000Z",
    Address: "722 Moss Bay Blvd.",
    City: "Kirkland",
    Region: "WA",
    PostalCode: "98033",
    Country: "USA",
    HomePhone: "(206) 555-3412",
    Extension: "3355",
    Photo:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/09.png",
    Notes:
      "Janet has a BS degree in chemistry from Boston College (2004).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 2011 and promoted to sales representative in February 2012.",
    ReportsTo: 2,
  },
  {
    EmployeeID: 4,
    FullName: "Margaret Peacock",
    Position: "Sales Representative",
    TitleOfCourtesy: "Mrs.",
    BirthDate: "1957-09-19T00:00:00.000Z",
    HireDate: "2012-05-03T00:00:00.000Z",
    Address: "4110 Old Redmond Rd.",
    City: "Redmond",
    Region: "WA",
    PostalCode: "98052",
    Country: "USA",
    HomePhone: "(206) 555-8122",
    Extension: "5176",
    Photo:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/04.png",
    Notes:
      "Margaret holds a BA in English literature from Concordia College (1978) and an MA from the American Institute of Culinary Arts (1986).  She was assigned to the London office temporarily from July through November 2012.",
    ReportsTo: 2,
  },
  {
    EmployeeID: 5,
    FullName: "Steven Buchanan",
    Position: "Sales Manager",
    TitleOfCourtesy: "Mr.",
    BirthDate: "1975-03-04T00:00:00.000Z",
    HireDate: "2012-10-17T00:00:00.000Z",
    Address: "14 Garrett Hill",
    City: "London",
    Region: "UK",
    PostalCode: "SW1 8JR",
    Country: "UK",
    HomePhone: "(71) 555-4848",
    Extension: "3453",
    Photo:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/05.png",
    Notes:
      'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1996.  Upon joining the company as a sales representative in 2012, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 2013.  Mr. Buchanan has completed the courses "Successful Telemarketing" and "International Sales Management."  He is fluent in French.',
    ReportsTo: 2,
  },
  {
    EmployeeID: 6,
    FullName: "Michael Suyama",
    Position: "Sales Representative",
    TitleOfCourtesy: "Mr.",
    BirthDate: "1983-07-02T00:00:00.000Z",
    HireDate: "2012-10-17T00:00:00.000Z",
    Address: "Coventry House\r\nMiner Rd.",
    City: "London",
    Region: "UK",
    PostalCode: "EC2 7JR",
    Country: "UK",
    HomePhone: "(71) 555-7773",
    Extension: "428",
    Photo:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png",
    Notes:
      'Michael is a graduate of Sussex University (MA, economics, 2003) and the University of California at Los Angeles (MBA, marketing, 2006). He has also taken the courses "Multi-Cultural Selling" and "Time Management for the Sales Professional."  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
    ReportsTo: 5,
  },
  {
    EmployeeID: 7,
    FullName: "Robert King",
    Position: "Sales Representative",
    TitleOfCourtesy: "Mr.",
    BirthDate: "1980-05-29T00:00:00.000Z",
    HireDate: "2012-01-02T00:00:00.000Z",
    Address: "Edgeham Hollow\r\nWinchester Way",
    City: "London",
    Region: "UK",
    PostalCode: "RG1 9SP",
    Country: "UK",
    HomePhone: "(71) 555-5598",
    Extension: "465",
    Photo:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/07.png",
    Notes:
      'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 2002, the year he joined the company.  After completing a course entitled "Selling in Europe," he was transferred to the London office in March 2013.',
    ReportsTo: 5,
  },
  {
    EmployeeID: 8,
    FullName: "Laura Callahan",
    Position: "Inside Sales Coordinator",
    TitleOfCourtesy: "Ms.",
    BirthDate: "1978-01-09T00:00:00.000Z",
    HireDate: "2012-03-05T00:00:00.000Z",
    Address: "4726 - 11th Ave. N.E.",
    City: "Seattle",
    Region: "WA",
    PostalCode: "98105",
    Country: "USA",
    HomePhone: "(206) 555-1189",
    Extension: "2344",
    Photo:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/08.png",
    Notes:
      "Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.",
    ReportsTo: 2,
  },
  {
    EmployeeID: 9,
    FullName: "Brett Wade",
    Position: "Sales Representative",
    TitleOfCourtesy: "Mr.",
    BirthDate: "1986-01-27T00:00:00.000Z",
    HireDate: "2012-11-15T00:00:00.000Z",
    Address: "7 Houndstooth Rd.",
    City: "London",
    Region: "UK",
    PostalCode: "WG2 7LT",
    Country: "UK",
    HomePhone: "(71) 555-4444",
    Extension: "452",
    Photo:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/03.png",
    Notes:
      "Brett has a BA degree in English from St. Lawrence College.  He is fluent in French and German.",
    ReportsTo: 5,
  },
];

export const equipmentData = [
  {
    id: 1,
    name: "Laptop",
    brand: "Dell",
    model: "XPS 15",
    purchaseDate: new Date("2021-01-15"),
    warrantyExpiration: new Date("2023-01-15"),
    status: "Operational",
    location: "Office A",
    assignedTo: "John Doe",
    price: 1500,
    serialNumber: "SN12345678",
  },
  {
    id: 2,
    name: "Monitor",
    brand: "Samsung",
    model: "Odyssey G9",
    purchaseDate: new Date("2020-12-05"),
    warrantyExpiration: new Date("2022-12-05"),
    status: "Operational",
    location: "Office B",
    assignedTo: "Jane Smith",
    price: 1200,
    serialNumber: "SN87654321",
  },
  {
    id: 3,
    name: "Printer",
    brand: "HP",
    model: "LaserJet Pro",
    purchaseDate: new Date("2019-08-20"),
    warrantyExpiration: new Date("2021-08-20"),
    status: "Operational",
    location: "Office C",
    assignedTo: "Bob Johnson",
    price: 300,
    serialNumber: "SN11223344",
  },
  {
    id: 4,
    name: "Router",
    brand: "Cisco",
    model: "RV340",
    purchaseDate: new Date("2018-05-10"),
    warrantyExpiration: new Date("2021-05-10"),
    status: "Operational",
    location: "Server Room",
    assignedTo: "IT Dept",
    price: 600,
    serialNumber: "SN55667788",
  },
  {
    id: 5,
    name: "Server",
    brand: "IBM",
    model: "X3650 M5",
    purchaseDate: new Date("2017-02-14"),
    warrantyExpiration: new Date("2020-02-14"),
    status: "Operational",
    location: "Data Center",
    assignedTo: "IT Dept",
    price: 5000,
    serialNumber: "SN99887766",
  },
  {
    id: 6,
    name: "Keyboard",
    brand: "Logitech",
    model: "MX Keys",
    purchaseDate: new Date("2020-09-30"),
    warrantyExpiration: new Date("2021-09-30"),
    status: "Operational",
    location: "Office A",
    assignedTo: "John Doe",
    price: 100,
    serialNumber: "SN33221144",
  },
  {
    id: 7,
    name: "Mouse",
    brand: "Logitech",
    model: "MX Master 3",
    purchaseDate: new Date("2020-09-30"),
    warrantyExpiration: new Date("2021-09-30"),
    status: "Operational",
    location: "Office B",
    assignedTo: "Jane Smith",
    price: 100,
    serialNumber: "SN44332211",
  },
  {
    id: 8,
    name: "Tablet",
    brand: "Apple",
    model: "iPad Pro",
    purchaseDate: new Date("2019-11-20"),
    warrantyExpiration: new Date("2021-11-20"),
    status: "Operational",
    location: "Office D",
    assignedTo: "Alice Green",
    price: 900,
    serialNumber: "SN55443322",
  },
  {
    id: 9,
    name: "Projector",
    brand: "Epson",
    model: "EB-X05",
    purchaseDate: new Date("2018-07-25"),
    warrantyExpiration: new Date("2021-07-25"),
    status: "Operational",
    location: "Conference Room",
    assignedTo: "IT Dept",
    price: 400,
    serialNumber: "SN66554433",
  },
  {
    id: 10,
    name: "Camera",
    brand: "Canon",
    model: "EOS 80D",
    purchaseDate: new Date("2017-10-15"),
    warrantyExpiration: new Date("2019-10-15"),
    status: "Operational",
    location: "Office E",
    assignedTo: "David White",
    price: 1000,
    serialNumber: "SN77665544",
  },
  {
    id: 11,
    name: "Laptop",
    brand: "Apple",
    model: "MacBook Pro",
    purchaseDate: new Date("2021-02-10"),
    warrantyExpiration: new Date("2023-02-10"),
    status: "Operational",
    location: "Office F",
    assignedTo: "Eve Brown",
    price: 2000,
    serialNumber: "SN88776655",
  },
  {
    id: 12,
    name: "Smartphone",
    brand: "Samsung",
    model: "Galaxy S21",
    purchaseDate: new Date("2021-04-01"),
    warrantyExpiration: new Date("2022-04-01"),
    status: "Operational",
    location: "Office G",
    assignedTo: "Charlie Black",
    price: 800,
    serialNumber: "SN99887744",
  },
  {
    id: 13,
    name: "Switch",
    brand: "Netgear",
    model: "GS308",
    purchaseDate: new Date("2020-06-15"),
    warrantyExpiration: new Date("2021-06-15"),
    status: "Operational",
    location: "Server Room",
    assignedTo: "IT Dept",
    price: 50,
    serialNumber: "SN11224433",
  },
  {
    id: 14,
    name: "Docking Station",
    brand: "Dell",
    model: "WD19",
    purchaseDate: new Date("2019-03-30"),
    warrantyExpiration: new Date("2021-03-30"),
    status: "Operational",
    location: "Office H",
    assignedTo: "Ivy Blue",
    price: 200,
    serialNumber: "SN22334455",
  },
  {
    id: 15,
    name: "Speakers",
    brand: "Bose",
    model: "Companion 2",
    purchaseDate: new Date("2018-11-05"),
    warrantyExpiration: new Date("2020-11-05"),
    status: "Operational",
    location: "Office I",
    assignedTo: "Jack Orange",
    price: 150,
    serialNumber: "SN33445566",
  },
  {
    id: 16,
    name: "Laptop",
    brand: "Lenovo",
    model: "ThinkPad X1",
    purchaseDate: new Date("2021-08-19"),
    warrantyExpiration: new Date("2023-08-19"),
    status: "Operational",
    location: "Office J",
    assignedTo: "Grace Violet",
    price: 1700,
    serialNumber: "SN44556677",
  },
  {
    id: 17,
    name: "Headphones",
    brand: "Sony",
    model: "WH-1000XM4",
    purchaseDate: new Date("2020-12-15"),
    warrantyExpiration: new Date("2021-12-15"),
    status: "Operational",
    location: "Office K",
    assignedTo: "Ken Gold",
    price: 300,
    serialNumber: "SN55667788",
  },
  {
    id: 18,
    name: "Scanner",
    brand: "Brother",
    model: "ADS-2700W",
    purchaseDate: new Date("2019-05-25"),
    warrantyExpiration: new Date("2021-05-25"),
    status: "Operational",
    location: "Office L",
    assignedTo: "Helen Cyan",
    price: 400,
    serialNumber: "SN66778899",
  },
  {
    id: 19,
    name: "External HDD",
    brand: "Seagate",
    model: "Backup Plus",
    purchaseDate: new Date("2020-02-28"),
    warrantyExpiration: new Date("2021-02-28"),
    status: "Operational",
    location: "Server Room",
    assignedTo: "IT Dept",
    price: 100,
    serialNumber: "SN77889900",
  },
  {
    id: 20,
    name: "Projector",
    brand: "BenQ",
    model: "TK850",
    purchaseDate: new Date("2019-09-10"),
    warrantyExpiration: new Date("2021-09-10"),
    status: "Operational",
    location: "Conference Room",
    assignedTo: "IT Dept",
    price: 1200,
    serialNumber: "SN88990011",
  },
];

export const agentData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1-555-1234",
    department: "Sales",
    status: "Active",
    location: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1-555-5678",
    department: "Support",
    status: "Active",
    location: "Los Angeles",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "+1-555-8765",
    department: "Marketing",
    status: "Inactive",
    location: "Chicago",
  },
  {
    id: 4,
    name: "Alice Green",
    email: "alice.green@example.com",
    phone: "+1-555-4321",
    department: "Development",
    status: "Active",
    location: "San Francisco",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    phone: "+1-555-6789",
    department: "HR",
    status: "Inactive",
    location: "Houston",
  },
  {
    id: 6,
    name: "Eve Black",
    email: "eve.black@example.com",
    phone: "+1-555-9876",
    department: "Sales",
    status: "Active",
    location: "Phoenix",
  },
  {
    id: 7,
    name: "David White",
    email: "david.white@example.com",
    phone: "+1-555-5432",
    department: "Support",
    status: "Inactive",
    location: "Philadelphia",
  },
  {
    id: 8,
    name: "Helen Blue",
    email: "helen.blue@example.com",
    phone: "+1-555-6543",
    department: "Marketing",
    status: "Active",
    location: "San Antonio",
  },
  {
    id: 9,
    name: "Ken Yellow",
    email: "ken.yellow@example.com",
    phone: "+1-555-3456",
    department: "Development",
    status: "Active",
    location: "Dallas",
  },
  {
    id: 10,
    name: "Grace Red",
    email: "grace.red@example.com",
    phone: "+1-555-2345",
    department: "HR",
    status: "Inactive",
    location: "San Diego",
  },
];

// formField for dynamic fields
export const AgentSetupFields = [
  {
    name: "exludeClosedAgents",
    label: "Exclude Closed Agents",
    type: "checkbox",
    defaultValue: "",
    validation: z.string().nonempty("Display Name is required"),
  },
  {
    name: "findAgent",
    label: "Find Agent",
    type: "select",
    options: ["Agent 1", "Agent 2", "Agent 3"],
    defaultValue: "",
    validation: z.string().nonempty("Display Name is required"),
  },
  {
    name: "displayName",
    label: "Display Name",
    type: "text",
    defaultValue: "",
    validation: z.string().nonempty("Display Name is required"),
  },
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    defaultValue: "",
    validation: z.string().nonempty("First Name is required"),
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    defaultValue: "",
    validation: z.string().nonempty("Last Name is required"),
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    defaultValue: "",
    validation: z.string().email("Invalid email address"),
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: ["Active", "Inactive"],
    defaultValue: "",
    validation: z.string().nonempty("Status is required"),
  },
  {
    name: "startDate",
    label: "Start Date",
    type: "date",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "endDate",
    label: "End Date",
    type: "date",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "address1",
    label: "Address 1",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "address2",
    label: "Address 2",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "city",
    label: "City",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "state",
    label: "State",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "zip",
    label: "Zip",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "routing",
    label: "Routing #",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "account",
    label: "Account #",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "ssn",
    label: "SSN / EIN",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "payDay",
    label: "Pay Day",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "payGroup",
    label: "Pay Group",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "msoId",
    label: "MSO ID",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "reportType",
    label: "Report Type",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "payrollId",
    label: "Payroll ID",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "agentId",
    label: "Agent ID",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "note",
    label: "Note",
    type: "textarea",
    defaultValue: "",
    validation: z.string().optional(),
  },
];

// Merchant data

const merchantStatusList =
  [
    { "id": 1, "name": "ACH Reject", "value": "achReject" },
    { "id": 2, "name": "Agent Request", "value": "agentRequest" },
    { "id": 3, "name": "Approved", "value": "approved" },
    { "id": 4, "name": "Closed", "value": "closed" },
    { "id": 5, "name": "Closed Location", "value": "closedLocation" },
    { "id": 6, "name": "Corporate Change (new MID)", "value": "corporateChangeNewMid" },
    { "id": 7, "name": "Cost of EMV equipment", "value": "costOfEmvEquipment" },
    { "id": 8, "name": "Customer service related issue", "value": "customerServiceRelatedIssue" },
    { "id": 9, "name": "Decline", "value": "decline" },
    { "id": 10, "name": "Deleted", "value": "deleted" },
    { "id": 11, "name": "Did not agree to terms during verbal", "value": "didNotAgreeToTermsDuringVerbal" },
    { "id": 12, "name": "Duplicate MID", "value": "duplicateMid" },
    { "id": 13, "name": "Equipment issues", "value": "equipmentIssues" },
    { "id": 14, "name": "Equipment not compatible / Does not integrate", "value": "equipmentNotCompatibleDoesNotIntegrate" },
    { "id": 15, "name": "Fees not disclosed by rep", "value": "feesNotDisclosedByRep" },
    { "id": 16, "name": "Fees / Rates", "value": "feesRates" },
    { "id": 17, "name": "Fulfilled contract", "value": "fulfilledContract" },
    { "id": 18, "name": "Has not used services in months", "value": "hasNotUsedServicesInMonths" },
    { "id": 19, "name": "Keying error/re-keyed", "value": "keyingErrorReKeyed" },
    { "id": 20, "name": "Lease buyback", "value": "leaseBuyback" },
    { "id": 21, "name": "Moved to North", "value": "movedToNorth" },
    { "id": 22, "name": "Multiple MIDS - Only needs single", "value": "multipleMidsOnlyNeedsSingle" },
    { "id": 23, "name": "Nacha Rejects (FD Closing)", "value": "nachaRejectsFdClosing" },
    { "id": 24, "name": "Never authorized/never accepted credit cards", "value": "neverAuthorizedNeverAcceptedCreditCards" },
    { "id": 25, "name": "New POS", "value": "newPos" },
    { "id": 26, "name": "Not accepting credit cards", "value": "notAcceptingCreditCards" },
    { "id": 27, "name": "Not approved for cash advance", "value": "notApprovedForCashAdvance" },
    { "id": 28, "name": "Not Approved for Lease", "value": "notApprovedForLease" },
    { "id": 29, "name": "Not using services", "value": "notUsingServices" },
    { "id": 30, "name": "Other - Refer to Notes", "value": "otherReferToNotes" },
    { "id": 31, "name": "Out of business", "value": "outOfBusiness" },
    { "id": 32, "name": "Pending", "value": "pending" },
    { "id": 33, "name": "Per Data One Request", "value": "perDataOneRequest" },
    { "id": 34, "name": "Per Mandi", "value": "perMandi" },
    { "id": 35, "name": "Per Micah Request", "value": "perMicahRequest" },
    { "id": 36, "name": "Per NPA", "value": "perNpa" },
    { "id": 37, "name": "Per Russ Request", "value": "perRussRequest" },
    { "id": 38, "name": "Per Tiffany Request", "value": "perTiffanyRequest" },
    { "id": 39, "name": "Per UPA", "value": "perUpa" },
    { "id": 40, "name": "Received", "value": "received" },
    { "id": 41, "name": "Risk Related Issue", "value": "riskRelatedIssue" },
    { "id": 42, "name": "Seasonal business", "value": "seasonalBusiness" },
    { "id": 43, "name": "Sold business", "value": "soldBusiness" },
    { "id": 44, "name": "Submitted", "value": "submitted" },
    { "id": 45, "name": "Switched ISO", "value": "switchedIso" },
    { "id": 46, "name": "Withdrawn", "value": "withdrawn" },
    { "id": 47, "name": "Withdran App", "value": "withdranApp" }
  ]

const merchantProcessorList =
  [
    { id: 1, name: "First National Bank", value: "firstNationalBank" },
    { id: 2, name: "Global Trust Bank", value: "globalTrustBank" },
    { id: 3, name: "United Savings Bank", value: "unitedSavingsBank" },
    { id: 4, name: "Prime Financial Group", value: "primeFinancialGroup" },
    { id: 5, name: "Evergreen Bank", value: "evergreenBank" },
    { id: 6, name: "Central Credit Union", value: "centralCreditUnion" },
    { id: 7, name: "Liberty Bank", value: "libertyBank" },
    { id: 8, name: "Oakwood Financial", value: "oakwoodFinancial" },
    { id: 9, name: "Summit Bank", value: "summitBank" },
    { id: 10, name: "Pinnacle Bank", value: "pinnacleBank" }
  ]

const salesRepList =
  [
    { id: 1, name: "John Smith", value: "johnSmith" },
    { id: 2, name: "Emily Johnson", value: "emilyJohnson" },
    { id: 3, name: "Michael Brown", value: "michaelBrown" },
    { id: 4, name: "Jessica Davis", value: "jessicaDavis" },
    { id: 5, name: "David Wilson", value: "davidWilson" },
    { id: 6, name: "Sarah Martinez", value: "sarahMartinez" },
    { id: 7, name: "James Taylor", value: "jamesTaylor" },
    { id: 8, name: "Laura Anderson", value: "lauraAnderson" },
    { id: 9, name: "Robert Thomas", value: "robertThomas" },
    { id: 10, name: "Sophia Lee", value: "sophiaLee" }
  ]

const leadSourceList =
  [
    { id: 1, name: "Innovatech Solutions", value: "innovatechSolutions" },
    { id: 2, name: "Blue Horizon Enterprises", value: "blueHorizonEnterprises" },
    { id: 3, name: "Quantum Dynamics", value: "quantumDynamics" },
    { id: 4, name: "Pinnacle Innovations", value: "pinnacleInnovations" },
    { id: 5, name: "Vertex Global", value: "vertexGlobal" },
    { id: 6, name: "Synergy Networks", value: "synergyNetworks" },
    { id: 7, name: "Apex Ventures", value: "apexVentures" },
    { id: 8, name: "NexGen Technologies", value: "nexGenTechnologies" },
    { id: 9, name: "Summit Strategies", value: "summitStrategies" },
    { id: 10, name: "Eclipse Enterprises", value: "eclipseEnterprises" }
  ]

const splitNameList =
  [
    { id: 1, name: "Innovatech Solutions", value: "innovatechSolutions" },
    { id: 2, name: "Blue Horizon Enterprises", value: "blueHorizonEnterprises" },
  ]

const deployByList =
  [
    { id: 1, name: "MiCamp Solutions", value: "micamp" },
    { id: 2, name: "Agent", value: "Agent" },
  ]

const mccCode =
  [
    { id: 1, name: "American Airlines", value: "americanAirlines" },
    { id: 2, name: "Delta Air Lines", value: "deltaAirLines" },
    { id: 3, name: "United Airlines", value: "unitedAirlines" },
    { id: 4, name: "Southwest Airlines", value: "southwestAirlines" },
    { id: 5, name: "Alaska Airlines", value: "alaskaAirlines" },
    { id: 6, name: "JetBlue Airways", value: "jetBlueAirways" },
    { id: 7, name: "Frontier Airlines", value: "frontierAirlines" },
    { id: 8, name: "Spirit Airlines", value: "spiritAirlines" },
    { id: 9, name: "Allegiant Air", value: "allegiantAir" },
    { id: 10, name: "Hawaiian Airlines", value: "hawaiianAirlines" }
  ]

const accountStatusTable = [
  {
    Id: 1,
    Date: "04/12/2024",
    UserID: "hsouza",
    SQL: 'Approved'
  },
  {
    Id: 2,
    Date: "04/05/2024",
    UserID: "hsouza",
    SQL: 'Pending'
  },
  {
    Id: 3,
    Date: "04/05/2024",
    UserID: "hsouza",
    SQL: 'Merchant Record created!'
  },
]

const activityRecordList = [
  {
    id: 1,
    title: "Mark as Closed",
    value: "closed",
  },
  {
    id: 2,
    title: "Mark as Declined",
    value: "declined",
  },
  {
    id: 3,
    title: "Mark as Pending",
    value: "pending",
  },
  {
    id: 4,
    title: "Mark as Application Received",
    value: "applicationReceived",
  },
  {
    id: 5,
    title: "Mark as Withdrawn",
    value: "withdrawn",
  },
  {
    id: 6,
    title: "Application Submitted",
    value: "applicationSubmitted",
  },
  {
    id: 7,
    title: "Duplicate MID",
    value: "duplicateMID",
  },
  {
    id: 8,
    title: "Risk Related",
    value: "riskRelated",
  },

]

const callLogsTasks = [
  {
    Id: 1234,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "Supplies Order",
    TaskDescription: "Note",
    Status: "Completed",
    Notes: "Note about this event.",
  },
  {
    Id: 1235,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "General Notes",
    TaskDescription: "Note",
    Status: "Active",
    Notes: "Note about this event. Note about this event.",
  },
  {
    Id: 1234,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "Supplies Order",
    TaskDescription: "Note",
    Status: "Completed",
    Notes: "Note about this event.",
  },
  {
    Id: 1235,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "General Notes",
    TaskDescription: "Note",
    Status: "Active",
    Notes: "Note about this event. Note about this event.",
  },
  {
    Id: 1234,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "Supplies Order",
    TaskDescription: "Note",
    Status: "Completed",
    Notes: "Note about this event.",
  },
  {
    Id: 1235,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "General Notes",
    TaskDescription: "Note",
    Status: "Active",
    Notes: "Note about this event. Note about this event.",
  },
  {
    Id: 1234,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "Supplies Order",
    TaskDescription: "Note",
    Status: "Completed",
    Notes: "Note about this event.",
  }
]

const zenDeskTable = [
  {
    createdDate: "mm/dd/yyyy",
    from: "support@micamp.com",
    name: "Tony Stark",
    subject: "Some subject about it"
  },
  {
    createdDate: "mm/dd/yyyy",
    from: "support@micamp.com",
    name: "George Harrison",
    subject: "Some subject about it"
  },
  {
    createdDate: "mm/dd/yyyy",
    from: "support@micamp.com",
    name: "Jimmy Page",
    subject: "Some subject about it"
  },
]

const leasingTable1 = [
  {
    LeaseNumber: "",
    FundedDate: "",
    Funded$: "",
    TSR: "",
    BuybackDate: "",
    Buyback$: "",
    Score: "",
    Grade: "",
    TSR$: "",
    Term: "",
    Factor: "",
  }
]

const leasingTable2 = [
  {
    Order: "",
    OrderDate: "",
    Status: "",
  }
]

const leasingTable3 = [
  {
    MakeModel: "",
    Serial: "",
    Status: "",
  }
]

const equipmentTable1 = [
  {
    StartDate: "07/26/2024",
    Status: "5 - Complete",
    $Cost: 235.00,
    $Pay: 235.00,
  },
  {
    StartDate: "07/26/2024",
    Status: "5 - Complete",
    $Cost: 235.00,
    $Pay: 235.00,
  },
  {
    StartDate: "07/26/2024",
    Status: "3 - In Progress",
    $Cost: 235.00,
    $Pay: 235.00,
  }
]
const equipmentTable2 = [
  {
    Model: "Clover Flex LTE",
    SerialNumber: "C0450254TT320165184",
    Condition: "New",
    $Orig: 235.00,
    $Sale: 235.00,
  },
  {
    Model: "Shipping Expedited Fee",
    SerialNumber: "C0450254TT320165184",
    Condition: "New",
    $Orig: 30.00,
    $Sale: 30.00,
  },
  {
    Model: "Clover Flex LTE",
    SerialNumber: "C0450254TT320165184",
    Condition: "New",
    $Orig: 235.00,
    $Sale: 235.00,
  },
  {
    Model: "Shipping Expedited Fee",
    SerialNumber: "C0450254TT320165184",
    Condition: "New",
    $Orig: 30.00,
    $Sale: 30.00,
  },
]
const equipmentTable3 = [
  {
    Method: "MiCamp--",
    InitialDate: "07/26/2024",
    AmountDue: 235.00,
    AmountPaid: 235.00,
    Split: 235.00,
    Note: "Approved By myself",
  },
  {
    Method: "MiCamp--",
    InitialDate: "07/26/2024",
    AmountDue: 235.00,
    AmountPaid: 235.00,
    Split: 235.00,
    Note: "Approved By myself",
  },
  {
    Method: "MiCamp--",
    InitialDate: "07/26/2024",
    AmountDue: 235.00,
    AmountPaid: 235.00,
    Split: 235.00,
    Note: "Approved By myself",
  },
  {
    Method: "MiCamp--",
    InitialDate: "07/26/2024",
    AmountDue: 235.00,
    AmountPaid: 235.00,
    Split: 235.00,
    Note: "Approved By myself",
  },
]

const equipmentList1 = [
  {
    id: 1,
    title: "New",
    value: "closed",
  },
  {
    id: 2,
    title: "Returned/Used",
    value: "returnedUsed",
  },
  {
    id: 3,
    title: "Returned/Junk",
    value: "returnedJunk",
  },
  {
    id: 4,
    title: "Returned to Manufactor",
    value: "returnedToManufactor",
  },
]

const onboardCheckListTable = [
  {
    checkbox: "",
    ID: "123654789",
    Description: "WAVit Document",
    ID2: "12356",
    Documents: "file.pdf",
  },
  {
    checkbox: "",
    ID: "123654789",
    Description: "WAVit Document",
    ID2: "12356",
    Documents: "file.pdf",
  },
  {
    checkbox: "",
    ID: "123654789",
    Description: "WAVit Document",
    ID2: "12356",
    Documents: "file.pdf",
  },
  {
    checkbox: "",
    ID: "123654789",
    Description: "WAVit Document",
    ID2: "12356",
    Documents: "file.pdf",
  },
  {
    checkbox: "",
    ID: "123654789",
    Description: "WAVit Document",
    ID2: "12356",
    Documents: "file.pdf",
  },
]

const documentsTable = [
  {
    DocType: "Bank Statement",
    Historic: "Historic Field",
    DocName: "Statement.pdf",
    FileSize: "500 mb",
    UploadDateTime: "07/26/2024 11:22 AM",
  },
  {
    DocType: "Identification",
    Historic: "Historic Field",
    DocName: "ID.pdf",
    FileSize: "40 mb",
    UploadDateTime: "07/26/2024 11:22 AM",
  },
  {
    DocType: "Certification",
    Historic: "Historic Field",
    DocName: "Certification.pdf",
    FileSize: "751 mb",
    UploadDateTime: "07/26/2024 11:22 AM",
  },
  {
    DocType: "Leasing",
    Historic: "Historic Field",
    DocName: "Leasing.pdf",
    FileSize: "500 mb",
    UploadDateTime: "07/26/2024 11:22 AM",
  },
]

const rejectCollectionsTable1 = [
  {
    SuspenseDate: "07/26/2024",
    CreateDate: "07/23/2024",
    DebitAmount: 100.00,
    CreditAmount: 100.00,
    RejectCode: "RC654",
    FollowupDate: "07/27/2024",
    ResponseDescription: "Rejection based on the card.",
  },
  {
    SuspenseDate: "07/26/2024",
    CreateDate: "07/23/2024",
    DebitAmount: 100.00,
    CreditAmount: 100.00,
    RejectCode: "RC654",
    FollowupDate: "07/27/2024",
    ResponseDescription: "Rejection based on the card.",
  },
  {
    SuspenseDate: "07/26/2024",
    CreateDate: "07/23/2024",
    DebitAmount: 100.00,
    CreditAmount: 100.00,
    RejectCode: "RC654",
    FollowupDate: "07/27/2024",
    ResponseDescription: "Rejection based on the card.",
  },
  {
    SuspenseDate: "07/26/2024",
    CreateDate: "07/23/2024",
    DebitAmount: 100.00,
    CreditAmount: 100.00,
    RejectCode: "RC654",
    FollowupDate: "07/27/2024",
    ResponseDescription: "Rejection based on the card.",
  },
]

const rejectCollectionsTable2 = [
  {
    Type: "Example",
    RefDate: "07/26/2024",
    InitDate: "07/26/2024",
    ToCollect: "",
    Payments: "",
    Status: "Wating Payment",
    NextDate: "07/29/2024",
    NextTask: "Note",
  },
  {
    Type: "Example",
    RefDate: "07/26/2024",
    InitDate: "07/26/2024",
    ToCollect: "",
    Payments: "",
    Status: "Paid",
    NextDate: "07/29/2024",
    NextTask: "Note",
  },
  {
    Type: "Example",
    RefDate: "07/26/2024",
    InitDate: "07/26/2024",
    ToCollect: "",
    Payments: "",
    Status: "Cancelled",
    NextDate: "07/29/2024",
    NextTask: "Note",
  },
  {
    Type: "Example",
    RefDate: "07/26/2024",
    InitDate: "07/26/2024",
    ToCollect: "",
    Payments: "",
    Status: "Paid",
    NextDate: "07/29/2024",
    NextTask: "Note",
  },
]

const wavitTransactionsTable = [
  {
    DateTime: "07/29/2024 09:00AM",
    Type: "Cash",
    Invoice: "101",
    Amount: 42.50,
    WAVit: 0.00,
    Total: 42.50,
    CC: "Visa",
    Last4: "1234",
    NameOnCard: "No Name",
    AuthCode: "424242",
    Tax: 0.00,
    Tax2: 0.00,
    Porcentage: 0
  },
  {
    DateTime: "07/29/2024 09:00AM",
    Type: "Cash",
    Invoice: "101",
    Amount: 42.50,
    WAVit: 0.00,
    Total: 42.50,
    CC: "Visa",
    Last4: "1234",
    NameOnCard: "No Name",
    AuthCode: "424242",
    Tax: 0.00,
    Tax2: 0.00,
    Porcentage: 0
  },
  {
    DateTime: "07/29/2024 09:00AM",
    Type: "Debit Card",
    Invoice: "101",
    Amount: 422.50,
    WAVit: 15.00,
    Total: 437.50,
    CC: "Visa",
    Last4: "1234",
    NameOnCard: "No Name",
    AuthCode: "424242",
    Tax: 0.00,
    Tax2: 0.00,
    Porcentage: 0
  },
  {
    DateTime: "07/29/2024 09:00AM",
    Type: "Credit Card",
    Invoice: "101",
    Amount: 31.55,
    WAVit: 1.40,
    Total: 42.50,
    CC: "Visa",
    Last4: "1234",
    NameOnCard: "No Name",
    AuthCode: "424242",
    Tax: 0.00,
    Tax2: 0.00,
    Porcentage: 0
  },
]

const wavitSettingsTable = [
  {
    Description: "Integrated",
    Value: "false"
  },
  {
    Description: "ByPass Integration",
    Value: "null"
  },
  {
    Description: "Bypass PIN",
    Value: "null"
  },
  {
    Description: "Integration Type",
    Value: "null"
  },
  {
    Description: "Subscription ID",
    Value: "null"
  },
  {
    Description: "Department Code",
    Value: "null"
  },
  {
    Description: "Enterprise Code",
    Value: "null"
  },
  {
    Description: "Company Number",
    Value: "null"
  },
  {
    Description: "Server Name",
    Value: "null"
  },
  {
    Description: "Transaction Type",
    Value: "Pre-Auth"
  },
  {
    Description: "Force Terms Acceptance",
    Value: "false"
  },
  {
    Description: "Terms and Conditions Address",
    Value: "null"
  },
  {
    Description: "Ask Manager Refund Override",
    Value: "true"
  },
  {
    Description: "Decline Partial Payments",
    Value: "false"
  },
]


export {
  merchantStatusList,
  merchantProcessorList,
  salesRepList,
  leadSourceList,
  splitNameList,
  deployByList,
  mccCode,
  accountStatusTable,
  activityRecordList,
  callLogsTasks,
  zenDeskTable,
  leasingTable1,
  leasingTable2,
  leasingTable3,
  equipmentTable1,
  equipmentTable2,
  equipmentTable3,
  equipmentList1,
  onboardCheckListTable,
  documentsTable,
  rejectCollectionsTable1,
  rejectCollectionsTable2,
  wavitTransactionsTable,
  wavitSettingsTable

};



// agent