import Image from "next/image";

interface HeaderProps {
  resetTodos: () => void;
}

const Header: React.FC<HeaderProps> = ({ resetTodos }) => {
  return (
    <header className="flex flex-row justify-between my-5 w-full text-3xl font-bold">
      <div className="flex flex-col">
        <div>TO</div>
        <div>DO</div>
      </div>
      <Image onClick={resetTodos} className="cursor-pointer mr-16" alt="reset" src={'/reset.svg'} width={35} height={35} />
    </header>
  );
};

export default Header;
