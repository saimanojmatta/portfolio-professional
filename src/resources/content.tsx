import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sai Manoj",
  lastName: "Matta",
  name: `Sai Manoj Matta`,
  role: "Frontend Software Engineer",
  avatar: "/images/avatar-manoj.png",
  email: "saimanoj14433@gmail.com",
  location: "Asia/Kolkata", // Kakinada, Andhra Pradesh, India
  languages: [], // TODO: add languages if you'd like them displayed
  locale: "en",
};

const newsletter: Newsletter = {
  display: false, // no newsletter provider connected yet
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional notes on frontend engineering and shipping products</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/saimanojmatta",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sai-manoj-07114b238/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: `/api/og/generate?title=${encodeURIComponent(person.name)}`,
  label: "Home",
  title: `${person.name} – Portfolio`,
  description: `Portfolio of ${person.name}, a ${person.role} building enterprise web and mobile products`,
  headline: <>Turning complex problems into fast, reliable interfaces</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">LexNETRA</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/lexnetra-litigation-platform",
  },
  subline: (
    <>
      I'm Manoj, a {person.role.toLowerCase()} with 2 years of
      experience building enterprise web and hybrid mobile apps with{" "}
      <Text as="span" size="xl" weight="strong">
        React, TypeScript &amp; React Native
      </Text>
      . <br /> I ship microfrontends, cloud deployments, and products from dev to production.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Kakinada, Andhra Pradesh`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // TODO: turn on once a real booking link is set up
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Manoj is a Kakinada, India-based frontend software engineer with 2 years of experience
        building enterprise web and hybrid mobile applications using React, TypeScript, and React
        Native. He's worked across microfrontend architecture, cloud deployments, and delivering
        scalable products from development to production.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "DevDolphins",
        timeframe: "08/2024 – Present",
        role: "Software Engineer",
        achievements: [
          <>
            Led frontend development of LexNETRA, an enterprise tax litigation platform for
            Maruti Suzuki, architecting 8 independently deployable microfrontends with React 19,
            TypeScript, Vite, Redux Toolkit, and Module Federation.
          </>,
          <>
            Designed a secure deployment strategy on Google Cloud using private GCS buckets, Cloud
            CDN, an internal load balancer, and Cloud Armor, enabling independent releases and
            corporate-only access.
          </>,
          <>
            Implemented SSO-based RBAC across 8 user roles and built an interactive case tree to
            simplify navigation through the litigation lifecycle, plus an AI-assisted document
            intake workflow.
          </>,
          <>
            Owned the Marketing PRO hybrid app for Vidyasys (React Native + Expo + WebView),
            integrating GPS tracking, biometrics, camera access, and offline functionality on top
            of a shared web codebase.
          </>,
          <>
            Built the Marketing Suite, a unified React admin portal consolidating fee management,
            contact management, PRO registrations, settlements, and analytics with shared
            real-time data.
          </>,
          <>
            Built an end-to-end Instamojo payment workflow for GetEntrepcare, securing webhooks
            with HMAC signature verification and protecting APIs with Auth0 + JWT-based
            authorization.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Pragati Engineering College, Surampalem",
        description: (
          <>
            Bachelor of Technology in Electronics and Communication Engineering, 8 CGPA (09/2019 –
            06/2023)
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>Building responsive, accessible interfaces with React and modern UI libraries.</>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Redux Toolkit", icon: "redux" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Mobile",
        description: <>Shipping hybrid mobile apps with native device capabilities.</>,
        tags: [{ name: "React Native (Expo)", icon: "react" }],
        images: [],
      },
      {
        title: "Backend",
        description: <>Building REST APIs and services to support frontend applications.</>,
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Tools & Cloud",
        description: <>Day-to-day tooling for shipping and deploying products.</>,
        tags: [
          { name: "Git", icon: "git" },
          { name: "Google Cloud", icon: "googlecloud" },
          { name: "Figma", icon: "figma" },
          { name: "Postman", icon: "postman" },
          { name: "Jira", icon: "jira" },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
};

export { person, social, newsletter, home, about, work };
