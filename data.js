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
        "jobTitle": "Software Developer",
        "company" : "R.E. Michel Company",
        "imgPath": "images/product.png",
        "location" : "Glen Burnie, MD",
        "startDate" : "March 2022",
        "endDate" : "March 2023",
        "d1" : "Full Stack Enterprise Application Development in C# and Java", 
        "d2" : "Built EDI 850 Order Entry and EDI 810 Invoicing programs in C# that process over $1,000,000 annually.",
        "d3" : "Created microservice processes in Java to support all Http requests for EDI accross 350 locations in 31 states.",
        "d4" : "Refactored legacy sites written in Classic ASP and VB6 to support the integration with a new ERP.",
        "d5" : "Aided in the migration of over 50 million records that were contained within our company’s 2000 plus data tables.",
        "d6" : "Restructured SQL databases to implement modern standards, remit redundancy, and capitalize on entity-relationships.",
        "stack" : ".NET, Spring, SSMS, JavaScript, JQuery, HTML5, CSS, Bootstrap, SVN"
    },
    {
        "sectionId": 1,
        "jobTitle": "Web Developer",
        "company" : "Buoyant Technologies",
        "imgPath": "images/html.png",
        "location" : "Columbia, MD",
        "startDate" : "Oct 2021",
        "endDate" : "March 2022",
        "d1" : "Full Stack Web Application Development in Python, JSX, and JavaScript using React and Django REST Framework.", 
        "d2" : "Attended daily stand ups and met weekly sprint objectives in an agile work environment.",
        "d3" : "Refactored user authentication processes in React.js applications.",
        "d4" : "Created models and view functions in Python to support the user login process.",
        "d5" : "Regularly delivered new UI features, improving the user experience.",
        "d6" : "Manually debugged and tested new units of code. Also conducted manual regression testing to confirm all changes.",
        "stack" : "React.js, Django REST, SQLite, Material UI, Redux, Jira, Bit Bucket"
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
        "greeting": 'Welcome to my cloud resume website! You are visitor #: ', 
        "aboutPro":'My aim is to reinforce my foundation in Software Engineering by serving within an organization where I can apply my current knowledge and skill set while also working to obtain a degree in Computer Science. I have built enterprise level applications and possess the problem solving skills to work through complex issues. I am hard working, analytical, and will add value to your team.',
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
        "description": "This C# program accounts for many variances across 50 corporations. A FileWatcher scans a directory every 15 minutes. If a new write is detected an event is raised. Once each file is validated the customer part numbers are mapped to vendor item numbers. Order headers and lines are dynamically built after each item is checked for availability within the customer’s market area. Complete orders are imported into an Epicor ERP. Lastly, a detailed order summary is dynamically constructed and emailed to all relevant parties.",
        "techStack": ".NET, Spring, SSMS, SVN",
        "img": "motherboard.png",
        "repository":"EDIOrderEntry"
    },
    {
        "sectionId": 5,
        "title": "XML Invoicing",
        "description": "This C# application transforms ANSI X12 EDI 810 Invoices into XML messages. It parses batch loads by scanning segments, identifying delimiters, and mapping to appropriate fields. It programmatically FTP’s and/ or emails XML Invoices to respective customers. This program is automated via Task Scheduler on Windows Server 2017.",
        "techStack": ".NET, Java Spring MicroService, SQL Server, SVN",
        "img": "invoice.png",
        "repository":""
    },
    {
        "sectionId": 5,
        "title": "Cloud Resume Challenge",
        "description": "This site is driven by a serverless architecture that is powered by AWS. This site is CI/CD using AWS CodePipeline and GitHub. The backend consists of an HTTP API, DynamoDB(No-CQL), and a Lambda Function. All documents are stored as objects within an S3 Bucket and deployed as a static website using CloudFront.",
        "techStack": "avaScript, JQuery, HTML5,CSS, AWS HTTP API, DynamoDB, Lambda, AWS CloudFront, GitHub, CodePipeline",
        "img": "cloudresume.png",
        "repository":""
    }
];

let apiUrl = 'https://bk45zz89f4.execute-api.us-east-1.amazonaws.com';

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

