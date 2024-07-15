import React from "react";
import { AgentSetupSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Select } from "@radix-ui/react-select";

const AgentSetup = () => {
  const forms = useForm<z.infer<typeof AgentSetupSchema>>({
    resolver: zodResolver(AgentSetupSchema),
    defaultValues: {
      findAgent: "",
      excludeClosedAgents: "",
      isChildSubAgent: false,
      displayName: "",
      firstName: "",
      lastName: "",
      merchantNote: "",
      email: "",
      phone: "",
      status: "",
      startDate: "",
      endDate: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      routing: "",
      account: "",
      ssn: "",
      payDay: "",
      payGroup: "",
      msoId: "",
      reportType: "",
      payrollId: "",
      agentId: "",
      note: "",
    },
  });

  const onSubmit = (value: z.infer<typeof AgentSetupSchema>) => {
    console.log(value);
  };

  return (
    <Form {...forms}>
      <form onSubmit={forms.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          {/* Search Criteria */}
          <div className="col-span-2">
            <h2 className="text-xl font-bold text-blue-500">Agent Detail</h2>
            <div className="mb-2">
              <h3 className="font-semibold">Search Criteria:</h3>
              <div className="flex items-center space-x-2">
                <FormField
                  control={forms.control}
                  name="findAgent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Find Agent</FormLabel>
                      <FormControl>
                        <Input placeholder="Find Agent" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={forms.control}
                  name="excludeClosedAgents"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox {...field} />
                      </FormControl>
                      <FormLabel>Exclude Closed Agents</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-span-2">
            <h3 className="font-semibold">Contact Information:</h3>
            <FormField
              control={forms.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Display Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex space-x-2">
              <FormField
                control={forms.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={forms.control}
              name="merchantNote"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Merchant Note</FormLabel>
                  <FormControl>
                    <Input placeholder="Merchant Note" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center space-x-2">
              <FormField
                control={forms.control}
                name="isChildSubAgent"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox {...field} />
                    </FormControl>
                    <FormLabel>Is Child / Sub Agent</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="subAgentOrChild"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Select>
                        <option value="Sub Agent or Child">
                          Sub Agent or Child
                        </option>
                      </Select>
                    </FormControl>
                    <FormLabel>Sub Agent or Child</FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={forms.control}
              name="relationshipManager"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relationship Manager</FormLabel>
                  <FormControl>
                    <Select>
                      <option value="">Select Relat. Manager</option>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-2">
              <FormField
                control={forms.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Select>
                        <option value="">Select status</option>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input type="date" placeholder="mm/dd/yyyy" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="salesVertical"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sales Vertical</FormLabel>
                    <FormControl>
                      <Select>
                        <option value="Outside">Outside</option>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <Input type="date" placeholder="mm/dd/yyyy" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={forms.control}
              name="address1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address 1</FormLabel>
                  <FormControl>
                    <Input placeholder="Address 1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={forms.control}
              name="address2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address 2</FormLabel>
                  <FormControl>
                    <Input placeholder="Address 2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-3 gap-2">
              <FormField
                control={forms.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip</FormLabel>
                    <FormControl>
                      <Input placeholder="Zip" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={forms.control}
              name="residualEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Residual Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Residual Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={forms.control}
              name="zohoEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zoho Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Zoho Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Banking & Tax Information */}
          <div className="col-span-2">
            <h3 className="font-semibold">Banking & Tax Information:</h3>
            <div className="grid grid-cols-2 gap-2">
              <FormField
                control={forms.control}
                name="routing"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Routing #</FormLabel>
                    <FormControl>
                      <Input placeholder="Routing #" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="account"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account #</FormLabel>
                    <FormControl>
                      <Input placeholder="Account #" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={forms.control}
              name="entityType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entity Type</FormLabel>
                  <FormControl>
                    <Select>
                      <option value="Individual">Individual</option>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={forms.control}
              name="ssn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SSN / EIN</FormLabel>
                  <FormControl>
                    <Input placeholder="SSN / EIN" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center space-x-2">
              <FormField
                control={forms.control}
                name="okToPayResid"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox {...field} />
                    </FormControl>
                    <FormLabel>OK to pay Resid.</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="doNotPay"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox {...field} />
                    </FormControl>
                    <FormLabel>DO NOT PAY</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="printCheck"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox {...field} />
                    </FormControl>
                    <FormLabel>Print Physical Check</FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <FormField
                control={forms.control}
                name="payDay"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pay Day</FormLabel>
                    <FormControl>
                      <Input placeholder="Pay Day" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="payGroup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pay Group</FormLabel>
                    <FormControl>
                      <Input placeholder="Pay Group" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="msoId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>MSO ID</FormLabel>
                    <FormControl>
                      <Input placeholder="MSO ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Reporting */}
          <div className="col-span-2">
            <h3 className="font-semibold">Reporting:</h3>
            <div className="flex items-center space-x-2">
              <FormField
                control={forms.control}
                name="optInFile"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox {...field} />
                    </FormControl>
                    <FormLabel>Opt In File</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="messaging"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox {...field} />
                    </FormControl>
                    <FormLabel>Messaging</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="residuals"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox {...field} />
                    </FormControl>
                    <FormLabel>Residuals</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="tickets"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox {...field} />
                    </FormControl>
                    <FormLabel>Tickets</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="flashes"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox {...field} />
                    </FormControl>
                    <FormLabel>Flashes</FormLabel>
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="noBillPay"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox {...field} />
                    </FormControl>
                    <FormLabel>No Bill Pay</FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <FormField
                control={forms.control}
                name="reportType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Report Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Report Type" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="payrollId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payroll ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Payroll ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="agentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Agent ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Agent ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forms.control}
                name="note"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Note</FormLabel>
                    <FormControl>
                      <Input placeholder="Notes..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-4">
          Edit
        </Button>
      </form>
    </Form>
  );
};

export default AgentSetup;
