import {
  CalendarIcon,
  CheckIcon,
  DotFilledIcon,
  RocketIcon,
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
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200 my-2">
                Summary
              </h3>
              <div className="flex flex-col gap-y-2 mb-6">
                <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckIcon />
                  SuperPCMaster의 관리자 페이지 프론트엔드 설계 및 구현 (React,
                  styled-components)
                </p>
              </div>
              <Accordion type="multiple">
                <AccordionItem value="superpcmaster">
                  <AccordionTrigger>
                    <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                      Details
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-y-2">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      SuperPCMaster는 중앙에서 사용자 PC의 자원과 권한을 제어할
                      수 있는 기능을 제공하는 프로젝트입니다. SuperVDS가
                      VM이었다면 SuperPCMaster는 실제 PC를 제어합니다.
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      저는 SuperPCMaster의 관리자 페이지 프론트엔드 리드를
                      맡았습니다. 모든 구현은 React + styled-components +
                      Javascript로 이루어졌습니다.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                SuperPCMaster는 아직 출시하지 않은 프로젝트입니다. 이번
                프로젝트는 혼자 진행한 프로젝트입니다. 혼자 진행할 때 완성도
                있는 결과물을 내기 위해 얼마나 많은 고민을 하고 노력해야 하는지
                깊게 느끼고 배울 수 있었습니다.
              </p>
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
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200 my-2">
                Summary
              </h3>
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
              <Accordion type="multiple">
                <AccordionItem value="superpcmaster">
                  <AccordionTrigger>
                    <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                      Details
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-y-2">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      TinuxVM은 사용자 별 VM의 스펙을 결정하고 할당하는 등
                      중앙에서 관리하고 제어할 수 있는 기능을 제공하는
                      솔루션입니다. 저는 프로젝트의 리드 개발자를 맡아
                      프론트엔드, 백엔드, VPM 서버 구조 설계와 구현을 전부
                      이끌었습니다.
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      프론트엔드에서 대부분의 스크린과 기능을 직접 구현했습니다.
                      구현한 기능에는 사용자 관리, 관리자 관리, 감사기록 관리,
                      VM 관리, 정책 관리 및 배포, 알림 스크린 등이 있습니다.
                      알림의 경우 SSE를 통한 실시간 알림 기능을 적용했습니다.
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      백엔드에서는 대부분의 컨트롤러, 서비스, 엔티티의 설계 및
                      구현을 담당했습니다. 구현한 기능에는 로그인 세션 관리,
                      사용자, 관리자, 감사기록, VM 관리, 정책 관리 및 배포, 알림
                      기능이 있습니다. 정책 배포의 경우 클라이언트(VM)가
                      Websocket으로 연결하여 실시간으로 정책을 배포하는
                      기능입니다.
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      또한 VPN 서버 구조를 설계했습니다. TinuxVM의 VPN 서버는
                      OpenVPN을 사용해 굉장한 보안성을 가집니다. 모든
                      클라이언트(VM)는 로그인 시 해당 서버를 이용합니다. 해당
                      VPN 서버의 실제 개발에는 참여하지 않았으나 모든 설계에
                      참여했고 코드 리뷰를 진행했습니다.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="multiple">
                <AccordionItem value="superpcmaster">
                  <AccordionTrigger>
                    <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200">
                      Challenges
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-y-2">
                    <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                      <RocketIcon />
                      인증/인가
                    </p>
                    <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300 pl-6">
                      <DotFilledIcon />
                      인증/인가는 Spring Security를 통해 구현했습니다. 인가,
                      인증 로직을 구분했으며 Role에 따른 접근 가능한 API를
                      선별했습니다.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300">
                TinuxVM은 아직 출시하지 않은 제품입니다. 하지만 최근에
                한국아이티평가원(KSEL)의 인증을 받았기에 곧 출시될 것으로
                예상됩니다. TinuxVM은 제가 회사를 다니며 총괄 리드 개발자로
                참여한 첫 프로젝트입니다. 그렇기에 관리자의 부담을 많이 느꼈고
                무게를 배웠습니다. 앞으로 어떤 프로젝트에 참여하거나 리드할 때
                자신감 있게 참여할 수 있는 귀중한 경험이 되었습니다.
              </p>
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
    </div>
  );
};

export default Work;
