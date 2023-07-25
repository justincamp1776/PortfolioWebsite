let header = [
    {
        "sectionId": 0,
        "greeting": "Welcome to my AWS cloud resume.",
        "countPhrase": "You are visitor number",
        "farewell": "Happy Scrolling!"
    }
]


let experience = [
    {
        "sectionId": 1,
        "jobTitle": "Programmer",
        "company" : "R.E. Michel Company",
        "imgPath": "images/product.png",
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
        "jobTitle": "Web Developer",
        "company" : "Buoyant Technologies",
        "imgPath": "images/html.png",
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
        "greeting": 'Welcome to my cloud resume site!', 
        "aboutPro":'Welcome to my cloud resume site! In 2021, I pivoted into the world of software development. As I sometimes say, "From strength coach to strongly typed languages!". Over the past few years, I worked an unprecedented amount of hours building my trade craft. Most recently, I had the priveledge of serving as a programmer in support of one of our nation\'s largest HVAC distributors. I have worked with many languages and within many frameworks. While there is still more to learn, I am confident that I will be an asset to your team.',
        "aboutPriv":'When I am not working or studying I often roll around on mats practicing jiu-jitsu or pretending to be a rock star on my guitar. If you\'re reading this then I suppose you\'d like to learn about my development experience...I\'ll leave you to it!'
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
    {
        "sectionId": 4,
        "school": "AWS",
        "endDate": "Dec 2015",
        "major": "AWS Certified Cloud Practitioner",
        "result": "" 
    },
];

let projects = [
    {
        "sectionId": 5,
        "title": "Order Entry EDI",
        "description": "Consolidated 50 programs into a single application using OOP. This program utilizes file watcher on an FTP directory and parses order entries of various formats. Once each file is validated the customer part numbers are mapped to vendor item numbers. Order headers and lines are dynamically built after each item is checked for availability within the customers market area. After orders complete processing an email is dynamically constructed and programmatically sent to all relavent parties.",
        "techStack": ".NET Windows Application, Java Spring Data Service, SQL Server, SVN",
        "img": "motherboard.png",
        "repository":"EDIOrderEntry"
    },
    {
        "sectionId": 5,
        "title": "XML Invoicing",
        "description": "Met with stakeholders to define user requirements. Conducted thorough analysis in order to map legacy fields to the new ERP\'s (Prophet 21) standardized database schema. I wrote compact and extensible  code, conducted manual unit tests and met with customers to complete acceptance testing.",
        "techStack": ".NET, Java Spring MicroService, SQL Server, SVN",
        "img": "invoice.png",
        "repository":""
    },
    {
        "sectionId": 5,
        "title": "Cloud Resume Challenge",
        "description": "This site is driven by a serverless architecture that is powered by AWS. It is CI/CD using AWS Code Pipeline and GitHub. The backend consists of a simple and efficient http API, no-sql, dynamoDB, and a lambda function. All documents are stored as objects within an S3 Bucket and deployed as a static website using CloudFront.",
        "techStack": "html5, css, bootstrap, jQuery, Github, AWS Services",
        "img": "cloudresume.png",
        "repository":""
    }
];

let apiUrl = "https://bk45zz89f4.execute-api.us-east-1.amazonaws.com";

function getHeader(){
    return header;
}

function getApiUrl(){
    return apiUrl;
}

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

