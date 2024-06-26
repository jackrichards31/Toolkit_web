// devextremeLicense.ts
import config from "devextreme/core/config";

const licenseKey = process.env.NEXT_PUBLIC_DEVEXTREME_LICENSE_KEY;

if (licenseKey) {
  config({ licenseKey });
} else {
  console.error("DevExtreme license key is missing");
}
