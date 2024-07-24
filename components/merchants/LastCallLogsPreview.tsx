import React from 'react'

const LastCallLogsPreview = () => {

  const callLogs = [
    {
      id: 1,
      date: "Date",
      username: "User Name",
      notes: "Notes"
    },
    {
      id: 2,
      date: "07/23/2024",
      username: "Tony Stark",
      notes: "This table was created."
    },
    {
      id: 3,
      date: "07/23/2024",
      username: "HC",
      notes: "This table was edited."
    },
    {
      id: 4,
      date: "07/24/2024",
      username: "Jimmy Page",
      notes: "This table will be changed by me."
    }
  ]


  return (
    <>
        <div className="grow p-4 border rounded-lg border-solid border-gray-600 mb-3 mt-0 max-h-60 overflow-hidden ">
            <h1 className='text-sky-500 text-3xl'>Last Call Logs Preview</h1>
            <div className='my-2 rounded-lg '>
                { 
                  callLogs.map((item) => {
                    return (
                      <>
                        <div className={`${item.id == 1 ? "bg-gray-700 text-white" : ""} ${item.id % 2 == 0? "bg-gray-200" : "bg-gray-300"} flex p-1`}>

                          <div className="flex-1 ">{item.date}</div>
                          <div className="flex-1">{item.username}</div>
                          <div className="flex-1">{item.notes}</div>
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

export default LastCallLogsPreview