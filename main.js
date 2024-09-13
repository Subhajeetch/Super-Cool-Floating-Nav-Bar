const buttonData = `

      <div class="button" onclick="showContent(1);">
        <img class="button_icon" src="images/staff.png" alt="staff" />
        <p class="button_title">Staff Corner</p>
      </div>
      
      <div class="button" onclick="showContent(2);">
        <img class="button_icon" src="images/layout.png" alt="layout" />
        <p class="button_title">Layout</p>
      </div>
      
      <div class="button" onclick="showContent(3);">
        <img class="button_icon" src="images/insights.png" alt="Insights" />
        <p class="button_title">Insights</p>
      </div>
      
      <div class="button" onclick="showContent(4);">
        <img class="button_icon" src="images/users.png" alt="users" />
        <p class="button_title">Users</p>
      </div>
      
      <div class="button" onclick="showContent(5);">
        <img class="button_icon" src="images/command.png" alt="commands" />
        <p class="button_title">Commands</p>
      </div>
      
      <div class="button" onclick="showContent(6);">
        <img class="button_icon" src="images/reports.png" alt="reports" />
        <p class="button_title">Reports</p>
      </div>
      
      <div class="button" onclick="showContent(7);">
        <img class="button_icon" src="images/mod.png" alt="mod" />
        <p class="button_title">Moderation</p>
      </div>
      
      <div class="button" onclick="showContent(8);">
        <img class="button_icon" src="images/setting.png" alt="settings" />
        <p class="button_title">Settings</p>
      </div>
      
      <div class="button" onclick="showContent(9);">
        <img class="button_icon" src="images/logout.png" alt="log-out" />
        <p class="button_title">Log Out</p>
      </div>

  `;






const data = {
  usersContent: `

      <div class="content-info">
         <h1>Manage Users</h1>
         <p>The users wil be displayed here!</p>
      </div>
    
    `,

  layoutContent: `

    <div class="content-info">
      <h1>Update Layout</h1>
      <p>You can update the layout here!</p>
    </div>

    `,
    
    modContent: `
      <div class="content-info">
        <h1>Moderation</h1>
        <p>You can moderate users here!</p>
      </div>
    `,
    
    insightContent: `
      <div class="content-info">
        <h1>Insights</h1>
        <p>See site insights here!</p>
      </div>
    `,
    
    commandsContent: `
      <div class="content-info">
        <h1>Command Panel</h1>
        <p>Execute commands here!</p>
      </div>
    `,
    
    userReportsContent: `
      <div class="content-info">
        <h1>User Reports</h1>
        <p>Handle user reports here!</p>
      </div>
    `,
    
    staffCornerContent: `
      <div class="content-info">
        <h1>Staff Corner</h1>
        <p>Staffs can have a chat here!</p>
      </div>
    `,
    
    serverStatusContent: `
      <div class="content-info">
        <h1>Server Status</h1>
        <p>Server status will be shown here!</p>
      </div>
    `,
    
    settingsContent: `
      <div class="content-info">
        <h1>Settings</h1>
        <p>Settings will be shown up here!</p>
      </div>
    `,
    
    logInOutContent: `
      <div class="content-info">
        <h1>Log Out</h1>
        <p>You can log out here!</p>
      </div>
    `
};





const box = document.querySelector('.box');

const openBtn = document.querySelector('.open_btn');
const closeBtn = document.querySelector('.close_btn');

const accountInfo = document.querySelector('.account_info');
const profilePic = document.querySelector('.profile_pic');
const nameAndRole = document.querySelector('.name_and_role_container');

const buttonContainer = document.querySelector('.button_container');
const closedBtnContainer = document.querySelector('.closed_btn_container');

openBtn.addEventListener('click', () => {
  showAllBtns();
});

closeBtn.addEventListener('click', () => {
  hideAllBtns();
});



function showAllBtns() {
  
  box.classList.remove('box_close')
  box.classList.add('box_open');
  
  box.style.cssText = "flex-direction: column; transition: 0.35s ease-in-out;";
  
  
  openBtn.style.display = 'none';
  closeBtn.style.cssText = 'display: block;';
  closeBtn.style.cssText = "display: flex; justify-content: center; align-items: center;";
  closedBtnContainer.style.display = 'none';
  
  
   profilePic.style.height = '70px';
   
   
   
   accountInfo.style.cssText = 'height: 120px; width: 100%; margin: 10px 0 20px; 0';
   
   
   setTimeout(() => {
     buttonContainer.innerHTML = buttonData;
     nameAndRole.style.display = 'flex';
   }, 300)
   buttonContainer.style.opacity = 1;
};

