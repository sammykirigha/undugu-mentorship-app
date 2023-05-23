import Link from "next/link";
import React from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px'}}>
        <Link href="/" className="!text-red flex items-center gap-2" style={{color: "#ff6100", display: 'flex', alignItems: 'center', gap: '8px'}}>
          <ArrowUturnLeftIcon className="!h-6 !w-6 text-text" style={{height: '24px', width: '24px', color: "#ff6100"}} />
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
