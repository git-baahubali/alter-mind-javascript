import React from 'react'
// import emailThread from './assets/email.js'
import Summary from './components/Summary';

function EmailPage() {
    return (
        <div className=''>Email
            <Component />
        </div>
    )
}

export default EmailPage

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Lg7SFg0ytxt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Link } from 'react-router-dom';
import Chatbox from './components/Chatbox';


// Simple Badge Component
const Badge = ({ children, className }) => {
    return <span className={`badge ${className}`}>{children}</span>;
};

// Simple Button Component
const Button = ({ children, onClick, className, size, variant }) => {
    return <button className={`button ${size} ${variant} ${className}`} onClick={onClick}>{children}</button>;
};



export function Component() {
    return (
        <div key="1" className="flex flex-col h-[1200px] min-h-[600px] w-full border border-gray-200 dark:border-gray-800">
            <div className="flex h-full items-stretch">
                <div className="flex flex-col w-[250px] border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
                    <div className="flex items-center h-12 px-4">
                        <div className="font-semibold ">Inbox</div>
                        <Badge className="ml-auto w-6 h-6">
                            <div>3</div>
                        </Badge>
                    </div>

                    <aside className="grid gap-px overflow-y-auto bg-red-400">
                        <Link className="group flex items-center gap-2 p-4 w-full text-left" href="#">
                            <div className="text-sm font-medium group-hover:underline">{emailThread[0].subject}</div>
                            <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">1:23 PM</div>
                        </Link>
                        <Link className="group flex items-center gap-2 p-4 w-full text-left" href="#">
                            <div className="text-sm font-medium group-hover:underline">Sample email 2</div>
                            <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">9:15 AM</div>
                        </Link>
                        <Link className="group flex items-center gap-2 p-4 w-full text-left" href="#">
                            <div className="text-sm font-medium group-hover:underline">Sample email 3</div>
                            <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">8:45 AM</div>
                        </Link>
                        <Link className="group flex items-center gap-2 p-4 w-full text-left" href="#">
                            <div className="text-sm font-medium group-hover:underline">Sample email 4</div>
                            <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">10:30 AM</div>
                        </Link>
                        <Link className="group flex items-center gap-2 p-4 w-full text-left" href="#">
                            <div className="text-sm font-medium group-hover:underline">Sample email 5</div>
                            <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">11:45 AM</div>
                        </Link>
                    </aside>
                </div>
                <div className="flex-1 border-l border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col h-[1200px] min-h-[1200px]">
                        <div className="flex items-center h-12 px-4 border-b border-gray-200 dark:border-gray-800">
                            <div className="text-sm font-semibold">{emailThread[0].subject}</div>
                            <Button className="ml-auto" size="icon" variant="ghost">
                                <ChevronRightIcon className="w-4 h-4" />
                                <span className="sr-only">Toggle</span>
                            </Button>
                            <Button size="icon" variant="ghost">
                                <PrinterIcon className="w-4 h-4" />
                                <span className="sr-only">Print</span>
                            </Button>
                        </div>
                        <main className='m-4'>
                            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                            <Chatbox emailThread={emailThread}/>
                        </main>
                        <Summary />
                        {/* Emails */}
                        <div className="flex-1 min-h-0 overflow-auto p-4">
                            {emailThread.map((email, index) => <Email key={index} email={email} />)}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function PrinterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect width="12" height="8" x="6" y="14" />
        </svg>
    )
}


const emailThread = [
    {
        subject: "Urgent: Unable to Access Winzone Application",
        from: "Jordan Doe <jordan.doe@example.com>",
        to: "WinzoneTechSupport@example.com",
        date: "Feb 25, 2024, 09:15 AM",
        body: `Hello,
  
  I have been experiencing difficulties accessing the Winzone application since this morning. The login page simply refreshes each time I attempt to log in, without any error message. I've already tried clearing my browser's cache and using a different device with no success.
  
  Can you please assist?
  
  Best regards,
  Jordan Doe`
    },
    {
        subject: "Re: Urgent: Unable to Access Winzone Application",
        from: "WinzoneTechSupport@example.com",
        to: "Jordan Doe <jordan.doe@example.com>",
        cc: ["ESA@example.com", "CRS@example.com"],
        date: "Feb 25, 2024, 10:30 AM",
        body: `Hello Jordan,
  
  Thank you for reaching out. We have reviewed the initial details of your issue and suspect it might be related to recent updates we've applied to the Winzone application. We are escalating this to our ESA team for a deeper investigation.
  
  In the meantime, could you please provide us with the following information:
  - Your user ID
  - Time of the last successful login attempt
  - Any specific error codes seen (if any)
  
  Thank you for your patience.
  
  Best,
  Sam Rivera
  Winzone Tech Support`
    },
    {
        subject: "Re: Urgent: Unable to Access Winzone Application",
        from: "ESA@example.com",
        to: "Jordan Doe <jordan.doe@example.com>",
        cc: ["WinzoneTechSupport@example.com", "CRS@example.com"],
        date: "Feb 25, 2024, 01:45 PM",
        body: `Dear Jordan,
  
  We have received your case from the Winzone Tech Support team. After preliminary analysis, we suspect the issue might be tied to authentication services. We are working closely with the WinzoneTechSupport and CRS teams to identify and resolve the underlying problem.
  
  Could you confirm if you have encountered similar issues with other applications or just Winzone?
  
  Sincerely,
  Alex Johnson
  Enterprise Systems Analysis (ESA)`
    },
    {
        subject: "Re: Urgent: Unable to Access Winzone Application",
        from: "CRS@example.com",
        to: "Jordan Doe <jordan.doe@example.com>",
        cc: ["ESA@example.com", "WinzoneTechSupport@example.com"],
        date: "Feb 25, 2024, 03:20 PM",
        body: `Hello Jordan,
  
  As part of the ongoing investigation into your access issue with Winzone, we've reviewed system logs and found no discrepancies on the Customer Relationship System (CRS) end that could be causing the problem. It appears the issue might be more deeply rooted in the application's infrastructure or recent updates.
  
  We continue to work with ESA and Winzone Tech Support to pinpoint the exact cause.
  
  Thank you for your continued patience.
  
  Regards,
  Emily Turner
  Customer Relationship Systems (CRS)`
    },
    {
        subject: "Re: Urgent: Unable to Access Winzone Application",
        from: "Jordan Doe <jordan.doe@example.com>",
        to: "CRS@example.com",
        cc: ["ESA@example.com", "WinzoneTechSupport@example.com"],
        date: "Feb 26, 2024, 08:10 AM",
        body: `Dear All,
  
  Thank you for the updates. To answer your questions, I have not experienced similar issues with any other applications; this is isolated to Winzone. I've tried accessing the application at various times throughout the day with the same result—no error code, just a refresh of the login page.
  
  I appreciate your efforts in resolving this and hope we can find a solution soon.
  
  Best,
  Jordan Doe`
    }
];



function Email({ email }) {
    return (
        <div className="grid gap-2 mb-4 border-blue-900">
            {/* <div className="text-sm font-semibold">{email.subject}</div> */}
            <div className="text-xs text-gray-500 dark:text-gray-400">To: {email.to}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">From: {email.from}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Date: {email.date}</div>
            <div className="prose prose-sm max-w-none">
                <p>{email.body}</p>
            </div>
        </div>
    )
}


