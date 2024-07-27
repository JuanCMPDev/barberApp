import { Banner, BannerCollapseButton } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { MdPercent } from "react-icons/md";

const BannerComponent = () => {
  return (
    <Banner className="px-4 pb-4 md:px-7">
      <div className="flex w-full justify-between border-t border-[#f59e0b] bg-black p-4 rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-white">
            <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f59e0b] p-1">
              <MdPercent className="h-4 w-4 text-black" />
            </span>
            <span className="[&_p]:inline">
              Obtén 15% de descuento reservando desde nuestro sitio web&nbsp;
              <a
                href="#"
                className="ml-0 flex items-center text-sm font-medium text-[#ffcc40] hover:underline"
              >
                reserva ahora
                <HiArrowRight className="ml-2" />
              </a>
            </span>
          </p>
        </div>
      </div>
    </Banner>
  );
}

export default BannerComponent;
