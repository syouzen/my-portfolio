import { CalendarIcon, CheckIcon, GlobeIcon } from '@radix-ui/react-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../_ui/accordion';

const Side = () => {
  return (
    <div id="side-projects" className="flex flex-col w-full gap-y-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-200">
        사이드 프로젝트
      </h1>

      {/* 렛디(LETDY) */}
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">
        렛디(LETDY)
      </h2>

      <div className="w-full p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h3 className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
          <CalendarIcon className="w-6 h-6" />
          2022.08 - 2024.08
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          JavaScript, React, React-Native, Redux, React-Query, Axios, Next.js,
          Zustand
        </p>
      </div>

      <div className="flex flex-col gap-y-2">
        <a
          href="https://www.letdy.co.kr/"
          target="_blank"
          className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300 hover:opacity-80 underline"
        >
          <GlobeIcon />
          Web Page
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.nonoon.aloha&pli=1"
          target="_blank"
          className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300 hover:opacity-80 underline"
        >
          <GlobeIcon />
          Google Play Store
        </a>
        <a
          href="https://apps.apple.com/kr/app/%EB%A0%9B%EB%94%94-%EB%A0%88%EC%A0%80%EC%B9%9C%EA%B5%AC%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%A0-%EB%95%8C/id1586183408"
          target="_blank"
          className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300 hover:opacity-80 underline"
        >
          <GlobeIcon />
          Apple App Store
        </a>
      </div>

      <div className="flex flex-col gap-y-4 w-full">
        <Accordion type="multiple">
          <AccordionItem value="letdy">
            <AccordionTrigger>
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                요약
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-y-2 mb-6">
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  React-Native를 통해 앱 프론트엔드의 설계와 구현을 리드
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  일정, 리뷰, 매칭, 커뮤니티, 채팅, 프로필, 알림 등 스크린 기능
                  구현
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  소셜 로그인, 결제, 쪽지, 실시간 채팅(사진, 녹음, 카메라 등) 및
                  알림 기능 구현
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  BLE 기능을 이용한 주변 앱 사용자 찾기 기능 구현
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  QR 코드를 통한 사용자 프로필 공유 기능
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Analytics 분석을 통해 사용자 경험 개선
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  프로파일링을 통한 성능 개선 (이전 대비 약 60% 이상 성능 향상)
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />앱 빌드, 배포 및 출시 자동화 작업 수행 (Fastlane,
                  Google Play Store, Apple AppStore)
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Next.js를 이용한 웹페이지 구현
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Side;
