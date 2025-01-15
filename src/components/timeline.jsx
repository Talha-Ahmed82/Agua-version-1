import React from 'react';
// import htmlimg from './path-to-your-image/html.png';
// import javascriptimg from './path-to-your-image/javascript.png';
// import reactjsimg from './path-to-your-image/react.png';
// import nodejsimg from './path-to-your-image/node.png';
// import expressjsimg from './path-to-your-image/express.png';
// import mongodbimg from './path-to-your-image/mongodb.png';
// import phpimg from './path-to-your-image/php.png';

const skillsData = [
  {
    name: "Phase 1: Foundation and Whitepaper Finalization (Q3 2024)",
    color: "#f06529",
    checkbox : `<input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
  /> `,
    // img: htmlimg,
    description: "Whitepaper Completion",
    descrip: "Legal and Regulatory",
    des: "Initial Community Building",
    last:"",
    delay: "0",
  },
  {
    name: " Phase 2: Token Launch and Initial Platform Development (Q4 2024)",
    // // img: javascriptimg,
    description: "Token launch",
    descrip: "Smart Contract Deployment",
    des: "Initial Exchange Listings",
    last:"Staking Platform Launch",
    delay: "1",
  },
  {
    name: "Phase 3: Mining Integration and Reserve Management (Q1-Q2 2025)",

    // // img: reactjsimg,
    description: "Mining Partnerships",
    descrip: "Reserve Establishment",
    des: "Smart Contract Enhancements",
    last:"Revenue Sharing Implementation",
    delay: "2",
  },
  {
    name: "Phase 4: Platform Expansion and DeFi Integration (Q3-Q4 2025)",

    // // img: nodejsimg,
    description: "DeFi Platform Integration",
    descrip: "Governance Launch",
    des: "Advanced Analytics and Reporting",
    last:"Community Incentive Programs",
    delay: "3",
  },
  {
    name: "Phase 5: Global Expansion and Regulatory Alignment (2026)",

    // // img: expressjsimg,
    description: "Regulatory Expansion",
    descrip: "Cross-Chain Integration",
    des: "Institutional Partnerships",
    last:"Global Marketing Campaign",
    delay: "4",
  },
  {
    name: "Phase 6: Continuous Improvement and Ecosystem Growth (2027 and Beyond)",
    
    // // img: mongodbimg,
    description: "Platform Upgrades",
    descrip: "Ecosystem Expansion",
    des: "Sustainability Initiatives",
    last:"Global Adoption Initiatives",
    delay: "5",
  },
];

const SkillsTimeline = () => {
  return (
    <div className="font-poppins min-h-screen">
      {/* Heading */}
      <div className="text-center py-10">
        <h1 className="text-white text-5xl font-bold mb-4">
           <span className="text-[#C19210]">Roadmap</span>
        </h1>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto py-10">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#C19210]  h-full"></div>

        {/* Skill Cards */}
        {skillsData.map((skill, index) => (
          <div
            key={skill.name}
            className={`relative w-1/2 px-8 py-6 ${
              index % 2 === 0 ? "left-0" : "left-2/3"
            } ${
              index % 2 === 0 ? "-translate-x-0" : "-translate-x-1/3"
            }`}
            style={{ animationDelay: `${skill.delay}s` }}
          >
            {/* Skill Icon */}
            {/* <img
              src={skill.img}
              alt={skill.name}
              className={`absolute w-12 h-12 rounded-full top-8 z-10 ${
                index % 2 === 0 ? "right-[-20px]" : "left-[-20px]"
              }`}
            /> */}
            {/* Text Box */}
            <div
              className="bg-white rounded-lg shadow-lg p-6 relative border-l-4"
              
            >
              <h2
                className="text-2xl font-bold mb-2"
            
              >
                {skill.name}
              </h2>
              {/* <small className="text-sm text-[#00abf0] font-semibold tracking-wide mb-4 block">
                [Company Name] 2023 - 2024
              </small> */}
              <p className="text-gray-700 text-sm leading-relaxed">
              <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
        /> {skill.description}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
              <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
        /> {skill.descrip}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
              <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
        /> {skill.des}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
              <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
        /> {skill.last}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTimeline;
