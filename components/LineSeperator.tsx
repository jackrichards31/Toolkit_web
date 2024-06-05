import React from "react";

/**
 * This function is for a small line seperator that is being used in Sign-in and Sign-up form.
 * This function accepts 2 parameters, the text, and className which is optional.
 */
const LineSeperator = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <section className={`flex items-center justify-between ${className}`}>
      <div
        data-orientation="horizon"
        role="none"
        className="h-fit w-1/3 border"
      />
      {text}
      <div
        data-orientation="horizon"
        role="none"
        className="h-fit w-1/3 border"
      />
    </section>
  );
};

export default LineSeperator;
