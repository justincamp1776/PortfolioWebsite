let experience = [
    {
        "sectionId": 1,
        "jobTitle": "Programmer",
        "company" : "R.E. Michel Company",
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
        "description": "I build things for the web.",
    },
];

let about = [
    {
        "sectionId": 3,
        "aboutMe":'Welcome to my site! In 2021, I pivoted into the world of software developmnent. "From strength coach to strongly typed languages", as I like to say. The past few years have been arduous but rewarding. I have proven myself in the industry and released projects that our nation\'s critical infrastructure depend on. While I still have a lot to learn, I have a lot to offer to your team and organization. When I am not working or studying I often roll around on mats practicing jiu-jitsu or pretend to be a rock star on my guitar. I enjoy challenges and live for those moments when I cross the last task off the list. If you\'re reading this then I suppose you\'d like to learn about my development experience...I\'ll leave you to it!'

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

let strStmt = "Hi, I'm Justin . . . Welcome to my site."


function getStrStmt(){
    return strStmt;
}

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

