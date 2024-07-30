import { MerchantSoftwareInstallSchema } from "@/lib/utils";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form } from "../ui/form";
import { SelectForm, InputForm, CheckboxForm } from "../Shared/InstantForm";
import { Button } from "@/components/ui/button";

const SoftwareInstall = () => {
  const form = useForm<z.infer<typeof MerchantSoftwareInstallSchema>>({
    resolver: zodResolver(MerchantSoftwareInstallSchema),
    defaultValues: {
      SoftwareAcctNumber: "",
      POCname: "",
      POCphone: "",
      POCemail: "",
      ISOname: "",
      ISOcontact: "",
      ISOphone: "",
      ISOemail: "",
      Dealer: "",
      DealerContact: "",
      DealerPhone: "",
      DealerEmail: "",
      ActiveServiceAgreement: false,
      POSsystem: "",
      NumberStations: 0,
      MiPointClover: false,
      HasTSLlicense: false,
      MiPointCloverQty: 0,
      MiPointIngencio: false,
      HasPMSlicense: false,
      MiPointIngencioQty: 0,
      RemoteServiceAccess: false,
      Environment: "",
      GatewayUsername: "",
      GatewayPassword: "",
      GatewayKey: "",
      SupportProvider: "",
      SupportProgram: "",
      EffectiveDate: new Date(),
      InstallationDevices: 0,
      InstallationDevicesPrice: 0,
      InstallationDevicesTotal: 0,
      MonthlyRecurringDevices: 0,
      MonthlyRecurringDevicesPrice: 0,
      MonthlyRecurringDevicesTotal: 0,
      SupportRecurringDevices: 0,
      SupportRecurringDevicesPrice: 0,
      SupportRecurringDevicesTotal: 0,
    },
  });

  const POSsystemData = [
    { id: 1, name: "Clover", value: "clover" },
    { id: 2, name: "Square", value: "square" },
  ];

  const EnvironmentData = [
    { id: 1, name: "Virtual Server", value: "virtualServer" },
    { id: 2, name: "Physical Server", value: "physicalServer" },
  ];

  const onSubmit = (value: z.infer<typeof MerchantSoftwareInstallSchema>) => {
    console.log(value);
  };
  return (
    <div className="size-full grow p-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h1 className="text-3xl text-sky-500">Software Install</h1>
          <div className="grid grid-cols-11 gap-3 max-2xl:grid-cols-1">
            <div className="col-span-4 grid auto-rows-min grid-cols-1 gap-3 rounded-md border p-4 max-2xl:grid-cols-1">
              <h1 className="flex justify-center text-xl font-semibold text-sky-500">
                Merchant Information
              </h1>
              <div className="flex content-center gap-3">
                <p className="mt-2 w-2/6 content-center text-nowrap text-end">
                  Software Acct #
                </p>
                <div className="w-4/6">
                  <InputForm
                    control={form.control}
                    formName="SoftwareAcctNumber"
                    label=""
                    placeholder=""
                  />
                </div>
              </div>
              <Button className="w-1/3 justify-self-end bg-blue-500">
                Assign New #
              </Button>
              <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                Technical POC
              </h1>
              <div className="flex content-center gap-3">
                <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                  Name
                </p>
                <div className="w-5/6">
                  <InputForm
                    control={form.control}
                    formName="POCname"
                    label=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex content-center gap-3">
                <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                  Phone
                </p>
                <div className="w-5/6">
                  <InputForm
                    control={form.control}
                    formName="POCphone"
                    label=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex content-center gap-3">
                <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                  Email
                </p>
                <div className="w-5/6">
                  <InputForm
                    control={form.control}
                    formName="POCemail"
                    label=""
                    placeholder=""
                  />
                </div>
              </div>
              <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                ISO Information
              </h1>
              <div className="flex content-center gap-3">
                <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                  ISO Name
                </p>
                <div className="w-5/6">
                  <InputForm
                    control={form.control}
                    formName="ISOname"
                    label=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex content-center gap-3">
                <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                  Contact
                </p>
                <div className="w-5/6">
                  <InputForm
                    control={form.control}
                    formName="ISOcontact"
                    label=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex content-center gap-3">
                <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                  Phone
                </p>
                <div className="w-5/6">
                  <InputForm
                    control={form.control}
                    formName="ISOphone"
                    label=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex content-center gap-3">
                <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                  Email
                </p>
                <div className="w-5/6">
                  <InputForm
                    control={form.control}
                    formName="ISOemail"
                    label=""
                    placeholder=""
                  />
                </div>
              </div>
              <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                Dealer Information
              </h1>
              <div className="flex content-center gap-3">
                <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                  Dealer
                </p>
                <div className="w-5/6">
                  <InputForm
                    control={form.control}
                    formName="Dealer"
                    label=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex content-center gap-3">
                <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                  Contact
                </p>
                <div className="w-5/6">
                  <InputForm
                    control={form.control}
                    formName="DealerContact"
                    label=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex content-center gap-3">
                <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                  Phone
                </p>
                <div className="w-5/6">
                  <InputForm
                    control={form.control}
                    formName="DealerPhone"
                    label=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex content-center gap-3">
                <p className="mt-2 w-1/6 content-center text-nowrap text-end">
                  Email
                </p>
                <div className="w-5/6">
                  <InputForm
                    control={form.control}
                    formName="DealerEmail"
                    label=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex">
                <CheckboxForm
                  control={form.control}
                  formName="ActiveServiceAgreement"
                  label=""
                  placeholder=""
                  className=""
                />
                <span className="mt-1.5">
                  Merchant has active service agreement?
                </span>
              </div>
            </div>
            <div className="col-span-5 grid h-4/5 auto-rows-min gap-5 rounded-md border p-4 max-2xl:grid-cols-1">
              <h1 className="flex justify-center text-xl font-semibold text-sky-500">
                Platform Information
              </h1>
              <div className="flex gap-3">
                <div className="w-3/4">
                  <SelectForm
                    control={form.control}
                    formName="POSsystem"
                    label="POS System/Version"
                    content={POSsystemData}
                    placeholder="Select POS System/Version"
                    valueKey="id"
                    displayKey="name"
                    disabled={false}
                    className=""
                  />
                </div>
                <InputForm
                  control={form.control}
                  formName="NumberStations"
                  label="# Stations"
                  placeholder=""
                />
              </div>
              <div className="flex gap-3">
                <div className="flex w-3/4 items-center justify-start gap-10">
                  <div className="flex">
                    <CheckboxForm
                      control={form.control}
                      formName="MiPointClover"
                      label=""
                      placeholder=""
                      className=""
                    />
                    <span className="mt-1.5">MiPoint Clover</span>
                  </div>
                  <div className="flex">
                    <CheckboxForm
                      control={form.control}
                      formName="HasTSLlicense"
                      label=""
                      placeholder=""
                      className=""
                    />
                    <span className="mt-1.5">Has TSL License</span>
                  </div>
                </div>
                <div className="flex content-center gap-3">
                  <p className="mt-2 w-2/6 content-center text-nowrap text-end font-semibold">
                    Qty
                  </p>
                  <div className="w-4/6">
                    <InputForm
                      control={form.control}
                      formName="MiPointCloverQty"
                      label=""
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex w-3/4 items-center justify-start gap-6">
                  <div className="flex">
                    <CheckboxForm
                      control={form.control}
                      formName="MiPointIngencio"
                      label=""
                      placeholder=""
                      className=""
                    />
                    <span className="mt-1.5">MiPoint Ingencio</span>
                  </div>
                  <div className="flex">
                    <CheckboxForm
                      control={form.control}
                      formName="HasPMSlicense"
                      label=""
                      placeholder=""
                      className=""
                    />
                    <span className="mt-1.5">Has PMS License</span>
                  </div>
                </div>
                <div className="flex content-center gap-3">
                  <p className="mt-2 w-2/6 content-center text-nowrap text-end font-semibold">
                    Qty
                  </p>
                  <div className="w-4/6">
                    <InputForm
                      control={form.control}
                      formName="MiPointCloverQty"
                      label=""
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-between gap-3">
                <div className="flex">
                  <CheckboxForm
                    control={form.control}
                    formName="RemoteServiceAccess"
                    label=""
                    placeholder=""
                    className=""
                  />
                  <span className="mt-1.5">
                    Remote Service Access Available
                  </span>
                </div>
                <SelectForm
                  control={form.control}
                  formName="Environment"
                  label="Environment"
                  content={EnvironmentData}
                  placeholder="Select Environment"
                  valueKey="id"
                  displayKey="name"
                  disabled={false}
                  className=""
                />
              </div>
              <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                Gateway Info
              </h1>
              <div className="grid grid-cols-2 gap-3">
                <InputForm
                  control={form.control}
                  formName="GatewayUsername"
                  label="Username"
                  placeholder=""
                />
                <InputForm
                  control={form.control}
                  formName="GatewayPassword"
                  label="Password"
                  placeholder=""
                />
                <InputForm
                  control={form.control}
                  formName="GatewayKey"
                  label="Key"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-span-2 grid h-4/5 auto-rows-min gap-3 rounded-md border max-2xl:grid-cols-1">
              <h1 className="flex justify-center text-xl font-semibold text-sky-500">
                Quick Updates
              </h1>
              <Button className="w-11/12 justify-self-center bg-blue-500">
                Update Equipment Status
              </Button>
              <h1></h1>
              <Button className="w-11/12 justify-self-center bg-blue-500">
                Migrate to HOLD Status
              </Button>
              <Button className="w-11/12 justify-self-center bg-blue-500">
                Migrate to ACTIVE Status
              </Button>
              <h1></h1>
              <Button className="w-11/12 justify-self-center bg-blue-500">
                Update Billing Information
              </Button>
              <Button className="w-11/12 justify-self-center bg-blue-500">
                Setup Support Agreement
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SoftwareInstall;
