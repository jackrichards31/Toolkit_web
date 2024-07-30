import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authFormSchema = (type: string) => {
  z.object({
    // For sign-in
    email: z.string().email(),
    password: z.string().min(8),

    // For sign up
    firstName:
      type === "sign-in" ? z.string().optional() : z.string().min(2).max(15),
    lastName:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(20),
    phone:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(10),
    group: type === "sign-in" ? z.string().optional() : z.string().max(20),
  });
};

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),

  firstName: z.string().min(2).max(15),
  lastName: z.string().min(3).max(20),
  phone: z.string().min(3).max(10),
  group: z.string().max(20),
});

export const MerchantInfoSchema = z.object({
  MID: z.string().max(20),
  LegalName: z.string(),
  Contact: z.string(),
  Address: z.string(),
  Apt: z.string(),
  City: z.string(),
  State: z.string(),
  Zip: z.string(),
  Phone1: z.string(),
  Extension1: z.string(),
  Phone2: z.string(),
  Extension2: z.string(),
  Email: z.string(),
  Website: z.string(),
  DBA: z.string(),
  DBAcontact: z.string(),
  SameAsLegal: z.boolean(),
  DBAaddress: z.string(),
  DBAapt: z.string(),
  DBAcity: z.string(),
  DBAstate: z.string(),
  DBAzip: z.string(),
  Notice: z.string(),
  FrontEndPlatform: z.string(),
  FrontEndMID: z.string(),
  FrontEndTID: z.string(),
  CheckServiceMID: z.string(),
  GatewayMID: z.string(),
  EstAnnualVolume: z.number(),
  Transactions: z.number(),
  SICcode: z.string(),
  MCCclassification: z.string(),
  ChildMID: z.boolean(),
  Parent: z.string(),
  CloverID: z.string(),
  SeeManager: z.boolean()
});

export const MerchantAgentLeadSourceSchema = z.object({
  LeadSource: z.string(),
  SalesVertical: z.string(),
  Agent: z.string(),
  SplitPercentage: z.number(),
  CalcAfterMasterSplit: z.boolean(),
  CalcAfterAgentPay: z.boolean(),
  CalcPartOfMaster: z.boolean(),
  CalcPartOfSubMaster: z.boolean(),
  AgentIsMaster: z.boolean(),
  RebateAccount: z.boolean(),
  ForceNotifMasterAgent: z.boolean(),
  TotalEffectiveSplit: z.number(),
  SubAgent: z.string(),
  Filter: z.string(),
  DefaultSplits: z.string(),
  Agent2: z.string(),
});

export const MerchantSoftwareInstallSchema = z.object({
  SoftwareAcctNumber: z.string(),
  POCname: z.string(),
  POCphone: z.string(),
  POCemail: z.string(),
  ISOname: z.string(),
  ISOcontact: z.string(),
  ISOphone: z.string(),
  ISOemail: z.string(),
  Dealer: z.string(),
  DealerContact: z.string(),
  DealerPhone: z.string(),
  DealerEmail: z.string(),
  ActiveServiceAgreement: z.boolean(),
  POSsystem: z.string(),
  NumberStations: z.number(),
  MiPointClover: z.boolean(),
  HasTSLlicense: z.boolean(),
  MiPointCloverQty: z.number(),
  MiPointIngencio: z.boolean(),
  HasPMSlicense: z.boolean(),
  MiPointIngencioQty: z.number(),
  RemoteServiceAccess: z.boolean(),
  Environment: z.string(),
  GatewayUsername: z.string(),
  GatewayPassword: z.string(),
  GatewayKey: z.string(),
  SupportProvider: z.string(),
  SupportProgram: z.string(),
  EffectiveDate: z.date(),
  InstallationDevices: z.number(),
  InstallationDevicesPrice: z.number(),
  InstallationDevicesTotal: z.number(),
  MonthlyRecurringDevices: z.number(),
  MonthlyRecurringDevicesPrice: z.number(),
  MonthlyRecurringDevicesTotal: z.number(),
  SupportRecurringDevices: z.number(),
  SupportRecurringDevicesPrice: z.number(),
  SupportRecurringDevicesTotal: z.number()
});

export const newMerchantSchema = z.object({
  MID: z.string(),
  LegalName: z.string(),
  DBA: z.string(),
  Phone: z.string(),
  Status: z.string(),
  Approval: z.string().date(),
  Filter: z.string(),
  Processor: z.string(),
  Fitler2: z.string(),
  AgentID: z.number(),
  SalesRep: z.string(),
  Split: z.number(),
  SplitName: z.string(),
  SplitID: z.number(),
  LeadSource: z.string(),
  SplitLead: z.number(),
  EstAnnual: z.number(),
  Transactions: z.number(),
  Filter3: z.string(),
  Banks: z.string(),
  WAVItAccount: z.number(),
  MCCCode: z.string(),
  Notice: z.string(),
});

export const AgentSetupSchema = z.object({
  findAgent: z.string(),
  excludeClosedAgents: z.string(),
  displayName: z.string().nonempty("Display Name is required"),
  firstName: z.string().nonempty("First Name is required"),
  lastName: z.string().nonempty("Last Name is required"),
  merchantNote: z.string(),
  isChildSubAgent: z.boolean(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  status: z.string().nonempty("Status is required"),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  address1: z.string().optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  routing: z.string().optional(),
  account: z.string().optional(),
  ssn: z.string().optional(),
  payDay: z.string().optional(),
  payGroup: z.string().optional(),
  msoId: z.string().optional(),
  reportType: z.string().optional(),
  payrollId: z.string().optional(),
  agentId: z.string().optional(),
  note: z.string().optional(),
});

// Currency format functions
export const formatCurrency = (
  value: number,
  currency: string = "USD",
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

// Date and time format functions
export const getJoinedDate = (dateString: string) => {
  const date = new Date(dateString);

  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return "th"; // for 11th, 12th, 13th, etc...

    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const day = date.getUTCDate();
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getUTCFullYear();

  const dayWithSuffix = day + getOrdinalSuffix(day);

  return { day: dayWithSuffix, month, year };
};

const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const formatTime = (date: Date): string => {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours || 12; // hours of 0 should be 12
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
};

export const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const dayWithSuffix = `${day + getOrdinalSuffix(day)}`;

  return `${dayWithSuffix} ${month}, ${year}`;
};

export const formatRelativeDate = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const oneDay = 1000 * 60 * 60 * 24;

  // const dayWithSuffix = `${date.getDate() + getOrdinalSuffix(date.getDate())}`;
  // const month = date.toLocaleString("default", { month: "long" });
  // const year = date.getFullYear();
  const time = formatTime(date);

  if (diff < oneDay) {
    return `Today at ${time}`;
  } else if (diff < 2 * oneDay) {
    return `Yesterday at ${time}`;
  } else if (diff < 7 * oneDay) {
    const daysAgo = Math.floor(diff / oneDay);
    return `${daysAgo} days ago at ${time}`;
  } else if (diff < 30 * oneDay) {
    const weeksAgo = Math.floor(diff / (7 * oneDay));
    return `${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago at ${time}`;
  } else if (diff < 365 * oneDay) {
    const monthsAgo = Math.floor(diff / (30 * oneDay));
    return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago at ${time}`;
  } else {
    const yearsAgo = Math.floor(diff / (365 * oneDay));
    return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago at ${time}`;
  }
};
