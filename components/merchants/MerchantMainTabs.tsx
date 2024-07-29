import React from 'react'
import Link from 'next/link'
import { merchantMainTabs } from '@/constants'
import { usePathname } from "next/navigation";

const MerchantMainTabs = () => {
    const pathname = usePathname();
    const tabs = merchantMainTabs;


 
    return (
    <div className="inline-flex gap-2 box-content px-5 mb-0 border border-solid border-gray-400 rounded-t-lg border-b-0 ">
        {tabs.map((item) =>{

            const isActive = (pathname?.includes(item.value) && item.title.length > 1) ||
            pathname === item.title;

            return (
                <>
                    <div className={`${isActive ? " text-sky-500 border-b-8 border-sky-500" : "dark:text-white text-black "} p-3 text-lg hover:bg-slate-200 dark:hover:bg-slate-700`}>
                        <Link href={item.route}>
                            <p className="text-pretty">{item.title}</p>
                        </Link>
                    </div>  
                </>
            )
        })}
        
      </div> 
  )
}

export default MerchantMainTabs