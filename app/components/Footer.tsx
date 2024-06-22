import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-row py-4 justify-between items-center h-[4vh] relative mb-0 w-full bg-white text-black font-medium">
      <Link className="mx-2" href={"https://github.com/some-earth11"} target="_blank">
        <Image alt="tdl" src={'/github.svg'} width={25} height={20} />
      </Link>
      <div className="flex flex-row justify-around mx-2">
        <Image alt="ts" className="mx-1" src={'/typescript.svg'} width={20} height={20} />
        <Image alt="tailwind" className="mx-1" src={'/tailwind.svg'} width={20} height={20} />
        <Image alt="nextjs" className="mx-1" src={'/next.svg'} width={50} height={50} />
      </div>
    </footer>
  );
};

export default Footer;
