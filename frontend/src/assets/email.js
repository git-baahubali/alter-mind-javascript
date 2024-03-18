export default emailThread = [
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
  