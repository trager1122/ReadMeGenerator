// function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge;
  var badgeAlt;
  if (data.license === 'MIT'){
    licenseBadge="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7195e121-eded-45cf-9aab-909deebd81b2/d9ur2lg-28410b47-58fd-4a48-9b67-49c0f56c68ce.png/v1/fill/w_1035,h_772,q_70,strp/mit_license_logo_by_excaliburzero_d9ur2lg-pre.jpg";
    badgeAlt="MIT License Logo";
  } else if(data.license==='GPL'){
    licenseBadge="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/GPLv3_Logo.svg/330px-GPLv3_Logo.svg.png";
    badgeAlt="GPL License Logo";
  } else if (data.license==='Apache'){
    licenseBadge="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Apache_Software_Foundation_Logo_%282016%29.svg/330px-Apache_Software_Foundation_Logo_%282016%29.svg.png";
    badgeAlt="Apache License Logo";
  } else if (data.license==='BSD'){
    licenseBadge="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/License_icon-bsd.svg/384px-License_icon-bsd.svg.png";
    badgeAlt="BSD License Logo";
  }

  return `
  # ${data.title}  
          ## Table of Contents  
            1.[Description](#desc)  
            2.[Installation](#installation)  
            3.[Usage](#usage)  
            4.[Contribution](#contribution)  
            5.[License](#license)  
            6.[Repository](#repo)  
            7.[Contact](#contact)          
  
  <a name='desc'></a>                                               ![${badgeAlt}](${licenseBadge} =50x50)     
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
