import React from "react";
import { AlertTriangle, CircleCheckBig } from "lucide-react";

const FormAlert = ({ message, type }: { message: string; type: string }) => {
  return (
    <>
      {type === "error" ? (
        <section className="mb-5 flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
          <AlertTriangle className="size-4" />
          <p>{message}</p>
        </section>
      ) : type === "success" ? (
        <section className="mb-5 flex items-center gap-x-2 rounded-md bg-green-300 p-3 text-sm text-green-950">
          <CircleCheckBig className="size-4" />
          <p>{message}</p>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default FormAlert;
