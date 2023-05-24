let experience = [
    {
        "sectionId": 1,
        "jobTitle": "Programmer",
        "company" : "R.E. Michel",
        "location" : "Glen Burnie, MD",
        "startDate" : "March 2022",
        "endDate" : "March 2023",
        "d1" : "Integrated over 50 stand-alone EDI order-entry programs into a single .NET Windows Application using object oriented design patterns, refactored legacy software applications that serve a base of over a million customers and created an XML invoice messaging program in order to meet new system requirements, enhance efficiency, and improve maintainability.", 
        "d2" : "Conducted extensive code analysis as well as trouble shooting sessions, with executives and stakeholders, to define user requirements and complete acceptance testing.",
        "d3" : "Developed data service packages within an existing microservice architecture, using the DAO design pattern, while leveraging existing code bases for maintainability, readability, and future expansion.",
        "d4" : "Restructured databases in Microsoft SQLServer Management Studio and assisted in the conversion of millions of records while following modern SQL standards to remit data redundancy, capitalize on entity relationships, and improve readability."
    },
    {
        "sectionId": 1,
        "jobTitle": "Junior Web Developer",
        "company" : "Buoyant Technologies",
        "location" : "Columbia, MD",
        "startDate" : "Oct 2021",
        "endDate" : "March 2022",
        "d1" : "Participated in meetings with senior engineers to determine user requirements and attended daily stand ups in an agile work environment.", 
        "d2" : "Wrote eloquent , compact code for UI components, exhibiting low-latency,  in React using material UI and bootstrap.",
        "d3" : "Designed and built a UI component in React for viewing, scheduling, and editing resource reservations.",
        "d4" : "Manually debugged and tested units of code to confirm the continuity of contracts and ensure evaluations were accurate and dependable."
    }

];

let intro = [
    {
        "sectionId": 2,
        "name": "Justin Campbell",
        "title": "Software Developer",
        "description": "I build full stack web applications.",
    },
];

let about = [
    {
        "sectionId": 3,
        "aboutMe":"In 2021, I graduated from a full stack software development boot camp. I learned the basics of programming and created full stack web applications. I now have 18 months of experience working as a Software Developer and am constantly working to add relevant certifications to my resume. I am currently scheduled to take the AWS Certified Cloud Practitioner exam on May 29th, 2023 and the compTia A+ Certification exam on June 23, 2023.I have proven that I have the aptitude to learn new technologies and the problem solving skills to work through complex issues. I have worked in customer facing environments and thrive under pressure. I have worked beside very talented software engineers and system architects. I know what it takes to be successful in this industry. My aim is to exceed the standard. At R.E. Michel I built full stack applications and  assisted our help desk in crucial moments by trouble-shooting tickets and providing technical guidance to branch managers. I am ready take on new challenges. I am constantly pushing my limits and strive to to display excellence in everything that I do. I work well in team environments and am self-reliant. I know when to ask the right questions and always look for ways to improve. I will provide value to your team and look forward to collaborating with you."

    },
];

let edu = [
    {
        "sectionId": 4,
        "school": "Southeastern Bible College",
        "endDate": "Dec 2015",
        "major": "International Missions",
        "result": "22 credits" 
    },
];

let projects = [
    {
        "sectionId": 5,
        "title": "Order Entry EDI",
        "description": "I consolidated 50 programs into a single application using factories, interfaces, abstractions, database redesign, and custom java packages. This program watches an FTP directory, parses ANSI X12, Excel, or flat files, validates/ scrubs data, writes orders as a tab-delimited messages, imports files into the new ERP platform, and communicates processing results to all relevant parties.",
        "techStack": ".NET Windows Application OOP, Java Spring Data Service DAO Pattern, MSMS, SVN",
        "img": "motherboard.png",
        "repository":"EDIOrderEntry"
    },
    {
        "sectionId": 5,
        "title": "XML Invoicing",
        "description": "Conducted thorough code analysis and meetings with stakeholders to define user requirements, mapped existing fields to prophet 21’s  standardized database schema, wrote compact and extensible  code, met with customers to complete acceptance testing and released.",
        "techStack": ".NET, Java Spring MicroService, SSMS, SVN",
        "img": "invoice.png",
        "repository":""
    }
];

let

let openStmt = [
    ["H", "i", ",", " "],
    ["I", "'", "m", " "],
    ["J", "u", "s", "t", "i", "n", ".", " "],
    ["W", "e", "l", "c", "o", "m", "e", " "],
    ["t", "o", " "],
    ["J", "u", "s", "t", "i", "n", ".", " "],
    ["J", "u", "s", "t", "i", "n", ".", " "],
]

function getExperience(){
    return experience;
}

function getIntro(){
    return intro;
}

function getAbout(){
    return about;
}

function getEdu(){
    return edu;
}
 
function getProjects(){
    return projects;
}

function getOpenStmt(){
    return openStmt;
}