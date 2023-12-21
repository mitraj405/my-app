import React from 'react'
import { SunIcon } from '@heroicons/react/24/solid';

export default function HomePage() {
    return (
        <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
            <h1 className='text-5xl font-bold mb-20'>
                LongShot
            </h1>
            <div>
                <div className="">
                    <div className="flex flex-col items-center justify-center mb-5">
                    <SunIcon className="h-8 w-8 text-blue-500" />
                    {/* sun icon  longshot*/}
                    <h2>Examples</h2>
                </div>
                    <div className="space-y-2">
                        <p className='infoText' style={{ textAlign: 'center' }}>"Who are you"</p>
                        <p className='infoText' style={{ textAlign: 'center' }}>"Mention 5 popular food places in Mumbai for this text: Authentic Indian wine with the French style"</p>
                        <p className='infoText' style={{ textAlign: 'center' }}>"Generate a list of 5 frequently asked questions for this text: 'Is AI is boon or bane?' Write the response in Spanish."</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
