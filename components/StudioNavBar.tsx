import Link from "next/link";
import React from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-text flex items-center gap-2">
          <ArrowUturnLeftIcon className="!h-6 !w-6 text-text" />
          Go to Website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-text">
          <h1 className="font-bold text-white">
            Welcome to Undugu Mentorship Content Management Studio
          </h1>
          <Link className="text-text font-bold ml-2" href="https://www.facebook.com/UnduguMentorship">see us on facebook</Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
