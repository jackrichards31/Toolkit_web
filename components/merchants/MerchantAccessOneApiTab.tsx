"use client";
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MerchantAccessOneApiTab = () => {

const pathname = usePathname();
const tabItems = [
    {
        id: '1',
        title: 'Auths',
        value: 'auths'
    },
    {
        id: '2',
        title: 'Batch Summary',
        value: 'fsp'
    },
    {
        id: '3',
        title: 'Batch Detail',
        value: 'batchDetail'
    },
    {
        id: '4',
        title: 'Payment Sumarry',
        value: 'paymentSumarry'
    },
    {
        id: '5',
        title: 'Transactions',
        value: 'transacitons'
    },
    {
        id: '6',
        title: 'Retrievals',
        value: 'retrievals'
    },
    {
        id: '7',
        title: 'Chargebacks',
        value: 'chargebacks'
    },
    {
        id: '8',
        title: 'Merch Profile',
        value: 'merchProfile'
    },
    {
        id: '9',
        title: 'Merch Pricing',
        value: 'merchPricing'
    },
    {
        id: '10',
        title: 'Merch Memos',
        value: 'merchMemos'
    },
    {
        id: '11',
        title: 'Statements',
        value: 'statements'
    }
]

  return (
    <>
        <div className='text-center'>
            <div className="m-auto inline-flex p-2 text-nowrap bg-gray-200 rounded" >
                
                {tabItems.map((item) => {
                    const isActive = (pathname?.includes(item.value) && item.title.length > 1) ||
                    pathname === item.title;
                    
                    return (
                        <Link href="" className={`${isActive ? "bg-zinc-700 text-white" : "text-black bg-gray-200"} rounded-lg text-black bg-gray-200`}
                        key={item.title}
                        >

                            <div className={`${isActive ? "bg-zinc-700 text-white" : "text-black font-semibold"}  text-center p-2 flex-none rounded`}>
                                {item.title}
                                
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default MerchantAccessOneApiTab;