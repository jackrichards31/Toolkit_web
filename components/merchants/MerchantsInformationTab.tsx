"use client";
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MerchantsInformationTab = () => {
    const pathname = usePathname();

    const tabItems = [
        {
            id: '1',
            title: 'Information',
            value: 'information',
            route: '/merchant/information/info'
        },
        {
            id: '2',
            title: 'Access One API',
            value: 'accessoneapi',
            route: '/merchant/information/accessoneapi'
        },
        {
            id: '3',
            title: 'Agent / Lead Source',
            value: 'agentleadsource',
            route: '/merchant/information/agentleadsource'
        },
        {
            id: '4',
            title: 'Account Status',
            value: 'accountstatus',
            route: '/merchant/information/accountstatus'
        },
        {
            id: '5',
            title: 'Call Log / Tasks',
            value: 'calllog',
            route: '/merchant/information/calllog'
        },
        {
            id: '6',
            title: 'ZenDesk(1)',
            value: 'zendesk',
            route: '/merchant/information/zendesk'
        },
        {
            id: '7',
            title: 'Leasing',
            value: 'leasing',
            route: '/merchant/information/leasing'
        },
        {
            id: '8',
            title: 'Equipment',
            value: 'equipment',
            route: '/merchant/information/equipment'
        },
        {
            id: '9',
            title: 'Onboard Checklist',
            value: 'onboardchecklist',
            route: '/merchant/information/onboardchecklist'
        },
        {
            id: '10',
            title: 'Documents',
            value: 'documents',
            route: '/merchant/information/documents'
        },
        {
            id: '11',
            title: 'Merch Fees / Proc',
            value: 'merchfees',
            route: '/merchant/information/merchfees'
        },
        {
            id: '12',
            title: 'Software Install',
            value: 'softwareinstall',
            route: '/merchant/information/softwareinstall'
        },
        {
            id: '13',
            title: 'Reject / Collections',
            value: 'rejectcollections',
            route: '/merchant/information/rejectcollections'
        },
        {
            id: '14',
            title: 'Residuals',
            value: 'residuals',
            route: '/merchant/information/residuals'
        },
        {
            id: '15',
            title: 'WAVit Info',
            value: 'wavitInfo',
            route: '/merchant/information/wavitinfo'
        },
        {
            id: '16',
            title: 'BOTWest',
            value: 'botWest',
            route: '/merchant/information/botwest'
        },
    ]


    return (  
    <>
        <div className=" flex-none grow-0 overflow-y-auto   p-2 text-nowrap bg-gray-200 rounded justify-items-center" >
            
            {tabItems.map((item) => {
                const isActive = (pathname?.includes(item.route) && item.title.length > 1) ||
                pathname === item.title;

                return (
                    <Link href={item.route} className={`${isActive ? "bg-zinc-700 text-white" : "text-black bg-gray-300"}  text-black bg-gray-300`}
                    key={item.title}
                    >

                        <div 
                        
                        className={`${isActive ? "bg-zinc-700 text-white" : "text-black font-semibold"}  text-center p-2 mb-2 flex-none rounded hover:bg-gray-300`}>
                            <p className=''>{item.title}</p>
                            <p className='hidden'>{item.title.charAt(0)}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    </>
  )
}

export default MerchantsInformationTab