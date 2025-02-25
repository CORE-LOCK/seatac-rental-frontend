import headerlogo from "../assets/SEATAC-RENTAL-LOGO.png";
import humburger from "../assets/humburgerAllThreeIcon.jpg.png";
import user from "../assets/user.png";
import menu from "./menu";

export default function header() {
  return `
    <div class="px-5 flex justify-between h-full md:px-20 lg:px-24 xl:px-36 relative">
        <div class="h-full w-1/3 max-w-40">
        <img class=" h-full w-full object-contain -translate-x-4" src="${headerlogo}"  alt="header logo" />
        </div>
        <div class="flex items-center gap-2">
        
          <div class="cursor-pointer" id="menu-trigger">
            <img src="${humburger}" alt="huburger logo">
          </div>
          <div class="hidden bg-[#6DDBBB] w-10 cursor-pointer aspect-square rounded-full md:flex justify-center items-center">
            <img src="${user}" alt="huburger logo">
          </div>
          <div class="hidden setac-primary-button md:flex">create an account for guest </button> </div>
        </div>

        <div class="absolute top-[90%] max-w-[800px] rounded-lg font-semibold bg-white" id="seatac-menu-header">
          
        </div>
    </div>
    `;
}