function hideAllBtns() {
  
  box.classList.remove('box_open')
  box.classList.add('box_close');
  
  
  box.style.cssText = "flex-direction: column; transition: 0.35s ease-in-out;";
  
  
  setTimeout(() => {
    box.style.flexDirection = 'row';
    closedBtnContainer.style.display = 'flex';
  }, 280);
  
  
  
  
  closeBtn.style.display = 'none';
  openBtn.style.display = 'block';
  openBtn.style.cssText = "display: flex; justify-content: center; align-items: center;";
  
  
  
  profilePic.style.height = '42px';
  nameAndRole.style.display = 'none';
  
  accountInfo.style.cssText = 'height: ; width: ; margin-bottom: ;';
  
  buttonContainer.innerHTML = '';
  buttonContainer.style.opacity = 0;
};




function showContent(value) {
  
  const content = document.querySelector('.content_container');
  const closedBtnContent = document.querySelector('.closed_btn_container');
  
  if (value === 1) {
    
    content.innerHTML = `${data.staffCornerContent}`;
    
    closedBtnContent.innerHTML = `
    
      <img src="images/staff.png" alt="staff" class="closed_btn_icon">
        <p class="closed_btn_title">Staff Corner</p>
    
    `;
    
  } else if (value === 2) {
    
    content.innerHTML = `${data.layoutContent}`;
    
    closedBtnContent.innerHTML = `
    
      <img src="images/layout.png" alt="Layout" class="closed_btn_icon">
        <p class="closed_btn_title">Layout</p>
    
    `;
    
  } else if (value === 3) {
    
    content.innerHTML = `${data.insightContent}`;
    
    closedBtnContent.innerHTML = `
    
      <img src="images/insights.png" alt="Insights" class="closed_btn_icon">
        <p class="closed_btn_title">Insights</p>
    
    `;
    
  } else if (value === 4) {
    
    content.innerHTML = `${data.usersContent}`;
    
    closedBtnContent.innerHTML = `
    
      <img src="images/users.png" alt="users" class="closed_btn_icon">
        <p class="closed_btn_title">Users</p>
    
    `;
    
  } else if (value === 5) {
    
    content.innerHTML = `${data.commandsContent}`;
    
    closedBtnContent.innerHTML = `
    
      <img src="images/command.png" alt="Commands" class="closed_btn_icon">
        <p class="closed_btn_title">Commands</p>
    
    `;
    
  } else if (value === 6) {
    
    content.innerHTML = `${data.userReportsContent}`;
    
    closedBtnContent.innerHTML = `
    
      <img src="images/reports.png" alt="Reports" class="closed_btn_icon">
        <p class="closed_btn_title">Reports</p>
    
    `;
    
  } else if (value === 7) {
    
    content.innerHTML = `${data.modContent}`;
    
    closedBtnContent.innerHTML = `
    
      <img src="images/mod.png" alt="Moderation" class="closed_btn_icon">
        <p class="closed_btn_title">Moderation</p>
    
    `;
    
  } else if (value === 8) {
    
    content.innerHTML = `${data.settingsContent}`;
    
    closedBtnContent.innerHTML = `
    
      <img src="images/setting.png" alt="Settings" class="closed_btn_icon">
        <p class="closed_btn_title">Settings</p>
    
    `;
    
  } else if (value === 9) {
    
    content.innerHTML = `${data.logInOutContent}`;
    
    closedBtnContent.innerHTML = `
    
      <img src="images/logout.png" alt="log-out" class="closed_btn_icon">
        <p class="closed_btn_title">Log Out</p>
    
    `;
    
  };
  
  hideAllBtns();
  
  const genaratedContent = document.querySelector('.content-info');
  
  function fadeEffect() {
    
    genaratedContent.style.opacity = '';
    genaratedContent.style.transition = '';
    
    genaratedContent.style.opacity = 0;
    
    setTimeout(() => {
      genaratedContent.style.transition = 'opacity 2s';
      genaratedContent.style.opacity = '1';
    });
  };
  
  fadeEffect();
};