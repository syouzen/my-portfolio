import ThemeButton from "./theme-button";

const Header = () => {
  return (
    <header className="sticky top-0 bg-opacity-90 backdrop-blur-lg">
      <nav className="container max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">최승연</h1>
          <p className="text-sm text-gray-500">프론트엔드 개발자</p>
        </div>

        <div className="flex items-center gap-x-6">
          <a href="#introduction" className="hover:text-blue-500 transition-colors">
            소개
          </a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">
            스킬
          </a>
          <a href="#work-experience" className="hover:text-blue-500 transition-colors">
            경력
          </a>
          <a href="#side-projects" className="hover:text-blue-500 transition-colors">
            사이드 프로젝트
          </a>
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
