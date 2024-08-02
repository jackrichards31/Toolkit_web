import WavitInfoTab from '@/components/merchants/WavitInfoTab';
import React, { Children } from 'react'


const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
      <>
          <section className="">
            <h1 className='text-2xl text-sky-500 mb-3'>WAVit Info</h1>
            <WavitInfoTab/>
            {children}
              
          </section>
      </>
    );
  };

export default layout