import { CalendarIcon } from "@radix-ui/react-icons";

const Work = () => {
  return (
    <div id="work-experience" className="flex flex-col w-full gap-y-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-200">경력</h1>

      {/* 티맥스 클라우드 */}
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">1. 티맥스 클라우드</h2>
      <div className="w-full p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h3 className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
          <CalendarIcon className="w-6 h-6" />
          2023.12 - 재직중
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          JavaScript, React, Redux, React-Query, Axios, css, styled-components, Java, Spring, JPA, Mysql
        </p>
      </div>

      {/* 티맥스 오에스 */}
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">2. 티맥스 오에스</h2>
      <div className="w-full p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h3 className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
          <CalendarIcon className="w-6 h-6" />
          2020.08 - 2023.12
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          JavaScript, TypeScript, React, Redux, React-Query, Axios, css, styled-components, Java, Spring, JPA, Mysql, KeepAlived, InfluxDB, Telegraf
        </p>
      </div>

      {/* 티맥스 에이앤씨 */}
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">3. 티맥스 에이앤씨</h2>
      <div className="w-full p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h3 className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
          <CalendarIcon className="w-6 h-6" />
          2018.01 - 2020.08
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">C, C++, JavaScript, React, Mobx, css, styled-components, OpenGL, SKIA</p>
      </div>
    </div>
  );
};

export default Work;
