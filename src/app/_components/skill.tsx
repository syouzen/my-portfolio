import Image from "next/image";
import cpp from "../_assets/c++.png";
import react from "../_assets/react.png";
import next from "../_assets/nextjs.webp";
import ts from "../_assets/ts.webp";
import js from "../_assets/js.webp";
import zustand from "../_assets/zustand.webp";
import reactquery from "../_assets/react-query.webp";
import redux from "../_assets/redux.webp";
import mobx from "../_assets/mobx.webp";
import axios from "../_assets/axios.webp";
import styled from "../_assets/styled-components.webp";
import tailwind from "../_assets/tailwind.png";
import spring from "../_assets/spring.webp";
import jpa from "../_assets/jpa.webp";
import mysql from "../_assets/mysql.png";

const Skill = () => {
  const skills = [
    { name: "C++", image: cpp },
    { name: "React", image: react },
    { name: "Next.js", image: next },
    { name: "Typescript", image: ts },
    { name: "Javascript", image: js },
    { name: "Zustand", image: zustand },
    { name: "React-Query", image: reactquery },
    { name: "Redux", image: redux },
    { name: "MobX", image: mobx },
    { name: "Axios", image: axios },
    { name: "Styled-Components", image: styled },
    { name: "Tailwind", image: tailwind },
    { name: "Spring", image: spring },
    { name: "JPA", image: jpa },
    { name: "MySQL", image: mysql },
  ];

  return (
    <div id="skill" className="flex flex-col w-full gap-y-6">
      <h1 className="text-2xl font-bold mb-4 text-black dark:text-gray-200">기술스택</h1>

      <div className="grid grid-cols-4 gap-4 gap-y-8">
        {skills.map((skill, index) => (
          <div key={`skill-${index}`} className="flex flex-col items-center gap-y-2 text-sm font-bold">
            <Image
              src={skill.image}
              alt={skill.name}
              width={128}
              height={128}
              className="w-[128px] h-[128px] bg-white border-2 border-gray-200 dark:border-white dark:bg-white rounded-3xl object-contain"
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
