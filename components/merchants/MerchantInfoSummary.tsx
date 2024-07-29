import React from 'react'

const MerchantInfoSummary = () => {
    const summaryItems = [
        {
            title: 'MID',
            value: '518991561321'
        },
        {
            title: 'Legal Name',
            value: 'MiCamp Solutions'
        },
        {
            title: 'DBA',
            value: 'Tony Stark'
        },
        {
            title: 'Agent',
            value: '007 Somewhere Rd'
        },
        {
            title: 'Processor',
            value: 'First Data Omaha'
        },
        {
            title: 'Costumer Service Email',
            value: 'support@micamp.com'
        },
        {
            title: 'Current Status',
            value: 'Approved'
        },
        {
            title: 'Notices',
            value: 'No notices yet'
        },
        {
            title: 'Product',
            value: 'Some product'
        },
        {
            title: 'ID',
            value: '3952'
        },
        {
            title: 'WAVit Account',
            value: 'PIN: 9847'
        },
        
    ]


  return (
    <>
        <div className="w-auto p-2 border rounded-lg border-solid border-gray-400 shadow-md mb-5 mt-0">
            <h1 className="text-sky-500 text-3xl">
                Merchant Details
            </h1>
            <div className='w-auto grid grid-rows-4 md:grid-flow-col gap-1 p-4 '>
                {summaryItems.map((item) => {
                    return (
                        <>
                            <div className='flex gap-3 '>
                                <div className='w-1/2 text-end'> 
                                    <p className='font-bold'>{item.title}</p>
                                </div>
                                <div className='w-1/2 text-start text-nowrap'>
                                    <p>{item.value}</p>
                                </div>
                            </div>
                        
                        </>
                    )
                })
                }
            </div>
        </div>
        
    </>
  )
}

export default MerchantInfoSummary