var header = [
    {
        "sectionId": 0,
        "greeting": "Welcome to my AWS cloud resume.",
        "countPhrase": "You are visitor number",
        "farewell": "Happy Scrolling!"
    }
]


var experience = [
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
        "d5" : "Regularly delivered new UI features to improve UX.",
        "d6" : "Manually debugged and tested new units of code. Also conducted manual regression testing to confirm all changes.",
        "stack" : "React.js, Django REST, SQLite, Material UI, Redux, Jira, Bit Bucket"
    }

];



var intro = [
    {
        "sectionId": 2,
        "name": "Justin Campbell",
        "title": "Software Developer",
        "description": "I build things for the web.",
    },
];

var about2 = [
    {
        "sectionId": 3,
        "greeting": 'Welcome to my cloud resume website! You are visitor #: ', 
        "aboutPro":'Welcome to my cloud resume! I am a passionate Software Engineer with three years of professional experience, specializing in full-stack development. I have built enterprise-level applications and developed strong problem-solving skills. I’m eager to contribute to an innovative team, leveraging my technical expertise to drive success and tackle complex challenges.',
        "aboutPriv":'When I’m not coding or working, you’ll likely find me on the mats practicing jiu-jitsu or channeling my inner rock star on the guitar. Since you’re here, I\’ll assume you\'re curious about my development experience—so I’ll var you dive right in!',
    },
];

var about = [
    {
        "sectionId": 3,
        "aboutPro":'I am a passionate developer with extensive experience using .NET and Java Spring Frameworks to craft innovative solutions for complex challenges in the manufacturing and distribution sectors. I am open to learn about new opportunities and connecting with you!',
        "aboutPro2": 'I am open to learn about new opportunities and look forward to connecting with you.'
    },
];

var connect = [
    {
        "sectionId": 6,
        "connect": 'I am open to learn about new opportunities and connecting with you!'
    },
];

var edu = [
    {
        "sectionId": 4,
        "school": "Community College of Baltimore County",
        "endDate": "Dec 2025",
        "major": "Computer Science",
        "result": "Associate of Science (A.S.) in Computer Science" 
    },
    {
        "sectionId": 4,
        "school": "AWS",
        "endDate": "Aug 2023",
        "major": "AWS Certified Cloud Practitioner",
        "result": "" 
    },
];

var projects = [
    {
        "sectionId": 5,
        "title": "Order Entry EDI",
        "description": "This C# program accounts for many variances across 50 corporations. A FileWatcher scans a directory every 15 minutes. If a new write is detected an event is raised. Once each file is validated the customer part numbers are mapped to vendor item numbers. Order headers and lines are dynamically built after each item is checked for availability within the customer’s market area. Complete orders are imported into an Epicor ERP. Lastly, a detailed order summary is dynamically constructed and emailed to all relevant parties.",
        "techStack": ".NET, Spring, SSMS, SVN",
        "img": "data-science.png",
        "repository":"EDIOrderEntry"
    },
    {
        "sectionId": 5,
        "title": "XML Invoicing",
        "description": "This C# application transforms ANSI X12 EDI 810 Invoices into XML messages. It parses batch loads by scanning segments, identifying delimiters, and mapping to appropriate fields. It programmatically FTP’s and/ or emails XML Invoices to respective customers. This program is automated via Task Scheduler on Windows Server 2017.",
        "techStack": ".NET, Spring, SQL Server, SVN",
        "img": "invoice2.png",
        "repository":""
    },
    {
        "sectionId": 5,
        "title": "Cloud Resume Challenge",
        "description": "The back-end of this site is driven by a serverless architecture that is powered by AWS. This site is CI/CD using AWS CodePipeline and GitHub. The backend consists of an HTTP API, DynamoDB(No-CQL), and a Lambda Function. All documents are stored as objects within an S3 Bucket and deployed as a static website using CloudFront",
        "techStack": "JavaScript, JQuery, Bootbox,HTML5,CSS, AWS HTTP API, DynamoDB, Lambda, AWS CloudFront, GitHub, CodePipeline",
        "img": "workflow.png",
        "repository":""
    }
];

var apiUrl = 'https://bk45zz89f4.execute-api.us-east-1.amazonaws.com';

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

function getConnect(){
    return connect;
}

function getEdu(){
    return edu;
}
 
function getProjects(){
    return projects;
}

