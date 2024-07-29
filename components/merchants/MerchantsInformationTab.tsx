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
            route: '/merchant/information/info',
            icon: "/infoTabs/info-item.svg"
        },
        {
            id: '2',
            title: 'Access One API',
            value: 'accessoneapi',
            route: '/merchant/information/accessoneapi',
            icon: "/infoTabs/api-item.svg"
        },
        {
            id: '3',
            title: 'Agent / Lead Source',
            value: 'agentleadsource',
            route: '/merchant/information/agentleadsource',
            icon: "/infoTabs/agent-item.svg"
        },
        {
            id: '4',
            title: 'Account Status',
            value: 'accountstatus',
            route: '/merchant/information/accountstatus',
            icon: "/infoTabs/account-item.svg"
        },
        {
            id: '5',
            title: 'Call Log / Tasks',
            value: 'calllog',
            route: '/merchant/information/calllog',
            icon: "/infoTabs/call-item.svg"
        },
        {
            id: '6',
            title: 'ZenDesk(1)',
            value: 'zendesk',
            route: '/merchant/information/zendesk',
            icon: "/infoTabs/desk-item.svg"
        },
        {
            id: '7',
            title: 'Leasing',
            value: 'leasing',
            route: '/merchant/information/leasing',
            icon: "/infoTabs/info-item.svg"
        },
        {
            id: '8',
            title: 'Equipment',
            value: 'equipment',
            route: '/merchant/information/equipment',
            icon: "/infoTabs/equipment-item.svg"
        },
        {
            id: '9',
            title: 'Onboard Checklist',
            value: 'onboardchecklist',
            route: '/merchant/information/onboardchecklist',
            icon: "/infoTabs/onboarding-item.svg"
        },
        {
            id: '10',
            title: 'Documents',
            value: 'documents',
            route: '/merchant/information/documents',
            icon: "/infoTabs/doc-item.svg"
        },
        {
            id: '11',
            title: 'Merch Fees / Proc',
            value: 'merchfees',
            route: '/merchant/information/merchfees',
            icon: "/infoTabs/fees-item.svg"
        },
        {
            id: '12',
            title: 'Software Install',
            value: 'softwareinstall',
            route: '/merchant/information/softwareinstall',
            icon: "/infoTabs/software-item.svg"
        },
        {
            id: '13',
            title: 'Reject / Collections',
            value: 'rejectcollections',
            route: '/merchant/information/rejectcollections',
            icon: "/infoTabs/reject-item.svg"
        },
        {
            id: '14',
            title: 'Residuals',
            value: 'residuals',
            route: '/merchant/information/residuals',
            icon: "/infoTabs/residuals-item.svg"
        },
        {
            id: '15',
            title: 'WAVit Info',
            value: 'wavitInfo',
            route: '/merchant/information/wavitinfo/',
            icon: "/infoTabs/info-item.svg"
        },
        {
            id: '16',
            title: 'BOTWest',
            value: 'botWest',
            route: '/merchant/information/botwest',
            icon: "/infoTabs/bank-item.svg"
        },
    ]


    return (
        <>
            <div className="flex-none h-min grow-0 p-2 text-nowrap bg-gray-200 dark:bg-zinc-700  rounded justify-items-center" >

                {tabItems.map((item) => {
                    const isActive = (pathname?.includes(item.route) && item.title.length > 1) ||
                        pathname === item.title;

                    return (
                        <Link href={item.route} title={item.title} className={`${isActive ? "bg-zinc-700 text-white" : "text-black bg-gray-300"}`}
                            key={item.title}>
                            <div className={`${isActive ? "bg-zinc-700 text-white dark:bg-gray-300 dark:text-black" :
                                "text-black font-semibold  dark:text-white "}  
                                                       text-center p-2 mb-3 flex-none rounded hover:bg-gray-300 dark:hover:bg-zinc-800`}>
                                <p className='max-xl:hidden'>{item.title}</p>
                                {/* <p className='hidden max-xl:block '>{item.title.charAt(0)}</p> */}
                                <Image
                                    className="hidden max-xl:block "
                                    src={item.icon}
                                    alt="Logo"
                                    width={30}
                                    height={30}
                                    priority
                                />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default MerchantsInformationTab