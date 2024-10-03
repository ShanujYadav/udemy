import React, { useState } from "react";

export const Product = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections({
      ...expandedSections,
      [index]: !expandedSections[index],
    });
  };

  const sections = [
    { title: "Introduction", lectures: 1, duration: "3min" },
    { title: "How the Internet Works", lectures: 7, duration: "30min" },
    { title: "The Web Development Process", lectures: 1, duration: "3min" },
    { title: "Planning a Website", lectures: 1, duration: "5min" },
    { title: "Web Hosting and System Requirements", lectures: 5, duration: "26min" },
    { title: "Domain Names", lectures: 9, duration: "24min" },
    { title: "Testing Environment", lectures: 5, duration: "26min" },
    { title: "Introduction to Cloud Computing", lectures: 4, duration: "19min" },
    { title: "Cloud Computing Service Models", lectures: 4, duration: "20min" },
    { title: "Cloud Server Deployment on Linode", lectures: 11, duration: "1hr 15min" },
  ];

  return (
    <div>
      <div className="bg-white text-white py-0 px-0">
        {/* Main container */}
        <div className="max-w-full p-6 lg:p-14 bg-gray-900 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between lg:space-x-6">
            {/* Left: Course Details */}
            <div className="flex-1">
              {/* Breadcrumb */}
              <p className="text-sm text-gray-400 mb-2">
                Development {'>'} Web Development
              </p>
              <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                Web Development Masterclass - Online Certification Course
              </h1>
              <p className="text-base text-gray-300 mb-4">
                Cloud Computing | Web Apps | Linux | Web Servers | DBMS | LAMP Stack | HTML | CSS | JavaScript | PHP | + More
              </p>
              {/* Ratings and stats */}
              <div className="flex items-center space-x-2 text-yellow-500 mb-4">
                <span className="font-bold text-lg">4.3</span>
                <span className="text-sm text-blue-500">(9,949 ratings)</span>
                <span className="text-sm text-gray-400">• 484,226 students</span>
              </div>
              <p className="text-gray-300 mb-4">
                Created by <span className="text-blue-400">YouAccel Training</span>
              </p>
              <p className="text-sm text-gray-400">Last updated 09/2022</p>
              <p className="text-sm text-gray-400">English [Auto], Spanish [Auto]</p>
            </div>

            {/* Right: Sticky Sidebar */}
            <div className="w-full lg:w-1/4 z-50 lg:fixed lg:right-0 lg:top-0 lg:h-auto lg:bg-gray-800 p-4 rounded-lg mt-4 lg:mt-14">
              <div className="mb-4">
                <div className="w-full h-32 bg-gray-600 flex items-center justify-center mb-3 rounded-lg">
                  <span className="text-gray-300">400 x 200</span>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-center font-semibold">
                  Preview this course
                </button>
              </div>
              <div className="flex justify-center mb-3">
                <button className="py-2 px-4 bg-purple-600 text-white rounded-lg w-full text-center">
                  Start subscription
                </button>
              </div>
              <p className="text-center text-sm text-gray-400 mb-3">
                Starting at ₹850 per month
              </p>
              <div className="text-center mb-3">
                <span className="text-2xl font-bold">₹3,099</span>
                <p className="text-red-500">Unavailable</p>
              </div>
              <hr className="my-3 border-gray-600" />
              <div className="text-center space-y-2">
                <button className="w-full py-2 bg-gray-700 text-white rounded-lg">
                  Gift this course
                </button>
                <button className="w-full py-2 bg-gray-700 text-white rounded-lg">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* What you'll learn section */}
        <div className="mt-8 bg-white w-full lg:w-2/3 text-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">What you'll learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-inside list-disc space-y-6">
              <li>Understand the essentials of Local and Wide Area Networks</li>
              <li>Register a domain name with Domain Privacy</li>
              <li>Configure Nameservers and DNS Zone Files</li>
              <li>Configure a Production web server on popular cloud hosting platforms</li>
            </ul>
            <ul className="list-inside list-disc space-y-6">
              <li>Setup a basic network</li>
              <li>Forward a domain, renew and administer a domain</li>
              <li>Create and Configure a Testing server on a Local Windows or MAC System</li>
              <li>Create disk backups and install disk images on a virtual server</li>
            </ul>
          </div>
        </div>

        {/* Description section */}
        <div className="mt-8 bg-white w-full lg:w-2/3 text-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">Description</h2>
          <p className="mb-4 text-lg">
            This course offers a comprehensive look into the entire web development process—from local server configuration using WAMP and MAMP (Apache, MySQL, PHP) to production deployment using the latest web technologies...
          </p>
        </div>

        {/* Course content section */}
        <div className="mt-8 bg-white w-full lg:w-2/3 text-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">Course content</h2>
          <p className="text-sm text-gray-600 mb-4">
            30 sections • 398 lectures • 26h 2m total length
          </p>
          <div className="mb-4 text-purple-600 text-sm cursor-pointer">
            Expand all sections
          </div>
          {sections.map((section, index) => (
            <div key={index} className="mb-2">
              <div
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <span>{section.title}</span>
                <span className="text-sm text-gray-500">
                  {section.lectures} lectures • {section.duration}
                </span>
              </div>
              {expandedSections[index] && (
                <div className="mt-2 px-4 py-2 bg-gray-50 rounded-lg">
                  Additional content for {section.title}
                </div>
              )}
            </div>
          ))}
          <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">
            View full course content
          </button>
        </div>

        {/* Requirements section */}
        <div className="mt-8 bg-white w-full lg:w-2/3 text-gray-900 p-6 rounded-lg shadow-md ">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">Requirements</h2>
          <ul className="list-disc list-inside">
            <li>Windows 10 or Mac OS X</li>
            <li>Some experience with HTML/CSS and JavaScript (no problem if you don’t have it)</li>
            <li>A computer with an internet connection</li>
            <li>Basic knowledge of Linux (not mandatory)</li>
          </ul>
        </div>

        {/* Students Also Bought section */}
        <div className="mt-8 bg-white w-full lg:w-2/3 text-gray-900 p-6 rounded-lg shadow-md ">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Students Also Bought</h2>
          <ul className="space-y-6">
            {[
              {
                title: "Become a Certified Web Developer: HTML, CSS and JavaScript",
                rating: "4.5",
                reviews: "38,571",
                price: "₹3,099",
                totalHours: "55 total hours",
                updated: "8/2023",
                imgSrc: "path/to/image1.jpg",
              },
              {
                title: "The Complete 2020 Fullstack Web Developer Course",
                rating: "4.6",
                reviews: "97,652",
                price: "₹3,699",
                totalHours: "67 total hours",
                updated: "8/2020",
                imgSrc: "path/to/image2.jpg",
              },
              {
                title: "Introduction to Web Development",
                rating: "4.5",
                reviews: "25,305",
                price: "₹2,499",
                totalHours: "2 total hours",
                updated: "4/2016",
                imgSrc: "path/to/image3.jpg",
              },
              {
                title: "Ultimate Web Designer & Web Developer Course",
                rating: "4.6",
                reviews: "83,568",
                price: "₹3,699",
                totalHours: "35 total hours",
                updated: "3/2022",
                bestseller: true,
                imgSrc: "path/to/image4.jpg",
              },
              {
                title: "Introduction to Programming",
                rating: "4.7",
                reviews: "7,649",
                price: "₹3,499",
                totalHours: "12 total hours",
                updated: "1/2017",
                imgSrc: "path/to/image5.jpg",
              },
              {
                title: "The Complete Web Development Course - Build 15 Projects",
                rating: "4.4",
                reviews: "42,256",
                price: "₹3,699",
                totalHours: "99.5 total hours",
                updated: "9/2024",
                imgSrc: "path/to/image6.jpg",
              },
            ].map((course, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={course.imgSrc}
                  alt={course.title}
                  className="w-full md:w-20 md:h-20 object-cover mr-0 md:mr-4 mb-4 md:mb-0"
                />
                <div className="flex-1 mb-2 md:mb-0">
                  <p className="text-lg font-semibold">{course.title}</p>
                  <p className="text-sm text-gray-500">
                    {course.totalHours} • Updated {course.updated}
                  </p>
                  {course.bestseller && (
                    <span className="inline-block bg-yellow-400 text-black text-xs px-2 py-1 rounded-lg mt-2">
                      Bestseller
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12.146l-3.717 1.954.711-4.149L2 6.364l4.163-.604L8 2l1.837 3.76L14 6.364l-3.994 3.587.711 4.149L8 12.146z" />
                    </svg>
                    <span className="text-yellow-500 font-bold ml-1">{course.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({course.reviews})</span>
                  </div>
                  <span className="text-gray-800 font-semibold text-lg">{course.price}</span>
                </div>
              </li>
            ))}
          </ul>
          <button className="w-full mt-6 py-2 bg-gray-800 text-white rounded-lg transition-colors duration-200 hover:bg-gray-700">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};





// export const Product = () => {
//   const [open, setOpen] = React.useState(false)

//   const handleClick = () => {
//     setOpen(!open);
//   };
//   const handleClick2 = () => {
//     setOpen(!open);
//   };

//   return (
//     <div>
//       {/* <PlayCircleFilledRoundedIcon/> */}
//       <div className="BlackBox">
//         <div className="BBText">
//           <div className="flex purpal">
//             <h5>Development</h5>
//             <span className="icon">
//               <ArrowRightSharpIcon />
//             </span>
//             <h5> Programming Languages </h5>
//             <span className="icon">
//               <ArrowRightSharpIcon />
//             </span>
//             <h5>Data Analysis</h5>
//           </div>

//           <h1 className="white headingTop1">
//             Learning Python for Data Analysis and Visualization
//           </h1>

//           <h3 className="white">
//             Learn python and how to use it to analyze,visualize and present
//             data. Includes tons of sample code and hours of video!
//           </h3>

//           <div>
//             <span className=" Ybox">Bestseller</span>
//             <span className="darkyellow">
//               4.3
//               <span>
//                 <StarPurple500SharpIcon />
//                 <StarPurple500SharpIcon />
//                 <StarPurple500SharpIcon />
//                 <StarPurple500SharpIcon />
//                 <StarHalfSharpIcon />
//               </span>
//             </span>
//             <span className="purpal underline">(17,379 rating)</span>
//             <span className="white">185,449 students</span>
//           </div>

//           <div className="Bcreated">
//             <span className="white">Created by </span>
//             <span className="purpal underline">Jose Portilla</span>
//           </div>

//           <div className="white BBbottom">
//             <span className="BBicons">
//               <ReportIcon />
//             </span>
//             <span className="BBbottomText">Last updated 9/2019</span>
//             <span className="BBicons">
//               {" "}
//               <PublicTwoToneIcon />
//             </span>
//             <span className="BBbottomText">English</span>
//             <span className="BBicons">
//               <ClosedCaptionRoundedIcon />
//             </span>
//             <span className="BBbottomText">
//               English [Auto], Indonesian [Auto],{" "}
//             </span>
//             <span className="BBbottomText underline">6more</span>
//           </div>
//         </div>
//       </div>

//       {/* ////////////////////////////-------fixBox---------------//////// */}

//       <div className="fixBox FixB">
//         <div className="innerFixBox">
//           <div className="Ftop2lines">
//             <div className="flex FTH">
//               <h1 className="FT1"> ₹455 </h1>
//               <span className="FT2"> ₹3,499 </span>
//               <span className="FT3"> 87% off </span>
//             </div>
//             <div className="red">
//               <AccessAlarmsIcon />
//               <span className="bold">5 hours</span> left at this price!
//             </div>
//           </div>

//           <button className="gotocartBtn">Go to cart</button>
//           <button className="buynowBtn">Buy now</button>

//           <p className="center">30-Day Money-Back Guarantee</p>

//           <div className="ThisCourse">
//             <h4>This course includes:</h4>
//             <p>
//               <OndemandVideoSharpIcon /> 21 hours on-demand video
//             </p>
//             <p>
//               <NoteAddSharpIcon /> 3 articles
//             </p>
//             <p>
//               <SystemUpdateAltTwoToneIcon /> 4 downloadable resources
//             </p>
//             <p>
//               <AllInclusiveTwoToneIcon /> Full lifetime access
//             </p>
//             <p>
//               <PhoneAndroidTwoToneIcon /> Access on mobile and TV
//             </p>
//             <p>
//               <EmojiEventsTwoToneIcon /> Certificate of completion
//             </p>
//           </div>

//           <div className="flex gap underline pointer">
//             <h4>Share</h4>
//             <h4>Gift this course</h4>
//             <h4>Apply Coupon</h4>
//           </div>

//           <div className="training">
//             <h3>Training 5 or more people?</h3>
//             <p>
//               Get your team access to 6,000+ top Udemy courses anytime,
//               anywhere.
//             </p>
//             <button className="buynowBtn btn2">Try Udemy Business</button>
//           </div>
//         </div>
//       </div>

//       {/* --------------------------------------------------------------- */}

//       <div className="MiddleMainDiv">
//         <div className="MiddleContent">
//           <h2>What you'll learn</h2>
//           <div className="flex">
//             <table>
//               <tr className="MLcon flex">
//                 <td className="MLcon flex">
//                   <span>
//                     <DoneRoundedIcon />
//                   </span>
//                   <p>Have an intermediate skill level of Python programming.</p>
//                 </td>

//                 <td className="MLcon flex">
//                   <span>
//                     <DoneRoundedIcon />
//                   </span>
//                   <p>Use the Jupyter Notebook Environment.</p>
//                 </td>
//               </tr>
//               <tr className="MLcon flex">
//                 <td className="MLcon flex">
//                   <span>
//                     <DoneRoundedIcon />
//                   </span>
//                   <p>Use the numpy library to create and manipulate arrays.</p>
//                 </td>

//                 <td className="MLcon flex">
//                   <span>
//                     <DoneRoundedIcon />
//                   </span>
//                   <p>
//                     Use the pandas module with Python to create and structure
//                     data.
//                   </p>
//                 </td>
//               </tr>
//               <tr className="MLcon flex">
//                 <td className="MLcon flex">
//                   <span>
//                     <DoneRoundedIcon />
//                   </span>
//                   <p>
//                     Learn how to work with various data formats within python,
//                     including: JSON,HTML, and MS Excel Worksheets.
//                   </p>
//                 </td>

//                 <td className="MLcon flex">
//                   <span>
//                     <DoneRoundedIcon />
//                   </span>
//                   <p>
//                     Create data visualizations using matplotlib and the seaborn
//                     modules with python.
//                   </p>
//                 </td>
//               </tr>
//               <tr className="MLcon flex">
//                 <td className="MLcon flex">
//                   <span>
//                     <DoneRoundedIcon />
//                   </span>
//                   <p>Have a portfolio of various data analysis projects.</p>
//                 </td>

//                 <td className="MLcon flex"></td>
//               </tr>
//             </table>
//           </div>
//         </div>

//         <div className="CourseContent">
//           <h2>Course content</h2>
//           <div className="flex">
//             <p>15 sections • 110 lectures • 21h 5m total length</p>
//             <h5 className="Expand">Expand all sectons</h5>
//           </div>

//           <div className="CourceMainBox">
//             <div className="CourceBoxs">
//               <List sx={{ width: "100%" }}>
//                 <ListItemButton onClick={handleClick}>
//                   <div className="OpenBox flex">
//                     {open ? (
//                       <ExpandLess className="openArrow" />
//                     ) : (
//                       <ExpandMore className="openArrow" />
//                     )}
//                     <h4>Intro to Course and Python</h4>
//                     <span className="CourseCTime">2 lecture • 7 min</span>
//                   </div>
//                 </ListItemButton>
//                 <Collapse in={open} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     <ListItemButton sx={{ pl: 3 }}></ListItemButton>
//                     <div className="AfterOpendiv">
//                       <div className="flex ConDiv">
//                         <PlayCircleFilledRoundedIcon className="playIcon" />
//                         <p className="courseInfo">Course Info</p>
//                       </div>
//                       <div className="flex ConDiv">
//                         <PlayCircleFilledRoundedIcon className="playIcon" />
//                         <p className="courseInfo">Course Info</p>
//                       </div>
//                       <div className="flex ConDiv">
//                         <PlayCircleFilledRoundedIcon className="playIcon" />
//                         <p className="courseInfo">Course Info</p>
//                       </div>
//                     </div>
//                   </List>
//                 </Collapse>
//               </List>
//             </div>

//             <div className="CourceBoxs">
//               <List sx={{ width: "100%" }}>
//                 <ListItemButton onClick={handleClick2}>
//                   <div className="OpenBox flex">
//                     {open ? (
//                       <ExpandLess className="openArrow" />
//                     ) : (
//                       <ExpandMore className="openArrow" />
//                     )}
//                     <h4>Setup</h4>
//                     <span className="CourseCTime">3 lecture • 17 min</span>
//                   </div>
//                 </ListItemButton>
//                 <Collapse in={open} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     <ListItemButton sx={{ pl: 3 }}></ListItemButton>
//                     <div className="AfterOpendiv">
//                       <div className="flex ConDiv">
//                         <PlayCircleFilledRoundedIcon className="playIcon" />
//                         <p className="courseInfo">Course Info</p>
//                       </div>
//                       <div className="flex ConDiv">
//                         <PlayCircleFilledRoundedIcon className="playIcon" />
//                         <p className="courseInfo">Course Info</p>
//                       </div>
//                       <div className="flex ConDiv">
//                         <PlayCircleFilledRoundedIcon className="playIcon" />
//                         <p className="courseInfo">Course Info</p>
//                       </div>
//                     </div>
//                   </List>
//                 </Collapse>
//               </List>
//             </div>

//             <div className="CourceBoxs">
//               <List sx={{ width: "100%" }}>
//                 <ListItemButton onClick={handleClick}>
//                   <div className="OpenBox flex">
//                     {open ? (
//                       <ExpandLess className="openArrow" />
//                     ) : (
//                       <ExpandMore className="openArrow" />
//                     )}
//                     <h4>Learning Numpy</h4>
//                     <span className="CourseCTime">8 lecture • 1hr 7 min</span>
//                   </div>
//                 </ListItemButton>
//                 <Collapse in={open} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     <ListItemButton sx={{ pl: 3 }}></ListItemButton>
//                     <div className="AfterOpendiv">
//                       <div className="flex ConDiv">
//                         <PlayCircleFilledRoundedIcon className="playIcon" />
//                         <p className="courseInfo">Course Info</p>
//                       </div>
//                       <div className="flex ConDiv">
//                         <PlayCircleFilledRoundedIcon className="playIcon" />
//                         <p className="courseInfo">Course Info</p>
//                       </div>
//                       <div className="flex ConDiv">
//                         <PlayCircleFilledRoundedIcon className="playIcon" />
//                         <p className="courseInfo">Course Info</p>
//                       </div>
//                     </div>
//                   </List>
//                 </Collapse>
//               </List>
//             </div>
//           </div>

//           <div className="moreSection">
//             <h5>5 more section</h5>
//           </div>

//           {/* <hr />
//            <hr /> */}
//           {/* ========================================================== */}
//           {/* ----------------------------------------------------------- */}

//           {/* <Accordion>
               
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
          
           
//           <Typography><h4>Intro to Course and Python</h4></Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion> */}
//           {/* --------------------------------------------------------------- */}

//           {/* <Accordion>
               
//                <AccordionSummary
//                  expandIcon={<ExpandMoreIcon />}
//                  aria-controls="panel1a-content"
//                  id="panel1a-header"
//                >
                 
                  
//                  <Typography><h4>Setup</h4></Typography>
//                </AccordionSummary>
//                <AccordionDetails>
//                  <Typography>
//                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                    malesuada lacus ex, sit amet blandit leo lobortis eget.
//                  </Typography>
//                </AccordionDetails>
//              </Accordion>
            
//              <Accordion>
               
//                <AccordionSummary
//                  expandIcon={<ExpandMoreIcon />}
                 
//                  aria-controls="panel1a-content"
//                  id="panel1a-header"
//                >
                   
                 
                  
//                  <Typography><h4>Learning Numpy</h4></Typography>
                 
//                </AccordionSummary>
//                <AccordionDetails>
//                  <Typography>
//                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                    malesuada lacus ex, sit amet blandit leo lobortis eget.
//                  </Typography>
//                </AccordionDetails>
               
//              </Accordion>
            
//              <Accordion>
               
//                <AccordionSummary
//                  expandIcon={<ExpandMoreIcon />}
//                  aria-controls="panel1a-content"
//                  id="panel1a-header"
//                >
                 
                  
//                  <Typography><h4>Intro to Course and Python</h4></Typography>
//                </AccordionSummary>
//                <AccordionDetails>
//                  <Typography>
//                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                    malesuada lacus ex, sit amet blandit leo lobortis eget.
//                  </Typography>
//                </AccordionDetails>
//              </Accordion>
            

//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
            
//           <Typography>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion disabled>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3a-content"
//           id="panel3a-header"
//         >
//           <Typography>Disabled Accordion</Typography>
//         </AccordionSummary>
//       </Accordion> */}

//           {/* ================================================================ */}
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// }