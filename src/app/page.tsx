import Introduction from './_components/introduction';
import Side from './_components/side';
import Skill from './_components/skill';
import Work from './_components/work';

export default function Home() {
  return (
    <div className="flex flex-col gap-y-24 items-center">
      <Introduction />
      <Skill />
      <Work />
      <Side />
    </div>
  );
}
