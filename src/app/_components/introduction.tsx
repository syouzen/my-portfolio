import Image from "next/image";

import profile from "../_assets/profile.png";

const Introduction = () => {
  return (
    <div id="introduction" className="flex flex-col w-full items-center gap-y-6">
      <div className="flex w-full justify-between items-center gap-x-6">
        <Image src={profile} alt="profile" width={256} height={256} className="mx-auto border-2 border-gray-200 p-4 rounded-full" />

        <div className="flex flex-col gap-y-2 p-4 mx-auto text-sm text-gray-300">
          <p>Name. 최승연</p>
          <p>Email. seungyeon.choi1026@gmail.com</p>
          <p>Phone. 010-9058-9205</p>
          <p>Address. 서울시 송파구</p>
          <p>github. https://github.com/syouzen</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-y-4 text-sm font-light text-gray-300">
        <p>안녕하세요! 소통하는 개발자 ‘최승연’입니다.</p>
        <p>
          저는 시스템 개발부터 프론트 엔드까지 폭넓게 일해 왔습니다. 때로는 사이드 프로젝트에 참여하며 다양한 경험을 쌓았습니다. 그렇기에 어디에서 무엇을 하던
          새로움에 대한 두려움이 없습니다.
        </p>
        <p>
          새로운 환경을 두려워하지 않습니다. 새로운 기술을 두려워하지 않습니다. 모르는 걸 두려워하지 않습니다. 저는 앞으로 어떤 일을 마주치더라도 성공적으로
          수행할 자신감이 있습니다.
        </p>
        <p>
          또한 저는 업무에서 가장 중요한 요소로 소통과 협력을 꼽습니다. 기술적 역량이 뛰어난 것도 중요하지만 팀원들과의 원활한 소통과 협력을 통해 더 나은 성과를
          이루어내는 것이 진정한 개발자의 자세라고 생각합니다.
        </p>
        <p>
          모든 프로젝트 과정에서 저는 적극적으로 의견을 주고 받고 팀원들이 제안하는 다양한 관점과 아이디어를 경청합니다. 이를 통해 문제를 다각도로 분석하고
          해결책을 생각하며 프로젝트의 성공을 이루어낸 경험이 많습니다.
        </p>
        <p>
          소통은 곧 신뢰를 의미합니다. 앞으로 새로운 조직에서도 활발한 소통을 통해 팀의 성과를 높이고 함께 성장할 수 있는 기회를 만들어가고 싶습니다.
          감사합니다!
        </p>
      </div>
    </div>
  );
};

export default Introduction;
