import {
  CalendarIcon,
  CheckIcon,
  GlobeIcon,
  TableIcon,
} from '@radix-ui/react-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../_ui/accordion';

const Work = () => {
  return (
    <div id="work-experience" className="flex flex-col w-full gap-y-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-200">
        경력
      </h1>

      {/* 티맥스 클라우드 */}
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">
        1. 티맥스 클라우드
      </h2>

      <div className="w-full p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h3 className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
          <CalendarIcon className="w-6 h-6" />
          2023.12 - 재직중
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          JavaScript, React, Redux, React-Query, Axios, css, styled-components,
          Java, Spring, JPA, Mysql
        </p>
      </div>

      <div className="flex flex-col gap-y-4 w-full">
        <Accordion type="multiple">
          <AccordionItem value="superpcmaster">
            <AccordionTrigger>
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                SuperPCMaster
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-y-2 mb-6">
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  SuperPCMaster의 관리자 페이지 프론트엔드 설계 및 구현 (React,
                  styled-components)
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple">
          <AccordionItem value="tinuxvm">
            <AccordionTrigger>
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                TinuxVM
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-y-2 mb-6">
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  TinuxVM 관리자 페이지 프론트엔드, 벡엔드 구조 설계 및 구현
                  리드 (React, Spring Boot)
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Web-Service 통신에 RESTful API 적용
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  사용자 관리, 관리자 관리, 감사기록 관리, 정책 관리 및 배포,
                  알림 기능 구현
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  SSE(Server-Sent-Events)를 통한 실시간 알림 기능 적용
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Websocket을 통한 실시간 정책 배포 기능 구현
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  클라이언트(VM) 로그인 시 사용하는 VPN 서버 구조 설계
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  TinuxVM 보안기능 구현명세서 작성 및 한국아이티평가원(KSEL)의
                  보안 인증서 발급
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* 티맥스 오에스 */}
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">
        2. 티맥스 오에스
      </h2>

      <div className="w-full p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h3 className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
          <CalendarIcon className="w-6 h-6" />
          2020.08 - 2023.12
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          JavaScript, TypeScript, React, Redux, React-Query, Axios, css,
          styled-components, Java, Spring, JPA, Mysql, KeepAlived, InfluxDB,
          Telegraf
        </p>
      </div>

      <div className="flex flex-col gap-y-4 w-full">
        <Accordion type="multiple">
          <AccordionItem value="drm">
            <AccordionTrigger>
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                DRM(Direct Rendering Manager) Kernel 분석
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <a
                href="https://docs.google.com/presentation/d/1sHR4AMR6BVh26M7mhHQ3pA6Z_1Lr2CUUhNXzE3mdYag/edit?usp=sharing"
                target="_blank"
                className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300 hover:opacity-80 underline my-4"
              >
                <TableIcon />
                DRM 분석 발표 자료
              </a>

              <div className="flex flex-col gap-y-2 my-6">
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  TmaxOS의 렌더링 성능을 개선하기 위한 연구
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Linux의 렌더링 과정 분석
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Mesa3D 드라이버 내 하드웨어 가속 로직 분석
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Kernel 내 DRM 모듈 로직 분석 (VRAM 관리, Command 스케쥴링 등)
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple">
          <AccordionItem value="supervds">
            <AccordionTrigger>
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                SuperVDS(Virtual Desktop Service)
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-y-2 mb-6">
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  프론트엔드, 백엔드 구조 설계 및 구현
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Web-Service 통신에 RESTful API 적용
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  oVirt Server의 VM 할당 연동 기능 구현
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Spring AOP를 통한 효율적인 Logging System 적용
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple">
          <AccordionItem value="gpms">
            <AccordionTrigger>
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                TmaxGPMS(Gooroom Platform Management Service)
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <a
                href="https://www.tmaxcloud.com/tmaxgr"
                target="_blank"
                className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300 hover:opacity-80 underline my-4"
              >
                <GlobeIcon />
                Web Page
              </a>

              <div className="flex flex-col gap-y-2 my-6">
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  프론트엔드, 백엔드를 중점으로 맡아 기존 구름GPMS를 넘어선
                  새로운 TmaxGPMS 설계 및 구현
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  대시보드 기능 개발 (React, Spring Boot)
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  업무망와 인터넷망 분리 로직 구성 및 적용(Master-Slave)
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  고가용성 및 안정화를 위한 이중화 로직 구성 및 적용
                  (Keepalived, Mysql Replication)
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  자동 로그아웃 설정, 로그인 시도 횟수, 잠금 기능 설계 및 구현
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  성능을 위한 코드 스플리팅 작업 및 렌더링 최적화 (약 3배 정도의
                  성능 개선)
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  온북 인증을 위한 pam 모듈 관리 (Agent 및 인증)
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  대구시교육청, 기획재정부, 교육부 등 많은 고객사의 인사 DB 연동
                  및 이슈 대응
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  국가보안기술연구소의 새로운 구름GPMS 4.0 기능 개발 (OTP 보안,
                  모듈 실시간 관리 등)
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* 티맥스 에이앤씨 */}
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">
        3. 티맥스 에이앤씨
      </h2>

      <div className="w-full p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h3 className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-200 flex items-center gap-2">
          <CalendarIcon className="w-6 h-6" />
          2018.01 - 2020.08
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          C, C++, JavaScript, React, Mobx, css, styled-components, OpenGL, SKIA
        </p>
      </div>

      <div className="flex flex-col gap-y-4 w-full">
        <Accordion type="multiple">
          <AccordionItem value="cwm">
            <AccordionTrigger>
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                윈도우 매니저 (CWM)
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-y-2 mb-2">
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  TmaxOS의 Display Manager인 CWM의 구조 설계 및 구현
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  효율적인 컴포지팅 로직 구현 (기존 대비 2배 성능 개선)
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  리다이렉트 컴포지팅, 스태킹, Shader 사용
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple">
          <AccordionItem value="graphics-infra">
            <AccordionTrigger>
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                그래픽 인프라 (EGL, WSI)
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <a
                href="https://docs.google.com/presentation/d/1u4rXfB_A19Z92Ksa8Gis3m9jzU-iebYAEBZY990pgWg/edit?usp=sharing"
                target="_blank"
                className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300 hover:opacity-80 underline mt-4 mb-2"
              >
                <TableIcon />
                TOS-EGL PPT
              </a>
              <a
                href="https://docs.google.com/presentation/d/1mocjIXuiUwJn9s1XVcjntTKgHI1Piemo1IlLEKKx8lI/edit?usp=sharing"
                target="_blank"
                className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300 hover:opacity-80 underline mt-2 mb-4"
              >
                <TableIcon />
                TOS-WSI PPT
              </a>

              <div className="flex flex-col gap-y-2 my-6">
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  렌더링 API와 Window Manager(CWM) 간 인터페이스 역할을 하는 EGL
                  및 WSI의 Wrapper 개발
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  다양한 디자인 패턴을 적용해 효율적인 인터페이스 구축
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple">
          <AccordionItem value="windows-api">
            <AccordionTrigger>
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                Windows Graphics API 호환
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-y-2 mb-2">
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  OpenGL을 이용한 Direct3D 호환
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Direct3D 오픈소스 dxvk 라이브러리의 TmaxOS 포팅
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  SKIA를 이용한 GDI 호환
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple">
          <AccordionItem value="wapl-meeting">
            <AccordionTrigger>
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                Wapl Meeting
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <a
                href="https://beta.waplmeeting.com/service/"
                target="_blank"
                className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300 hover:opacity-80 underline mt-4 mb-2"
              >
                <GlobeIcon />
                Web Page
              </a>
              <a
                href="https://docs.google.com/presentation/d/1sXQHNKfjwQ9RUNPUF0vBJxf8r83YzoDZS5IpPJB-Ufo/edit?usp=sharing"
                target="_blank"
                className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300 hover:opacity-80 underline mt-2 mb-2"
              >
                <TableIcon />
                OWT-SERVER 분석 PPT
              </a>
              <a
                href="https://docs.google.com/presentation/d/1r1hURruvG5YrLXyDZo3sQi6HIz5pLu1Nr5tMEgvRjjE/edit?usp=sharing"
                target="_blank"
                className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300 hover:opacity-80 underline mt-2 mb-4"
              >
                <TableIcon />
                NVIDIA 하드웨어 가속지원 PPT
              </a>

              <div className="flex flex-col gap-y-2 my-6">
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  WAPL Meeting 서비스 프론트엔드 설계 및 구현 (React)
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Meeting의 그리드 레이아웃, 화면 캡쳐 및 녹화, 화면 공유 기능
                  구현
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Wapl Meeting 내 NVIDIA 하드웨어 가속 기능 지원
                </p>
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  Video Worker에서 사용하는 NVDEC, NVENC 로직 구현
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Work;
