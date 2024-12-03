"use client";

import ThemeButton from "./theme-button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 80;
    const elementPosition = element?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 bg-opacity-90 backdrop-blur-lg">
      <nav className="container max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">최승연</h1>
          <p className="text-sm text-gray-500">소통하는 프론트엔드 개발자</p>
        </div>

        <div className="flex items-center gap-x-6">
          <button onClick={() => scrollToSection("introduction")} className="hover:text-blue-500 transition-colors">
            소개
          </button>
          <button onClick={() => scrollToSection("skill")} className="hover:text-blue-500 transition-colors">
            기술스택
          </button>
          <button onClick={() => scrollToSection("work-experience")} className="hover:text-blue-500 transition-colors">
            경력
          </button>
          <button onClick={() => scrollToSection("side-projects")} className="hover:text-blue-500 transition-colors">
            사이드 프로젝트
          </button>
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
