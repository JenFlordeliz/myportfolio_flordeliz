export type LabData = {
  name: string;
  description: string;
  link: string;
  images: string[];
};

export type ProjectData = {
  id: number;
  title: string;
  desc: string;
  fullDesc: string;
  icon: string;
  labs: LabData[];
};

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "FIRST GRADING",
    desc: "Project 1",
    fullDesc:
      "These are the projects I completed during my first grading period.",
    icon: "📘",
    labs: [
      {
        name: "FGLAB2",
        description: "React hooks practice.",
        link: "https://jenflordeliz.github.io/fg_lab2_flordeliz1/",
        images: ["/Images/Asset2.png"]
      },
      {
        name: "FGLAB3",
        description: "Database connection.",
        link: "https://jenflordeliz.github.io/Aptech_Flordeliz1/",
        images: ["/Images/Asset3.png"]
      }
    ]
  },
  {
    id: 2,
    title: "MIDTERM",
    desc: "Project 2",
    fullDesc: "React Router and DOM practice.",
    icon: "🔀",
    labs: [
      {
        name: "MIDTERMLAB2",
        description: "Component splitting.",
        link: "https://jenflordeliz.github.io/MG_LAB5_Flordeliz/",
        images: ["/Images/Asset4.png"]
      },
      {
        name: "MIDTERMLAB3",
        description: "CRUD operations.",
        link: "https://jenflordeliz.github.io/MG_LAB3_FLORDELIZ/",
        images: ["/Images/Asset5.png", "/Images/Asset6.png"]
      }
    ]
  },
  {
    id: 3,
    title: "FINALS",
    desc: "Project 3",
    fullDesc: "Final full-stack projects.",
    icon: "⚙️",
    labs: [
      {
        name: "FINLAB1",
        description: "API fetching.",
        link: "https://jenflordeliz.github.io/finals_lab1_flordeliz/",
        images: ["/Images/Asset7.png"]
      }
    ]
  }
];