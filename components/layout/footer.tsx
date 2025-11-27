import Link from "next/link";
import footerLogo from "@/assets/footer-logo1.svg";
import download from "@/assets/download.svg";
import Image from "next/image";
import type { ReactNode } from "react";
type FooterLinkItem = {
  title: ReactNode;
  href?: string;
  mailto?: string;
  icon?: string;
};

type FooterLinkGroup = {
  group: string;
  items: FooterLinkItem[];
};

const links: FooterLinkGroup[] = [
  {
    group: "Quick Links",
    items: [
      {
        title: "Home",
        href: "#",
      },
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Services",
        href: "#",
      },
      {
        title: "Benefits",
        href: "#",
      },
      {
        title: "Testimonials",
        href: "#",
      },
      {
        title: "Awards",
        href: "#",
      },
    ],
  },
  {
    group: "Useful Links",
    items: [
      {
        title: "Partner with Us",
        href: "#",
      },
      {
        title: "Join as an Agent",
        href: "#",
      },
      {
        title: "Privacy and Policy",
        href: "#",
      },
      {
        title: "Contact Us",
        href: "#",
      },
    ],
  },
  {
    group: "Connect Info",
    items: [
      {
        icon: "phone",
        title: "(252) 555-0126",
      },
      {
        icon: "email",
        title: "info@exampleemail.com",
        mailto: "mailto:info@exampleemail.com",
      },
      {
        icon: "location",
        title: (
          <>
            2715 Ash Dr. San Jose,
            <br />
            South Dakota 83475
          </>
        ),
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="pt-20 bg-[#161518]">
      <div className="mx-auto max-w-7xl">
        <div className="w-full flex justify-between gap-12">
          <div className="w-1/3">
            <div className="flex flex-col gap-7">
              <Link href="/" aria-label="go home" className="block size-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="124"
                  height="32"
                  viewBox="0 0 124 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2239_2537)">
                    <path
                      d="M8.24636 10.1757V30.3152C8.24636 30.8699 7.79169 31.3218 7.23369 31.3218H3.76169C3.20369 31.3218 2.74902 30.8699 2.74902 30.3152V10.1688C2.74902 9.6073 3.20369 9.15534 3.76858 9.16219H7.23369C7.79169 9.16903 8.24636 9.62099 8.24636 10.1757Z"
                      fill="white"
                    />
                    <path
                      d="M35.0713 21.5361V30.3219C35.0713 30.8766 34.6236 31.3286 34.0587 31.3286H30.5867C30.0287 31.3286 29.574 30.8766 29.574 30.3219V27.6033L35.0782 21.543L35.0713 21.5361Z"
                      fill="white"
                    />
                    <path
                      d="M83.5419 9.23074H80.1112C79.5532 9.23074 79.0986 9.68269 79.0986 10.2374V10.7715C79.0986 11.2166 78.5406 11.4563 78.2306 11.1344C76.7701 9.60737 74.4417 8.6966 72.0168 8.6966C65.5206 8.65552 60.4297 12.641 60.4297 20.2626C60.4297 27.8843 65.3001 32.0478 71.879 32.0067C73.9112 31.9656 76.6186 31.1096 78.2237 29.3703C78.5268 29.0347 79.0917 29.2675 79.0917 29.7195V30.329C79.0917 30.8836 79.5464 31.3356 80.1044 31.3356H83.535C84.093 31.3356 84.5477 30.8836 84.5477 30.329V10.2374C84.5477 9.68269 84.093 9.23074 83.535 9.23074H83.5419ZM73.1879 26.953C69.2268 27.2748 65.9339 24.7206 65.9339 20.2626C65.9339 15.8047 69.2199 13.2984 73.1741 13.6065C81.1721 14.2434 81.1859 26.2956 73.1879 26.953Z"
                      fill="white"
                    />
                    <path
                      d="M114.576 8.91618C111.917 8.91618 109.533 9.67629 107.618 12.2442C107.398 12.5387 106.943 12.5045 106.764 12.1758C105.4 9.71738 102.975 8.82031 100.55 8.82031C98.8556 8.82031 96.8784 9.3339 95.5489 10.6898C95.2389 11.0116 94.6878 10.7788 94.6878 10.3337V10.1899C94.6878 9.63521 94.2331 9.18325 93.6751 9.18325H90.1962C89.6382 9.18325 89.1836 9.63521 89.1836 10.1899V30.3157C89.1836 30.8704 89.6382 31.3223 90.1962 31.3223H93.6682C94.2262 31.3223 94.6809 30.8704 94.6809 30.3157V19.4893C94.6809 16.5789 96.4376 13.9357 99.4136 13.9357C102.39 13.9357 103.967 16.5789 103.967 19.4893V30.3157C103.967 30.8704 104.422 31.3223 104.98 31.3223H108.452C109.01 31.3223 109.464 30.8704 109.464 30.3157V19.4893C109.464 16.5789 111.311 14.0247 114.287 14.0247C117.263 14.0247 118.482 16.4899 118.482 19.4002V30.3157C118.482 30.8704 118.937 31.3223 119.495 31.3223H122.967C123.525 31.3223 123.979 30.8704 123.979 30.3157V19.4002C123.979 12.7647 120.866 8.91618 114.555 8.91618H114.576Z"
                      fill="white"
                    />
                    <path
                      d="M9.96802 0H1.01246C0.137572 0 -0.323984 1.03403 0.261572 1.68457L4.73935 6.62187C5.13891 7.06698 5.84157 7.06698 6.24113 6.62187L10.7189 1.68457C11.3114 1.03403 10.8429 0 9.96802 0Z"
                      fill="#FF8800"
                    />
                    <path
                      d="M35.0713 19.722V21.5435L29.5671 27.6039V19.7631C29.5671 16.4693 27.7898 13.9424 24.4004 13.8534C21.142 13.7644 18.5173 16.5172 18.5173 19.7562V30.3225C18.5173 30.8771 18.0696 31.3291 17.5047 31.3291H14.0809C13.516 31.3291 13.0682 30.8771 13.0682 30.3225V10.1966C13.0682 9.63511 13.516 9.19 14.0809 9.19H17.5116C18.0764 9.19 18.5242 9.63511 18.5242 10.1966V10.9088C18.5242 11.3402 19.0409 11.5662 19.3647 11.2786C21.2453 9.66935 23.2156 8.875 25.6473 8.875C30.876 8.875 35.0644 12.7714 35.0644 19.722H35.0713Z"
                      fill="white"
                    />
                    <path
                      d="M59.7267 30.0616L50.4749 19.9611C50.3096 19.7693 50.2958 19.4817 50.4749 19.29L58.3833 10.4836C58.8173 10.0043 58.466 9.22363 57.8116 9.22363H53.1202C52.824 9.22363 52.5347 9.35374 52.3487 9.58657L46.066 17.037C45.756 17.4 45.1636 17.1808 45.1636 16.7152V10.3946L39.6662 16.455V30.315C39.6662 30.8697 40.114 31.3216 40.6789 31.3216H44.144C44.7089 31.3216 45.1567 30.8697 45.1567 30.315V22.6797C45.1567 22.214 45.7422 21.9949 46.0522 22.351L53.5611 30.9724C53.7609 31.1915 54.0296 31.3216 54.3258 31.3216H59.1618C59.8162 31.3216 60.1676 30.541 59.7267 30.0548V30.0616Z"
                      fill="white"
                    />
                    <path
                      d="M45.1633 1.00663C45.1633 0.44511 44.7155 0 44.1506 0H40.6855C40.1206 0 39.6729 0.44511 39.6729 1.00663V16.4622L45.1702 10.4019V1.00663H45.1633Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2239_2537">
                      <rect width="124" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <p className="text-[#CFCFCF] text-lg leading-[1.4]">
                Lorem ipsum dolor sit amet consectetur. Lorem <br /> ipsum dolor
                sit amet consectetur.
              </p>
            </div>
            <p className="text-[#ffffff] text-base leading-normal py-8">
              © Copyright {new Date().getFullYear()} Inkam App
            </p>
            {/* social link */}
            <div className="flex gap-3 mb-10">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="20"
                    fill="white"
                    fillOpacity="0.1"
                    className="transition-colors duration-300 group-hover:fill-[#FF8800]"
                  />
                  <path
                    d="M21.8586 32V21.0533H25.5315L26.0826 16.7859H21.8586V14.0618C21.8586 12.8266 22.2002 11.9849 23.9734 11.9849L26.2312 11.984V8.16708C25.8408 8.11633 24.5005 8 22.9405 8C19.6829 8 17.4528 9.98836 17.4528 13.6391V16.7859H13.7688V21.0533H17.4528V32H21.8586Z"
                    fill="white"
                    className="transition-colors duration-300 group-hover:fill-[#FF8800]"
                  />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="20"
                    fill="white"
                    fillOpacity="0.1"
                    className="transition-colors duration-300 group-hover:fill-[#FF8800]"
                  />
                  <path
                    d="M29.6 29.6007V22.5687C29.6 19.1127 28.856 16.4727 24.824 16.4727C22.88 16.4727 21.584 17.5287 21.056 18.5367H21.008V16.7847H17.192V29.6007H21.176V23.2407C21.176 21.5607 21.488 19.9527 23.552 19.9527C25.592 19.9527 25.616 21.8487 25.616 23.3367V29.5767H29.6V29.6007Z"
                    fill="white"
                    className="transition-colors duration-300 group-hover:fill-[#FF8800]"
                  />
                  <path
                    d="M10.712 16.7842H14.696V29.6002H10.712V16.7842Z"
                    fill="white"
                    className="transition-colors duration-300 group-hover:fill-[#FF8800]"
                  />
                  <path
                    d="M12.704 10.4004C11.432 10.4004 10.4 11.4324 10.4 12.7044C10.4 13.9764 11.432 15.0324 12.704 15.0324C13.976 15.0324 15.008 13.9764 15.008 12.7044C15.008 11.4324 13.976 10.4004 12.704 10.4004Z"
                    fill="white"
                    className="transition-colors duration-300 group-hover:fill-[#FF8800]"
                  />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="20"
                    fill="white"
                    fillOpacity="0.1"
                    className="transition-colors duration-300 group-hover:fill-[#FF8800]"
                  />
                  <path
                    d="M21.9027 18.4686L29.3482 10H27.5838L21.119 17.3532L15.9555 10H10L17.8082 21.1193L10 30H11.7644L18.5915 22.2348L24.0445 30H30L21.9023 18.4686H21.9027ZM19.4861 21.2173L18.695 20.1101L12.4002 11.2997H15.1102L20.1902 18.4099L20.9813 19.5172L27.5847 28.7594H24.8746L19.4861 21.2177V21.2173Z"
                    fill="white"
                    className="transition-colors duration-300 group-hover:fill-[#FF8800]"
                  />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="20"
                    fill="white"
                    fillOpacity="0.1"
                    className="transition-colors duration-300 group-hover:fill-[#FF8800]"
                  />
                  <path
                    d="M30.7747 14.3762C30.5154 13.4123 29.7554 12.6524 28.7916 12.3929C27.0309 11.9111 19.988 11.9111 19.988 11.9111C19.988 11.9111 12.9454 11.9111 11.1847 12.3746C10.2394 12.6339 9.46091 13.4124 9.20163 14.3762C8.73828 16.1367 8.73828 19.7879 8.73828 19.7879C8.73828 19.7879 8.73828 23.4575 9.20163 25.1996C9.46118 26.1634 10.2209 26.9233 11.1848 27.1828C12.9639 27.6647 19.9883 27.6647 19.9883 27.6647C19.9883 27.6647 27.0309 27.6647 28.7916 27.2012C29.7555 26.9418 30.5154 26.182 30.7749 25.2182C31.2381 23.4575 31.2381 19.8065 31.2381 19.8065C31.2381 19.8065 31.2567 16.1367 30.7747 14.3762ZM17.7457 23.161V16.4148L23.6022 19.7879L17.7457 23.161Z"
                    fill="white"
                    className="transition-colors duration-300 group-hover:fill-[#FF8800]"
                  />
                </svg>
              </a>
            </div>

            <Link
              href="#"
              className="bg-[#FF8800] text-white text-base leading-1.5 font-medium py-3 px-10.5 rounded-xl hover:bg-[#e67600] inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <circle
                  cx="9.03333"
                  cy="9.03353"
                  r="8.33333"
                  stroke="white"
                  strokeWidth="1.4"
                />
                <path
                  d="M6.53333 11.6662C6.14673 11.6662 5.83333 11.9796 5.83333 12.3662C5.83333 12.7528 6.14673 13.0662 6.53333 13.0662V12.3662V11.6662ZM11.5333 13.0662C11.9199 13.0662 12.2333 12.7528 12.2333 12.3662C12.2333 11.9796 11.9199 11.6662 11.5333 11.6662V12.3662V13.0662ZM11.2196 8.77556C11.4787 8.48858 11.456 8.04594 11.169 7.7869C10.882 7.52787 10.4394 7.55053 10.1804 7.83751L10.7 8.30653L11.2196 8.77556ZM9.91722 9.17378L10.4368 9.6428L10.4368 9.6428L9.91722 9.17378ZM8.14945 9.17378L7.62982 9.6428L7.62982 9.6428L8.14945 9.17378ZM7.8863 7.83751C7.62726 7.55053 7.18463 7.52787 6.89764 7.7869C6.61066 8.04594 6.588 8.48858 6.84704 8.77556L7.36667 8.30653L7.8863 7.83751ZM9.73333 4.86621C9.73333 4.47961 9.41993 4.16621 9.03333 4.16621C8.64673 4.16621 8.33333 4.47961 8.33333 4.86621H9.03333H9.73333ZM6.53333 12.3662V13.0662H11.5333V12.3662V11.6662H6.53333V12.3662ZM10.7 8.30653L10.1804 7.83751L9.39759 8.70475L9.91722 9.17378L10.4368 9.6428L11.2196 8.77556L10.7 8.30653ZM8.14945 9.17378L8.66908 8.70475L7.8863 7.83751L7.36667 8.30653L6.84704 8.77556L7.62982 9.6428L8.14945 9.17378ZM9.91722 9.17378L9.39759 8.70475C9.17559 8.9507 9.05599 9.08093 8.96421 9.15851C8.88497 9.22549 8.92511 9.16621 9.03333 9.16621V9.86621V10.5662C9.40044 10.5662 9.67419 10.3915 9.868 10.2277C10.0493 10.0745 10.2422 9.85848 10.4368 9.6428L9.91722 9.17378ZM8.14945 9.17378L7.62982 9.6428C7.82449 9.85848 8.01739 10.0745 8.19867 10.2277C8.39248 10.3915 8.66622 10.5662 9.03333 10.5662V9.86621V9.16621C9.14156 9.16621 9.18169 9.22549 9.10245 9.15851C9.01068 9.08093 8.89107 8.9507 8.66908 8.70475L8.14945 9.17378ZM9.03333 9.86621H9.73333V4.86621H9.03333H8.33333V9.86621H9.03333Z"
                  fill="white"
                />
              </svg>
              Pitch Deck
            </Link>
          </div>

          <div className="w-1/2 flex justify-between gap-12">
            {links.map((linkGroup, groupIndex) => (
              <div key={groupIndex} className="space-y-4 text-sm">
                <span className="text-[#FFFFFF] block font-medium">
                  {linkGroup.group}
                </span>

                {linkGroup.items.map((item, itemIndex) =>
                  "href" in item && item.href ? (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="text-[#CFCFCF] hover:text-primary duration-150 flex items-center gap-2"
                    >
                      {item.icon && (
                        <span>
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="20"
                              fill="white"
                              fillOpacity="0.1"
                            />
                            <path
                              d="M15.3276 11.0152C16.131 10.9154 17.0347 11.3144 17.4364 12.0126L17.9385 12.9103C18.4406 13.808 18.1394 14.8055 17.4364 15.4039L16.8339 15.8029C16.0305 16.5011 15.7293 17.5983 16.3318 18.496C17.0347 19.4935 17.7377 20.4909 18.6415 21.3886C19.5452 22.2863 20.5494 23.0843 21.5536 23.6828C22.4574 24.2812 23.562 23.982 24.1646 23.184L24.5662 22.6853C25.1688 21.8873 26.2734 21.6879 27.0767 22.1866L27.9805 22.6853C28.6835 23.0843 29.0851 23.8822 28.9847 24.7799L28.6835 26.3759L28.4826 27.3733C28.2818 28.3708 27.2776 29.1687 26.2734 28.9692C24.3654 28.7697 22.5578 28.1713 20.8507 27.3733C19.0431 26.5754 17.4364 25.3784 15.9301 23.982C14.4238 22.5856 13.3192 20.8899 12.5158 19.0945C11.8129 17.3988 11.2104 15.5037 11.0095 13.6085C10.9091 12.6111 11.6121 11.6136 12.6163 11.4141L15.3276 11.0152Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                      <span>{item.title}</span>
                    </Link>
                  ) : "mailto" in item && item.mailto ? (
                    <a
                      key={itemIndex}
                      href={item.mailto}
                      className="text-[#CFCFCF] hover:text-primary duration-150 flex items-center gap-2"
                    >
                      {item.icon && (
                        <span>
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="20"
                              fill="white"
                              fillOpacity="0.1"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24 13H26C27.7 13 29 14.3 29 16V24C29 25.7 27.7 27 26 27H14C12.3 27 11 25.7 11 24V16C11 14.3 12.3 13 14 13H16H24Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M28.9008 15.2002L22.3008 21.0002L20.0008 23.0002L17.7008 21.0002L11.1008 15.2002"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.7 21L11.9 26.2"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M28.0992 26.2L22.2992 21"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                      <span>{item.title}</span>
                    </a>
                  ) : (
                    <span
                      key={itemIndex}
                      className="text-[#CFCFCF] duration-150 flex items-center gap-2"
                    >
                      {item.icon && (
                        <span>
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="20"
                              fill="white"
                              fillOpacity="0.1"
                            />
                            <path
                              d="M20 29.6004C20 29.6004 27.513 22.9221 27.513 17.9134C27.513 13.7641 24.1493 10.4004 20 10.4004C15.8506 10.4004 12.4869 13.7641 12.4869 17.9134C12.4869 22.9221 20 29.6004 20 29.6004Z"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M22.4003 17.6005C22.4003 18.926 21.3258 20.0005 20.0003 20.0005C18.6748 20.0005 17.6003 18.926 17.6003 17.6005C17.6003 16.2751 18.6748 15.2005 20.0003 15.2005C21.3258 15.2005 22.4003 16.2751 22.4003 17.6005Z"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </span>
                      )}
                      <span>{item.title}</span>
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="pt-12 space-y-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1322"
          height="2"
          viewBox="0 0 1322 2"
          fill="none"
        >
          <path
            d="M1 1H1321"
            stroke="url(#paint0_linear_2239_2591)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2239_2591"
              x1="-38.9983"
              y1="0.49994"
              x2="-37.2525"
              y2="49.1952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8800" />
              <stop offset="0.981629" stopColor="#0F0E11" />
            </linearGradient>
          </defs>
        </svg>
          <svg
            width="1280"
            height="145"
            viewBox="0 0 1320 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.4746 145H0V0H25.4746V145ZM190.752 110.281V0H216.004V145H190.752L89.9697 35.5664V145H64.4951V0H89.9697L190.752 110.281ZM276.335 68.71L349.631 0H385.162L309.435 68.4307L394.994 145H359.017L276.335 69.125V145H250.86V0H276.335V68.71ZM558.367 145H530.881L516.481 110.987H445.781L431.439 145H404.177L467.417 0H494.68L558.367 145ZM676.162 121.999L747.319 0H772.57V145H747.319V47.9004L690.112 145H662.403L605.42 48.6846V145H579.945V0H605.42L676.162 121.999ZM833.481 145H803.761V120.833H833.481V145ZM1005.51 145H978.026L963.627 110.987H892.927L878.585 145H851.322L914.562 0H941.825L1005.51 145ZM1105.3 0C1112.9 3.35542e-05 1119.98 1.04437 1126.53 3.13281C1133.09 5.07211 1138.82 8.05523 1143.74 12.083C1148.8 16.1108 1152.68 21.1836 1155.36 27.2998C1158.19 33.2668 1159.6 40.4276 1159.6 48.7812C1159.6 56.9858 1158.19 64.1465 1155.36 70.2627C1152.68 76.2297 1148.8 81.1527 1143.74 85.0312C1138.82 88.9099 1133.09 91.8185 1126.53 93.7578C1119.98 95.5479 1112.9 96.4433 1105.3 96.4434H1052.12V145H1026.64V0H1105.3ZM1265.7 0C1273.3 0 1280.37 1.04434 1286.93 3.13281C1293.48 5.07207 1299.22 8.05543 1304.13 12.083C1309.2 16.1108 1313.07 21.1835 1315.75 27.2998C1318.58 33.2668 1320 40.4275 1320 48.7812C1320 56.9858 1318.58 64.1465 1315.75 70.2627C1313.07 76.2296 1309.2 81.1527 1304.13 85.0312C1299.22 88.9097 1293.48 91.8186 1286.93 93.7578C1280.37 95.5479 1273.3 96.4434 1265.7 96.4434H1212.51V145H1187.04V0H1265.7ZM454.933 89.2822H507.292L481.06 27.3193L454.933 89.2822ZM902.078 89.2822H954.438L928.205 27.3193L902.078 89.2822ZM1052.12 75.1855H1107.09C1115.28 75.1855 1121.84 72.7981 1126.75 68.0244C1131.82 63.2508 1134.35 56.8365 1134.35 48.7812C1134.35 40.4274 1131.82 33.9379 1126.75 29.3135C1121.84 24.5398 1115.28 22.1523 1107.09 22.1523H1052.12V75.1855ZM1212.51 75.1855H1267.49C1275.68 75.1855 1282.24 72.798 1287.15 68.0244C1292.22 63.2509 1294.75 56.8364 1294.75 48.7812C1294.75 40.4275 1292.22 33.9379 1287.15 29.3135C1282.24 24.5399 1275.68 22.1524 1267.49 22.1523H1212.51V75.1855Z"
              fill="white"
              fillOpacity="0.2"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
