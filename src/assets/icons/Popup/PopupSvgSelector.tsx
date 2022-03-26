import React from 'react'
import sun from '../../images/sun.png';
import Cloud from '../../images/Clouds.png';
import snow from '../../images/snow.svg';
import rain from '../../images/rain.png'

type Props = {
    id: string
}

const GlobalSvgSelector = ({ id }: Props) => {

    switch (id) {
        case 'header-logo':
            return (
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z" fill="#4793FF" />
                    <path d="M65 32.5C65 29.8954 64.6916 27.3631 64.113 24.9358L54.3423 15.1651L53.0241 15.7211L48.3235 11.1622C48.3235 11.1622 46.5495 14.0707 44.5394 12.8754L41.3829 9.79712L41.1963 14.2822L8.78809 46.265L27.0688 64.5458C28.8351 64.843 30.6492 65 32.5 65C50.4493 65 65 50.4493 65 32.5Z" fill="#424FDD" />
                    <path d="M58.3388 29.0023L59.7103 28.1252L58.2388 27.1841C56.6468 26.1659 56.217 24.03 57.2916 22.4755L58.2847 21.0387L56.6808 20.7601C54.8077 20.4347 53.5845 18.6126 53.9927 16.7559L54.3422 15.1659L52.6363 15.541C50.7905 15.9467 48.9765 14.7403 48.637 12.8812L48.3233 11.163L46.9922 12.1001C45.4377 13.1946 43.2843 12.7711 42.26 11.1694L41.3829 9.79797L40.4418 11.2695C39.4237 12.8615 37.2878 13.2912 35.7333 12.2167L34.2964 11.2235L34.0179 12.8275C33.6925 14.7005 31.8705 15.9237 30.0136 15.5156L28.4237 15.1661L28.7987 16.8719C29.2044 18.7177 27.998 20.5317 26.1389 20.8712L24.4207 21.1849L25.3579 22.516C26.4524 24.0705 26.0288 26.2239 24.4272 27.2482L23.0557 28.1253L24.5271 29.0664C26.1192 30.0846 26.5488 32.2204 25.4743 33.775L24.4812 35.2118L26.0851 35.4904C27.9581 35.8157 29.1813 37.6379 28.7732 39.4946L28.4237 41.0845L30.1296 40.7095C31.9753 40.3038 33.7894 41.5102 34.1288 43.3693L34.4425 45.0876L35.7736 44.1505C37.3282 43.056 39.4816 43.4795 40.5058 45.0812L41.3829 46.4526L42.324 44.9811C43.3422 43.3891 45.4781 42.9594 47.0326 44.0339L48.4695 45.0271L48.748 43.4231C49.0734 41.5501 50.8955 40.3269 52.7522 40.735L54.3422 41.0845L53.9672 39.3787C53.5614 37.5329 54.7678 35.7189 56.6269 35.3794L58.3453 35.0657L57.4081 33.7346C56.3136 32.1801 56.7371 30.0266 58.3388 29.0023Z" fill="#FDBF2D" />
                    <path d="M57.4082 33.734L58.3451 35.0645L56.6275 35.378C54.7676 35.7183 53.5615 37.5324 53.9678 39.3783L54.3423 41.0833L52.7529 40.7342C50.8955 40.3254 49.0738 41.5492 48.7475 43.4218L48.4695 45.0265L47.0323 44.0324C45.4784 42.9584 43.3418 43.3875 42.3237 44.9795L41.3829 46.4522V9.797L42.2602 11.1681C43.2847 12.7702 45.4378 13.1943 46.9917 12.0987L48.3235 11.1617L48.637 12.8807C48.976 14.7393 50.7902 15.9453 52.6361 15.5404L54.3423 15.1646L53.9932 16.7553C53.5844 18.6114 54.8082 20.4344 56.6808 20.7594L58.2842 21.0374L57.2914 22.4745C56.2174 24.0297 56.6465 26.1651 58.2385 27.1832L59.7099 28.1239L58.3388 29.0012C56.7366 30.0257 56.3139 32.1788 57.4082 33.734Z" fill="#FD9827" />
                    <path d="M41.383 40.9705C48.4777 40.9705 54.2291 35.2191 54.2291 28.1243C54.2291 21.0296 48.4777 15.2782 41.383 15.2782C34.2883 15.2782 28.5369 21.0296 28.5369 28.1243C28.5369 35.2191 34.2883 40.9705 41.383 40.9705Z" fill="#FFE05F" />
                    <path d="M54.2293 28.1239C54.2293 35.2193 48.4771 40.9703 41.3829 40.9703V15.2788C48.4771 15.2788 54.2293 21.0298 54.2293 28.1239Z" fill="#F9CB0D" />
                    <path d="M42.5274 32.242C42.1958 32.242 41.8694 32.2633 41.5478 32.3006C41.5794 31.9404 41.5966 31.5761 41.5966 31.2077C41.5966 24.3886 36.0687 18.8606 29.2495 18.8606C23.5703 18.8606 18.7873 22.6953 17.3468 27.9164C16.8894 27.8562 16.4229 27.8248 15.9491 27.8248C10.0886 27.8248 5.33777 32.5756 5.33777 38.4361C5.33777 44.2967 10.0886 49.0475 15.9491 49.0475H42.5274C47.1682 49.0475 50.9302 45.2854 50.9302 40.6447C50.9302 36.004 47.1682 32.242 42.5274 32.242Z" fill="white" />
                    <path d="M50.9302 40.6436C50.9302 45.2846 47.1684 49.0466 42.5272 49.0466H28.134V18.9097C28.5016 18.8759 28.8735 18.8596 29.2498 18.8596C36.0691 18.8596 41.5969 24.3873 41.5969 31.2066C41.5969 31.5753 41.5795 31.9395 41.5478 32.2996C41.8696 32.2625 42.1956 32.2407 42.5272 32.2407C47.1684 32.2407 50.9302 36.0036 50.9302 40.6436Z" fill="#DAEFEC" />
                </svg>

            )
        case 'change-theme':
            return (
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6667 4.09792V24.7917C6.83958 24.7917 2.91667 20.9562 2.91667 16.2312C2.91667 13.9562 3.82083 11.8125 5.46875 10.1937L11.6667 4.09792ZM11.6667 0L3.42708 8.10833C1.3125 10.1937 0 13.0667 0 16.2312C0 22.575 5.22083 27.7083 11.6667 27.7083C18.1125 27.7083 23.3333 22.575 23.3333 16.2312C23.3333 13.0667 22.0208 10.1937 19.9062 8.10833L11.6667 0Z" fill="#4793FF" />
                </svg>

            )
        case 'Clear':
            return (
                <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 64 64"
        >
          <defs>
            <linearGradient
              id="a"
              x1="26.75"
              x2="37.25"
              y1="22.91"
              y2="41.09"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fbbf24" />
              <stop offset=".45" stopColor="#fbbf24" />
              <stop offset="1" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          <circle
            cx="32"
            cy="32"
            r="10.5"
            fill="#fbbf24"
            stroke="#fbbf24"
            strokeMiterlimit="10"
            strokeWidth=".5"
          />
          <path
            fill="fbbf24"
            stroke="#fbbf24"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M32 15.71V9.5m0 45v-6.21m11.52-27.81 4.39-4.39M16.09 47.91l4.39-4.39m0-23-4.39-4.39m31.82 31.78-4.39-4.39M15.71 32H9.5m45 0h-6.21"
          >
            <animateTransform
              attributeName="transform"
              dur="45s"
              repeatCount="indefinite"
              type="rotate"
              values="0 32 32; 360 32 32"
            />
          </path>
        </svg>
            )

        case 'Rain':
            return (
                <img src={rain} alt="rain" />
            )
        case 'Clouds':
            return (
                <img src={Cloud} alt="Clouds" />
            )
        case 'sunny':
            return (
                <svg width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.0092 35.5016C30.3584 35.5016 35.5055 30.3547 35.5055 24.0058C35.5055 17.6568 30.3584 12.5099 24.0092 12.5099C17.6599 12.5099 12.5128 17.6568 12.5128 24.0058C12.5128 30.3547 17.6599 35.5016 24.0092 35.5016Z" fill="url(#paint0_linear_2_547)" />
                    <path d="M34.8135 2.40051L32.1118 8.92324C31.2312 11.0477 28.0444 9.72795 28.925 7.60352L31.6267 1.08079C32.5073 -1.04363 35.6941 0.276087 34.8135 2.40051ZM19.0727 40.3988L16.371 46.9215C15.4904 49.0459 12.3036 47.7262 13.1842 45.6018L15.8859 39.0791C16.7665 36.9546 19.9533 38.2743 19.0727 40.3988ZM46.9215 16.3748L40.3984 19.0763C38.2739 19.9569 36.9541 16.7703 39.0786 15.8897L45.6017 13.1882C47.7262 12.3076 49.046 15.4942 46.9215 16.3748ZM8.92137 32.1149L2.39833 34.8164C0.273802 35.697 -1.04598 32.5104 1.07855 31.6298L7.60158 28.9283C9.72611 28.0477 11.0459 31.2343 8.92137 32.1149ZM45.6017 34.8187L39.0786 32.1172C36.9541 31.2366 38.2739 28.05 40.3984 28.9306L46.9215 31.6321C49.046 32.5127 47.7262 35.6993 45.6017 34.8187ZM7.60158 19.0786L1.07855 16.3771C-1.04598 15.4965 0.273802 12.3099 2.39833 13.1905L8.92137 15.892C11.0459 16.7726 9.72611 19.9592 7.60158 19.0786ZM16.3687 1.0785L19.0704 7.60122C19.951 9.72565 16.7642 11.0454 15.8836 8.92094L13.1819 2.39821C12.3013 0.273788 15.4881 -1.04593 16.3687 1.0785ZM32.1095 39.0768L34.8112 45.5995C35.6918 47.7239 32.505 49.0436 31.6244 46.9192L28.9227 40.3965C28.0421 38.2721 31.2289 36.9523 32.1095 39.0768Z" fill="#FFB300" />
                    <defs>
                        <linearGradient id="paint0_linear_2_547" x1="24.0092" y1="12.5099" x2="24.0092" y2="35.1951" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFC227" />
                            <stop offset="1" stopColor="#FFB300" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        case 'Snow':
            return (
                <svg
                width="60"
                height="60"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 64 64"
              >
                <defs>
                  <linearGradient
                    id="c"
                    x1="16.5"
                    x2="21.5"
                    y1="19.67"
                    y2="28.33"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fbbf24" />
                    <stop offset=".45" stopColor="#fbbf24" />
                    <stop offset="1" stopColor="#f59e0b" />
                  </linearGradient>
                  <linearGradient
                    id="d"
                    x1="22.56"
                    x2="39.2"
                    y1="21.96"
                    y2="50.8"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#f3f7fe" />
                    <stop offset=".45" stopColor="#f3f7fe" />
                    <stop offset="1" stopColor="#deeafb" />
                  </linearGradient>
                  <linearGradient
                    id="a"
                    x1="22.66"
                    x2="25.34"
                    y1="42.68"
                    y2="47.32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#86c3db" />
                    <stop offset=".45" stopColor="#86c3db" />
                    <stop offset="1" stopColor="#5eafcf" />
                  </linearGradient>
                  <linearGradient
                    id="e"
                    x1="36.66"
                    x2="39.34"
                    y1="42.68"
                    y2="47.32"
                    xlinkHref="#a"
                  />
                  <linearGradient
                    id="b"
                    x1="23.31"
                    x2="24.69"
                    y1="44.3"
                    y2="46.7"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#4286ee" />
                    <stop offset=".45" stopColor="#4286ee" />
                    <stop offset="1" stopColor="#0950bc" />
                  </linearGradient>
                  <linearGradient
                    id="f"
                    x1="30.31"
                    x2="31.69"
                    y1="44.3"
                    y2="46.7"
                    xlinkHref="#b"
                  />
                  <linearGradient
                    id="g"
                    x1="37.31"
                    x2="38.69"
                    y1="44.3"
                    y2="46.7"
                    xlinkHref="#b"
                  />
                </defs>
                <circle
                  cx="19"
                  cy="24"
                  r="5"
                  fill="#f8af18"
                  stroke="#f8af18"
                  strokeMiterlimit="10"
                  strokeWidth=".5"
                />
                <path
                  fill="#f3f7fe"
                  stroke="#fbbf24"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M19 15.67V12.5m0 23v-3.17m5.89-14.22 2.24-2.24M10.87 32.13l2.24-2.24m0-11.78-2.24-2.24m16.26 16.26-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="45s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 19 24; 360 19 24"
                  />
                </path>
                <path
                  fill="#f3f7fe"
                  stroke="#e6effc"
                  strokeMiterlimit="10"
                  strokeWidth=".5"
                  d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14z"
                />
                <path
                  fill="#f3f7fe"
                  d="m26.45 45.82-.73-.41a1.59 1.59 0 0 0 0-.81l.73-.42a.49.49 0 0 0 .18-.68.51.51 0 0 0-.69-.18l-.72.41a1.66 1.66 0 0 0-.71-.41v-.82a.51.51 0 0 0-1 0v.83a1.74 1.74 0 0 0-.71.4l-.72-.41a.51.51 0 0 0-.69.18.49.49 0 0 0 .18.68l.73.41a1.59 1.59 0 0 0 0 .81l-.73.42a.49.49 0 0 0-.18.68.5.5 0 0 0 .44.25.47.47 0 0 0 .25-.07l.72-.41a2 2 0 0 0 .33.25 1.5 1.5 0 0 0 .38.15v.83a.51.51 0 0 0 1 0v-.83a1.74 1.74 0 0 0 .71-.4l.72.41a.47.47 0 0 0 .25.07.5.5 0 0 0 .44-.25.49.49 0 0 0-.18-.68zm-2.83-.17a.75.75 0 0 1 .38-1.4.75.75 0 0 1 .38.1.75.75 0 0 1 .28 1 .77.77 0 0 1-1.04.3z"
                >
                  <animateTransform
                    additive="sum"
                    attributeName="transform"
                    begin="-2.7s"
                    dur="4s"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -6; -1 12"
                  />
                  <animateTransform
                    additive="sum"
                    attributeName="transform"
                    begin="-2.7s"
                    dur="4s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="-45 24 45; 45 24 45"
                  />
                  <animate
                    attributeName="opacity"
                    begin="-2.7s"
                    dur="4s"
                    repeatCount="indefinite"
                    values="0;1;1;1;0"
                  />
                </path>
                <path
                  fill="url(#e)"
                  d="m40.45 45.82-.73-.41a1.59 1.59 0 0 0 0-.81l.73-.42a.49.49 0 0 0 .18-.68.51.51 0 0 0-.69-.18l-.72.41a1.66 1.66 0 0 0-.71-.41v-.82a.51.51 0 0 0-1 0v.83a1.74 1.74 0 0 0-.71.4l-.72-.41a.51.51 0 0 0-.69.18.49.49 0 0 0 .18.68l.73.41a1.59 1.59 0 0 0 0 .81l-.73.42a.49.49 0 0 0-.18.68.5.5 0 0 0 .44.25.47.47 0 0 0 .25-.07l.72-.41a2 2 0 0 0 .33.25 1.5 1.5 0 0 0 .38.15v.83a.51.51 0 0 0 1 0v-.83a1.74 1.74 0 0 0 .71-.4l.72.41a.47.47 0 0 0 .25.07.5.5 0 0 0 .44-.25.49.49 0 0 0-.18-.68zm-2.83-.17a.75.75 0 0 1 .38-1.4.75.75 0 0 1 .38.1.75.75 0 0 1 .28 1 .77.77 0 0 1-1.04.3z"
                >
                  <animateTransform
                    additive="sum"
                    attributeName="transform"
                    begin="-1.3s"
                    dur="4s"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -6; -1 12"
                  />
                  <animateTransform
                    additive="sum"
                    attributeName="transform"
                    begin="-1.3s"
                    dur="4s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="-45 38 45; 45 38 45"
                  />
                  <animate
                    attributeName="opacity"
                    begin="-1.3s"
                    dur="4s"
                    repeatCount="indefinite"
                    values="0;1;1;1;0"
                  />
                </path>
                <path
                  fill="#f3f7fe"
                  stroke="#f3f7fe"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="m24.08 45.01-.16.98"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="1.5s"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -5; -2 10"
                  />
                  <animate
                    attributeName="opacity"
                    dur="1.5s"
                    repeatCount="indefinite"
                    values="0;1;1;0"
                  />
                </path>
                <path
                  fill="#4180f0"
                  stroke="#4180f0"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="m31.08 45.01-.16.98"
                >
                  <animateTransform
                    attributeName="transform"
                    begin="-0.5s"
                    dur="1.5s"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -5; -2 10"
                  />
                  <animate
                    attributeName="opacity"
                    begin="-0.5s"
                    dur="1.5s"
                    repeatCount="indefinite"
                    values="0;1;1;0"
                  />
                </path>
                <path
                  fill="#4180f0"
                  stroke="#4180f0"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="m38.08 45.01-.16.98"
                >
                  <animateTransform
                    attributeName="transform"
                    begin="-1s"
                    dur="1.5s"
                    repeatCount="indefinite"
                    type="translate"
                    values="1 -5; -2 10"
                  />
                  <animate
                    attributeName="opacity"
                    begin="-1s"
                    dur="1.5s"
                    repeatCount="indefinite"
                    values="0;1;1;0"
                  />
                </path>
              </svg>
            )
        default:
            return null;
    }


}

export default GlobalSvgSelector;