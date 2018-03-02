
/* Header */
var body = document.getElementsByTagName('body')[0];
body.style.fontFamily = "Helvetica";
body.style.margin = "0";
var header = document.createElement('div');
header.classList.add('pageheader');
body.appendChild(header);
header.style.backgroundColor = "lightblue";
header.style.color = "white";
header.style.width = "95%";
header.style.height = "12%";
header.style.marginLeft = "2.5%";
header.style.marginLeft = "2.5%";
header.style.marginTop = "3%";

/* Header Title */
var pageTitle = document.createElement('h1');
pageTitle.textContent = "HighOnCoding";
header.appendChild(pageTitle);
header.style.display = "flex";
header.style.justifyContent = "flex-start";
header.style.alignItems = "center";
pageTitle.style.marginLeft = "15px";

/* Menu */
var headerMenu = document.createElement('span');
headerMenu.textContent = "Home";
header.appendChild(headerMenu);
headerMenu.style.marginLeft = "60px";
headerMenu.style.marginTop = "5px";
var headerMenu2 = document.createElement('span');
headerMenu2.textContent = "Categories";
header.appendChild(headerMenu2);
headerMenu2.style.marginLeft = "60px";
headerMenu2.style.marginTop = "5px";

/* Introduction */
var intro = document.createElement('div');
body.appendChild(intro);
intro.style.backgroundColor = "lightgray";
intro.style.dispay = "block";
intro.style.width = "85%";
intro.style.marginTop = "30px";
intro.style.marginLeft = "7%";
intro.style.marginRight = "10%";   
intro.style.paddingBottom = "20px"; 
intro.style.paddingRight = "20px";    
intro.style.height = "auto";
var introHeader = document.createElement('h2');
introHeader.textContent = "Curse of the Current Reviews";
intro.appendChild(introHeader);
introHeader.style.color = "#494E54";
introHeader.style.paddingTop = "10px";
introHeader.style.marginLeft = "10px";
var introText = document.createElement('p');
introText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
intro.appendChild(introText);
introText.style.fontSize = "14px";
introText.style.paddingLeft = "15px";
introText.style.paddingRight = "15px";

/* App One */

var app1 = document.createElement('div');
body.appendChild(app1);
app1.style.width = "85%";
app1.style.height = "auto";
app1.style.marginTop = "30px";
app1.style.marginLeft = "7%";
app1.style.marginRight = "10%";
var app1Header = document.createElement('p');
app1Header.textContent = "Hello Watchkit";
app1.appendChild(app1Header);
app1Header.style.color = "lightblue";
app1Header.style.fontSize = "26px";
app1Header.style.fontWeight = "lighter";
app1Header.style.paddingTop = "10px";
app1Header.style.paddingLeft = "10px";

var app1Text = document.createElement('p');
app1Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
app1.appendChild(app1Text);
app1Text.style.fontSize = "14px";
app1Text.style.paddingLeft = "10px";
app1Text.style.paddingRight = "10px";
var app1Social = document.createElement('div');
app1.appendChild(app1Social);
app1Social.style.backgroundColor = "orange";
app1Social.style.width = "100%";
app1Social.style.height = "auto";
app1Social.style.padding = "5px";
app1Social.style.clear = "both";

var comments1 = document.createElement('p');
comments1.textContent = "12 Comments";
app1Social.appendChild(comments1);
comments1.style.display = "inline-block";
comments1.style.color = "white";
comments1.style.fontSize = "20px";
comments1.style.paddingLeft = "40px";
comments1.style.padding = "0px 0px 0px 40px";
comments1.style.margin = "0px";
var likes1 = document.createElement('p');
likes1.textContent = "124 Likes";
app1Social.appendChild(likes1);
likes1.style.display = "inline-block";
likes1.style.color = "white";
likes1.style.fontSize = "20px";
likes1.style.padding = "0px 0px 0px 40px";
likes1.style.margin = "0px";

/* App Two */

var app2 = document.createElement('div');
body.appendChild(app2);
app2.style.width = "85%";
app2.style.height = "auto";
app2.style.marginTop = "30px";
app2.style.marginLeft = "7%";
app2.style.marginRight = "10%";
var app2Header = document.createElement('p');
app2Header.textContent = "Introduction to Swift";
app2.appendChild(app2Header);
app2Header.style.color = "lightblue";
app2Header.style.fontSize = "26px";
app2Header.style.fontWeight = "lighter";
app2Header.style.paddingTop = "10px";
app2Header.style.paddingLeft = "10px";

var app2Text = document.createElement('p');
app2Text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
app2.appendChild(app2Text);
app2Text.style.fontSize = "14px";
app2Text.style.paddingLeft = "10px";
app2Text.style.paddingRight = "10px";
var app2Social = document.createElement('div');
app2.appendChild(app2Social);
app2Social.style.backgroundColor = "orange";
app2Social.style.width = "100%";
app2Social.style.height = "auto";
app2Social.style.padding = "5px";
app2Social.style.clear = "both";

var comments2 = document.createElement('p');
comments2.textContent = "12 Comments";
app2Social.appendChild(comments2);
comments2.style.display = "inline-block";
comments2.style.color = "white";
comments2.style.fontSize = "20px";
comments2.style.paddingLeft = "40px";
comments2.style.padding = "0px 0px 0px 40px";
comments2.style.margin = "0px";
var likes2 = document.createElement('p');
likes2.textContent = "124 Likes";
app2Social.appendChild(likes2);
likes2.style.display = "inline-block";
likes2.style.color = "white";
likes2.style.fontSize = "20px";
likes2.style.padding = "0px 0px 0px 40px";
likes2.style.margin = "0px";

/* Picture Container */

var picContainer = document.createElement('div');
body.appendChild(picContainer);
picContainer.classList.add('container');
picContainer.style.width = "86.5%";
picContainer.style.height = "900px";
picContainer.style.marginTop = "30px";
picContainer.style.marginLeft = "7%";
picContainer.style.marginRight = "10%";
picContainer.style.paddingRight = "0px";

picContainer.style.backgroundColor = "black";

/* First Row */

var firstRow = document.createElement('div');
firstRow.classList.add('row');
picContainer.appendChild(firstRow);
firstRow.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
firstRow.style.height = "300px";
firstRow.style.width = "100%";

/* Second Row */

var secondRow = document.createElement('div');
secondRow.classList.add('row');
picContainer.appendChild(secondRow);
secondRow.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
secondRow.style.height = "300px";
secondRow.style.width = "100%";

/* Third Row */

var thirdRow = document.createElement('div');
thirdRow.classList.add('row');
picContainer.appendChild(thirdRow);
thirdRow.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
thirdRow.style.height = "300px";
thirdRow.style.width = "100%";

/* Footer */

var footer = document.createElement('footer');
body.appendChild(footer);
footer.style.width = "100%";
footer.style.height= "200px";
footer.style.backgroundColor = "slategrey";
footer.style.marginTop = "100px";


