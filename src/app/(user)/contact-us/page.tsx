import ContactUs from "@/src/components/ContactUs";
import React from "react";

interface Props {}

function Page(props: Props) {
  const {} = props;

  return (
    <div className="flex flex-col">
      <ContactUs />
    </div>
  );
}

export default Page;
