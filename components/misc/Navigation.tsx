import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Navigation.module.scss';

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  const router = useRouter();
  const { colors, darkMode } = useTheme();

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor: colors.background[100],
        borderTopColor: darkMode ? colors.background[60] : '#DDDDDD',
      }}
    >
      {/* ------ ORGANIZE ------ */}
      <Link href="/Organize">
        <div className={styles.link}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 21"
            fill={
              router.pathname == '/Organize' && darkMode
                ? colors.primary[80]
                : router.pathname == '/Organize' && !darkMode
                ? colors.primary[100]
                : colors.text[60]
            }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.89 8.54998C15.8069 8.38507 15.6797 8.24638 15.5226 8.14931C15.3656 8.05223 15.1847 8.00054 15 7.99998H9.99998V1.99998C10.0107 1.78067 9.94896 1.56391 9.82426 1.38318C9.69955 1.20245 9.51883 1.06779 9.30998 0.999982C9.10921 0.933925 8.89267 0.933183 8.69145 0.997862C8.49022 1.06254 8.31467 1.18931 8.18998 1.35998L0.189984 12.36C0.0897493 12.5048 0.0295623 12.6736 0.0155141 12.8492C0.00146601 13.0248 0.0340555 13.201 0.109984 13.36C0.179906 13.5417 0.301372 13.6991 0.459473 13.8128C0.617575 13.9265 0.805431 13.9915 0.999984 14H5.99998V20C6.00014 20.2109 6.06695 20.4163 6.19088 20.5869C6.3148 20.7575 6.48949 20.8846 6.68998 20.95C6.79046 20.9811 6.89481 20.998 6.99998 21C7.15777 21.0004 7.31341 20.9635 7.45419 20.8922C7.59497 20.8209 7.71689 20.7174 7.80998 20.59L15.81 9.58998C15.9177 9.44078 15.9822 9.26474 15.9963 9.08124C16.0104 8.89774 15.9736 8.71391 15.89 8.54998ZM7.99998 16.92V13C7.99998 12.7348 7.89463 12.4804 7.70709 12.2929C7.51955 12.1053 7.2652 12 6.99998 12H2.99998L7.99998 5.07998V8.99998C7.99998 9.2652 8.10534 9.51955 8.29288 9.70709C8.48041 9.89462 8.73477 9.99998 8.99998 9.99998H13L7.99998 16.92Z" />
          </svg>
          <p
            className="small"
            style={{
              color:
                router.pathname == '/Organize' && darkMode
                  ? colors.primary[80]
                  : router.pathname == '/Organize' && !darkMode
                  ? colors.primary[100]
                  : colors.text[60],
            }}
          >
            Organize
          </p>
        </div>
      </Link>

      {/* ------ WATCHLIST ------ */}
      <Link href="/Watchlist">
        <div className={styles.link}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={
              router.pathname == '/Watchlist' && darkMode
                ? colors.primary[80]
                : router.pathname == '/Watchlist' && !darkMode
                ? colors.primary[100]
                : colors.text[60]
            }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 0H3C2.20462 0.000868196 1.44206 0.317218 0.879638 0.879639C0.317217 1.44206 0.000868196 2.20462 0 3V17C0.000868196 17.7954 0.317217 18.5579 0.879638 19.1204C1.44206 19.6828 2.20462 19.9991 3 20H17C17.7954 19.9991 18.5579 19.6828 19.1204 19.1204C19.6828 18.5579 19.9991 17.7954 20 17V3C19.9991 2.20462 19.6828 1.44206 19.1204 0.879639C18.5579 0.317218 17.7954 0.000868196 17 0ZM3 2H17C17.2651 2.00026 17.5193 2.10571 17.7068 2.29319C17.8943 2.48066 17.9997 2.73486 18 3V11H15.5352C15.2059 10.9997 14.8816 11.0809 14.5913 11.2363C14.3009 11.3917 14.0535 11.6165 13.8711 11.8906L12.4648 14H7.53516L6.12891 11.8906C5.94648 11.6165 5.69908 11.3917 5.40874 11.2363C5.11841 11.0809 4.79415 10.9997 4.46485 11H2V3C2.00026 2.73486 2.10571 2.48066 2.29319 2.29319C2.48066 2.10571 2.73486 2.00026 3 2ZM17 18H3C2.73486 17.9997 2.48066 17.8943 2.29319 17.7068C2.10571 17.5193 2.00026 17.2651 2 17V13H4.46485L5.8711 15.1094C6.05353 15.3835 6.30093 15.6083 6.59126 15.7637C6.8816 15.9191 7.20586 16.0003 7.53516 16H12.4648C12.7942 16.0003 13.1184 15.9191 13.4087 15.7637C13.6991 15.6083 13.9465 15.3835 14.1289 15.1094L15.5352 13H18V17C17.9997 17.2651 17.8943 17.5193 17.7068 17.7068C17.5193 17.8943 17.2651 17.9997 17 18Z" />
          </svg>
          <p
            className="small"
            style={{
              color:
                router.pathname == '/Watchlist' && darkMode
                  ? colors.primary[80]
                  : router.pathname == '/Watchlist' && !darkMode
                  ? colors.primary[100]
                  : colors.text[60],
            }}
          >
            Watchlist
          </p>
        </div>
      </Link>

      {/* ------ EXPLORE ------ */}
      <Link href="/">
        <div className={styles.link}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 21 20"
            fill={
              router.pathname == '/' && darkMode
                ? colors.primary[80]
                : router.pathname == '/' && !darkMode
                ? colors.primary[100]
                : colors.text[60]
            }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.7309 18.3109L16.0209 14.6309C17.461 12.8353 18.1584 10.5562 17.9697 8.2622C17.781 5.9682 16.7206 3.83368 15.0064 2.29754C13.2923 0.761407 11.0547 -0.0595894 8.75382 0.00337096C6.45294 0.0663314 4.26362 1.00846 2.63604 2.63604C1.00846 4.26362 0.0663314 6.45294 0.00337096 8.75382C-0.0595894 11.0547 0.761407 13.2923 2.29754 15.0064C3.83368 16.7206 5.9682 17.781 8.2622 17.9697C10.5562 18.1584 12.8353 17.461 14.6309 16.0209L18.3109 19.7009C18.4039 19.7946 18.5145 19.869 18.6363 19.9198C18.7582 19.9706 18.8889 19.9967 19.0209 19.9967C19.1529 19.9967 19.2836 19.9706 19.4055 19.9198C19.5273 19.869 19.6379 19.7946 19.7309 19.7009C19.9111 19.5144 20.0119 19.2652 20.0119 19.0059C20.0119 18.7466 19.9111 18.4974 19.7309 18.3109ZM9.0209 16.0209C7.63643 16.0209 6.28305 15.6104 5.13191 14.8412C3.98076 14.072 3.08356 12.9788 2.55374 11.6997C2.02393 10.4206 1.88531 9.01314 2.1554 7.65527C2.4255 6.2974 3.09219 5.05012 4.07115 4.07115C5.05012 3.09219 6.2974 2.4255 7.65527 2.1554C9.01314 1.88531 10.4206 2.02393 11.6997 2.55374C12.9788 3.08356 14.072 3.98076 14.8412 5.13191C15.6104 6.28305 16.0209 7.63643 16.0209 9.0209C16.0209 10.8774 15.2834 12.6579 13.9706 13.9706C12.6579 15.2834 10.8774 16.0209 9.0209 16.0209Z" />
          </svg>
          <p
            className="small"
            style={{
              color:
                router.pathname == '/' && darkMode
                  ? colors.primary[80]
                  : router.pathname == '/' && !darkMode
                  ? colors.primary[100]
                  : colors.text[60],
            }}
          >
            Explore
          </p>
        </div>
      </Link>

      {/* ------ YOUR MATCHUPS ------ */}
      <Link href="/YourMatchUps">
        <div className={styles.link}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={
              router.pathname == '/YourMatchUps' && darkMode
                ? colors.primary[80]
                : router.pathname == '/YourMatchUps' && !darkMode
                ? colors.primary[100]
                : colors.text[60]
            }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 2H16V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0H5C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3V6C0 7.06087 0.421427 8.07828 1.17157 8.82843C1.92172 9.57857 2.93913 10 4 10H5.54C6.44453 11.0091 7.66406 11.6824 9 11.91V14H8C7.20435 14 6.44129 14.3161 5.87868 14.8787C5.31607 15.4413 5 16.2044 5 17V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H14C14.2652 20 14.5196 19.8946 14.7071 19.7071C14.8946 19.5196 15 19.2652 15 19V17C15 16.2044 14.6839 15.4413 14.1213 14.8787C13.5587 14.3161 12.7956 14 12 14H11V11.91C12.3359 11.6824 13.5555 11.0091 14.46 10H16C17.0609 10 18.0783 9.57857 18.8284 8.82843C19.5786 8.07828 20 7.06087 20 6V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2ZM4 8C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V4H4V6C4.0022 6.68171 4.12056 7.35806 4.35 8H4ZM12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17V18H7V17C7 16.7348 7.10536 16.4804 7.29289 16.2929C7.48043 16.1054 7.73478 16 8 16H12ZM14 6C14 7.06087 13.5786 8.07828 12.8284 8.82843C12.0783 9.57857 11.0609 10 10 10C8.93913 10 7.92172 9.57857 7.17157 8.82843C6.42143 8.07828 6 7.06087 6 6V2H14V6ZM18 6C18 6.53043 17.7893 7.03914 17.4142 7.41421C17.0391 7.78929 16.5304 8 16 8H15.65C15.8794 7.35806 15.9978 6.68171 16 6V4H18V6Z" />
          </svg>
          <p
            className="small"
            style={{
              color:
                router.pathname == '/YourMatchUps' && darkMode
                  ? colors.primary[80]
                  : router.pathname == '/YourMatchUps' && !darkMode
                  ? colors.primary[100]
                  : colors.text[60],
            }}
          >
            MatchUps
          </p>
        </div>
      </Link>

      {/* ------ PROFILE ------ */}
      <Link href="Profile/[id]">
        <div className={styles.link}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={
              router.pathname.includes('/Profile/') && darkMode
                ? colors.primary[80]
                : router.pathname.includes('/Profile/') && !darkMode
                ? colors.primary[100]
                : colors.text[60]
            }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.646 10.7155C14.6264 9.94415 15.342 8.88642 15.6933 7.68944C16.0445 6.49246 16.014 5.21576 15.6058 4.03696C15.1977 2.85817 14.4323 1.83589 13.4161 1.11235C12.3999 0.388815 11.1835 0 9.93603 0C8.68858 0 7.47215 0.388815 6.45596 1.11235C5.43978 1.83589 4.67438 2.85817 4.26624 4.03696C3.85811 5.21576 3.82754 6.49246 4.17879 7.68944C4.53004 8.88642 5.24564 9.94415 6.22603 10.7155C4.54611 11.3885 3.08032 12.5048 1.98492 13.9454C0.88953 15.386 0.205595 17.0968 0.00603184 18.8955C-0.00841357 19.0268 0.00314838 19.1597 0.0400573 19.2866C0.0769662 19.4134 0.138499 19.5317 0.221143 19.6348C0.388051 19.843 0.630815 19.9763 0.896032 20.0055C1.16125 20.0347 1.42719 19.9573 1.63536 19.7904C1.84352 19.6235 1.97686 19.3807 2.00603 19.1155C2.22562 17.1607 3.15772 15.3553 4.62425 14.0443C6.09078 12.7333 7.98893 12.0085 9.95603 12.0085C11.9231 12.0085 13.8213 12.7333 15.2878 14.0443C16.7543 15.3553 17.6864 17.1607 17.906 19.1155C17.9332 19.3612 18.0505 19.5882 18.2351 19.7525C18.4198 19.9169 18.6588 20.007 18.906 20.0055H19.016C19.2782 19.9753 19.5178 19.8428 19.6826 19.6367C19.8474 19.4307 19.9241 19.1679 19.896 18.9055C19.6955 17.1017 19.0079 15.3865 17.9069 13.9437C16.8059 12.5009 15.3329 11.385 13.646 10.7155ZM9.93603 10.0055C9.14491 10.0055 8.37155 9.7709 7.71375 9.33137C7.05595 8.89185 6.54326 8.26713 6.24051 7.53623C5.93776 6.80533 5.85855 6.00106 6.01289 5.22513C6.16723 4.44921 6.54819 3.73648 7.1076 3.17707C7.66701 2.61766 8.37975 2.2367 9.15567 2.08235C9.93159 1.92801 10.7359 2.00723 11.4668 2.30998C12.1977 2.61273 12.8224 3.12542 13.2619 3.78321C13.7014 4.44101 13.936 5.21437 13.936 6.0055C13.936 7.06636 13.5146 8.08378 12.7645 8.83392C12.0143 9.58407 10.9969 10.0055 9.93603 10.0055Z" />
          </svg>
          <p
            className="small"
            style={{
              color:
                router.pathname.includes('/Profile/') && darkMode
                  ? colors.primary[80]
                  : router.pathname.includes('/Profile/') && !darkMode
                  ? colors.primary[100]
                  : colors.text[60],
            }}
          >
            Profile
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
