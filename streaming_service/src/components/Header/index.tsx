import { FC } from "react";
import cn from "classnames";

import { Link } from "../UI/Link";
import { LogoSvg, RightArrowSvg } from "../../assets/svg";
import { Button } from "../UI/Button";

export const Header: FC = () => {
  return (
    <header className="flex pr-12 sm:p-4">
      <Link
        className={cn(
          "focus-visible:outline-none max-w-[289px] w-[100%] p-4 flex justify-center",
          "items-center xl:pl-11 xl:pr-11 xl:justify-start sm:p-0 sm:mr-auto"
        )}
        href="/"
        svg={<LogoSvg />}
      />
      <div
        className={cn(
          "pl-12 pt-4 pb-4 flex-1 mr-8 sm:left-0 sm:pl-0 sm:pr-0",
          "lg:absolute lg:w-[100%] lg:pl-12 lg:pr-12 lg:pt-0 lg:pb-0 lg:top-0 lg:translate-x-[-102%] lg:transition"
        )}
      >
        <input
          className={cn(
            "outline-none transition focus-visible:outline-[#e8e8e8] max-w-[1010px] border-none w-[100%]",
            'min-w-[250px] pt-4 pr-3 pb-4 pl-12 rounded-[30px] bg-[#f5f5f5] text-sm bg-[url("/images/search.svg")] bg-no-repeat bg-[left_15px_top_13px]',
            "placeholder:text-xs xl:hover:opacity-60 lg:bg-white lg:shadow-[2px_5px_35px_-18px] lg:h-14 lg:bg-[left_2%_center]"
          )}
          type="search"
          placeholder="ЧТО БУДЕМ ИСКАТЬ?"
        />
      </div>
      <Button
        className={cn(
          "outline-none transition focus-visible:outline-[#e8e8e8] rounded-[30px] overflow-hidden",
          "opacity-100 bg-[#e8e8e8]", //active &&
          "bg-[#f5f5f5] self-center p-[5px_13px] flex items-center max-w-[246px] w-[100%]",
          "xl:hover:opacity-60 lg:ml-auto sm:bg-transparent sm:text-xs sm:p-0 sm:max-w-[max-content]"
        )}
        svg={<RightArrowSvg className="sm:hidden" />}
        image={
          <img
            className="w-11 h-11 rounded-full mr-3"
            src="/images/user.jpg"
            alt="Изображение пользователя"
          />
        }
      >
        <span className="mr-auto sm:m-0">Tatiana L.</span>
      </Button>
      <button></button>
    </header>
  );
};
