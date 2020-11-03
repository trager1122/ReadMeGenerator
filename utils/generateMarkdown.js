// function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge=data.license;
  var badgeAlt = `${data.license} License Logo`

  return `
  # ${data.title} ![${badgeAlt}](https://img.shields.io/static/v1?label=License&message=${licenseBadge}>&color=blue)  
  ## Table of Contents  
  1. [Description](#desc)  
  2. [Installation](#installation)  
  3. [Usage](#usage)  
  4. [Contribution](#contribution)  
  5. [License](#license)
  6. [Repository](#repo)  
  7. [Contact](#contact)   
  
  <a name='desc'></a>                                                    
  ### Description
  >${data.description}
  
  <a name='installation'></a>
  ### Installation
  >${data.installation}
  
  <a name='usage'></a>
  ### Usage
  >${data.usage}
  
  <a name='contribution'></a>
  ### Contribution
  >${data.contribution}
  
  <a name='license'></a>
  ### License
  >${data.license} 
  
  <a name='repo'></a>
  ### Repository
  >www.github.com/${data.username}/${data.title}
  
  <a name='contact'></a>
  ### Contact
  ><${data.email}>
`;
}

module.exports = generateMarkdown;
