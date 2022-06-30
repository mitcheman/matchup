import type { NextPage } from 'next';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Router, { useRouter } from 'next/router';
import Header from '../components/misc/Header';
import { useEffect, useState } from 'react';
import HeaderButton from '../components/misc/HeaderButton';
import { Button, Footer, Divider } from '../components/misc';
import MainInfo from '../components/misc/MainInfo';
import SportCard from '../components/cards/Sport.Card';
import SkillCard from '../components/cards/Skills.Card';
import SlotsCard from '../components/cards/Slots.Card';

/* STYLES */
import styles from './styles/Organize.module.scss';

/* IMAGES */
import football from '../public/football.jpg';
import basketball from '../public/basketball.jpg';
import beachvolleyball from '../public/beachvolleyball.jpg';
import tennis from '../public/tennis.jpg';
import volleyball from '../public/volleyball.jpg';
import frisbee from '../public/frisbee.jpg';
import { useTheme } from '../contexts/Theme';
import Switch from '../components/misc/Switch';
import StaticMap from '../components/maps/Static.Map';
import { TCity, TSkillLevels, TSportCategories } from '../utils/types/MatchUp.Type';

/* LOCATION */
import { Geo } from 'aws-amplify';
import UpdatesPreviewCard from '../components/cards/UpdatesPreview.Card';
import SkillsCard from '../components/cards/Skills.Card';
import OrganizerCard from '../components/cards/Organizer.Card';
import { ParticipantsPreviewCard } from '../components/cards';

// interface MatchUp {
//   id?: string;
//   title: string;
//   users: User[];
//   location: string;
//   organizer: string;
//   sportCategory: string;
//   skillLevel: string;
//   totalCost: number;
//   reservedCourt: boolean;
//   attendanceMin: number;
//   attendanceMax: number;
//   cancelled: boolean;
//   description: string;
//   image: string;
//   date: string;
//   currency: string;
// }

const OrganizePage: NextPage = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const { colors, shadows, darkMode } = useTheme();

  /* Keeping track of all of the answers */
  const [sportCategory, setSportCategory] = useState<TSportCategories>();
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [location, setLocation] = useState<TCity>();
  const [indoors, setIndoors] = useState<boolean>(false);
  const [attendanceMin, setAttendanceMin] = useState<number>(4);
  const [attendanceMax, setAttendanceMax] = useState<number>(8);
  const [skillLevel, setSkillLevel] = useState<TSkillLevels>('intermediate');
  const [reservedCourt, setReservedCourt] = useState<boolean>(false);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<any>(null);

  /* Keeping track of which step the user is currently in --- form validation */
  const [step, setStep] = useState<number>(0);
  function goToNext() {
    setStep(step + 1);
  }

  // with validation
  // function goToNext() {
  //   if (step <= 3) {
  //     if (step === 0 && sportCategory) {
  //       setStep(step + 1);
  //     }
  //     if (step === 1 && title && date && location) {
  //       setStep(step + 1);
  //     }
  //   }
  // }

  function goBack() {
    if (step > 0) setStep(step - 1);
  }

  /* Managing the increment buttons in step 2 */

  function decreaseMinAttendance(): void {
    if (attendanceMin > 2) {
      setAttendanceMin((prevAttendanceMin) => prevAttendanceMin - 1);
    }
  }
  function increaseMinAttendance(): void {
    if (attendanceMin < attendanceMax) {
      setAttendanceMin((prevAttendanceMin) => prevAttendanceMin + 1);
    }
  }
  function decreaseMaxAttendance(): void {
    if (attendanceMax > attendanceMin) {
      setAttendanceMax((prevAttendanceMax) => prevAttendanceMax - 1);
    }
  }
  function increaseMaxAttendance(): void {
    if (attendanceMin < 30) {
      setAttendanceMax((prevAttendanceMax) => prevAttendanceMax + 1);
    }
  }

  /* Managing the location input field  */

  async function searchLocation(event: any) {
    const searchOptions = { maxResults: 10, language: 'en' };
    const results = await Geo.searchByText(event, searchOptions);
    console.log(results);
    if (results.length > 0) {
      // setLocationSearchResult(true);
      setLocation(results);
    }
    if (results.length <= 0) {
      setLocation([]);
      // setLocationSearchResult(false);
    }
  }

  return (
    <div className={styles.wrapper} style={{ backgroundColor: colors.background[100] }}>
      {step == 0 ? (
        /////////////////////////////// STEP 0
        <>
          <Header
            title="Choose a sport you want to play"
            leftButton={
              <HeaderButton
                viewBox="0 0 10 10"
                callback={() => Router.back()}
                icon={
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M5.96126 5L8.89307 2.075C9.02146 1.94661 9.09359 1.77248 9.09359 1.59091C9.09359 1.40934 9.02146 1.23521 8.89307 1.10682C8.76468 0.978432 8.59055 0.906303 8.40898 0.906303C8.22741 0.906303 8.05328 0.978432 7.92489 1.10682L4.99989 4.03864L2.07489 1.10682C1.9465 0.978432 1.77237 0.906303 1.5908 0.906303C1.40923 0.906303 1.2351 0.978432 1.10671 1.10682C0.978321 1.23521 0.906193 1.40934 0.906193 1.59091C0.906193 1.77248 0.978321 1.94661 1.10671 2.075L4.03853 5L1.10671 7.925C1.0428 7.98839 0.992081 8.0638 0.957466 8.14688C0.922851 8.22997 0.905029 8.31908 0.905029 8.40909C0.905029 8.4991 0.922851 8.58822 0.957466 8.6713C0.992081 8.75439 1.0428 8.8298 1.10671 8.89318C1.17009 8.95709 1.2455 9.00781 1.32859 9.04243C1.41168 9.07704 1.50079 9.09486 1.5908 9.09486C1.68081 9.09486 1.76993 9.07704 1.85301 9.04243C1.9361 9.00781 2.01151 8.95709 2.07489 8.89318L4.99989 5.96137L7.92489 8.89318C7.98828 8.95709 8.06369 9.00781 8.14677 9.04243C8.22986 9.07704 8.31897 9.09486 8.40898 9.09486C8.49899 9.09486 8.58811 9.07704 8.67119 9.04243C8.75428 9.00781 8.82969 8.95709 8.89307 8.89318C8.95698 8.8298 9.0077 8.75439 9.04232 8.6713C9.07693 8.58822 9.09475 8.4991 9.09475 8.40909C9.09475 8.31908 9.07693 8.22997 9.04232 8.14688C9.0077 8.0638 8.95698 7.98839 8.89307 7.925L5.96126 5Z"
                  />
                }
              />
            }
          ></Header>
          <div className={styles.sportCategoriesList}>
            <SportCard
              title="Football (Soccer)"
              subTitle="Start a football match with locals"
              image={football}
              callback={() => {
                setSportCategory('football');
              }}
              active={sportCategory == 'football'}
            ></SportCard>

            <SportCard
              title="Basketball"
              subTitle="Organize a basketball game"
              image={basketball}
              callback={() => {
                setSportCategory('basketball');
              }}
              active={sportCategory == 'basketball'}
            ></SportCard>

            <SportCard
              title="Beach Volleyball"
              subTitle="Step on the warm sand for a round of volleyball"
              image={beachvolleyball}
              callback={() => {
                setSportCategory('beach-volleyball');
              }}
              active={sportCategory == 'beach-volleyball'}
            ></SportCard>

            <SportCard
              title="Tennis"
              subTitle="Challange yourself with new tennis opponents"
              image={tennis}
              callback={() => {
                setSportCategory('tennis');
              }}
              active={sportCategory == 'tennis'}
            ></SportCard>

            <SportCard
              title="Volleyball"
              subTitle="Level up your volley skills?"
              image={volleyball}
              callback={() => {
                setSportCategory('volleyball');
              }}
              active={sportCategory == 'volleyball'}
            ></SportCard>

            <SportCard
              title="Ultimate Frisbee"
              subTitle="I have no ideas for cool prompts?"
              image={frisbee}
              callback={() => {
                setSportCategory('ultimate-frisbee');
              }}
              active={sportCategory == 'ultimate-frisbee'}
            ></SportCard>

            <div className={styles.bottomMargin}></div>
          </div>
          <Footer
            progress={25}
            leftSide={<p onClick={() => Router.back()}>Back</p>}
            rightButton={<Button variant="primary" callback={goToNext} text="Next"></Button>}
          ></Footer>
        </>
      ) : step == 1 ? (
        /////////////////////////////// STEP 1
        <>
          <Header
            title="Give us some general information"
            leftButton={
              <HeaderButton
                viewBox="0 0 10 10"
                callback={() => Router.back()}
                icon={
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M5.96126 5L8.89307 2.075C9.02146 1.94661 9.09359 1.77248 9.09359 1.59091C9.09359 1.40934 9.02146 1.23521 8.89307 1.10682C8.76468 0.978432 8.59055 0.906303 8.40898 0.906303C8.22741 0.906303 8.05328 0.978432 7.92489 1.10682L4.99989 4.03864L2.07489 1.10682C1.9465 0.978432 1.77237 0.906303 1.5908 0.906303C1.40923 0.906303 1.2351 0.978432 1.10671 1.10682C0.978321 1.23521 0.906193 1.40934 0.906193 1.59091C0.906193 1.77248 0.978321 1.94661 1.10671 2.075L4.03853 5L1.10671 7.925C1.0428 7.98839 0.992081 8.0638 0.957466 8.14688C0.922851 8.22997 0.905029 8.31908 0.905029 8.40909C0.905029 8.4991 0.922851 8.58822 0.957466 8.6713C0.992081 8.75439 1.0428 8.8298 1.10671 8.89318C1.17009 8.95709 1.2455 9.00781 1.32859 9.04243C1.41168 9.07704 1.50079 9.09486 1.5908 9.09486C1.68081 9.09486 1.76993 9.07704 1.85301 9.04243C1.9361 9.00781 2.01151 8.95709 2.07489 8.89318L4.99989 5.96137L7.92489 8.89318C7.98828 8.95709 8.06369 9.00781 8.14677 9.04243C8.22986 9.07704 8.31897 9.09486 8.40898 9.09486C8.49899 9.09486 8.58811 9.07704 8.67119 9.04243C8.75428 9.00781 8.82969 8.95709 8.89307 8.89318C8.95698 8.8298 9.0077 8.75439 9.04232 8.6713C9.07693 8.58822 9.09475 8.4991 9.09475 8.40909C9.09475 8.31908 9.07693 8.22997 9.04232 8.14688C9.0077 8.0638 8.95698 7.98839 8.89307 7.925L5.96126 5Z"
                  />
                }
              />
            }
          ></Header>

          <form className={styles.generalInfoForm}>
            <div className={styles.inputGroup}>
              <label className={styles.label} style={{ color: colors.text[100] }}>
                Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give your MatchUp a cool name"
                className={styles.input}
                style={{
                  borderColor: darkMode ? colors.background[60] : '#DDDDDD',
                  color: colors.text[60],
                }}
              ></input>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} style={{ color: colors.text[100] }}>
                Time
              </label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Choose a day and time to MatchUp"
                className={styles.input}
                type="datetime-local"
                style={{
                  borderColor: darkMode ? colors.background[60] : '#DDDDDD',
                  color: colors.text[60],
                }}
              ></input>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} style={{ color: colors.text[100] }}>
                Location
              </label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value as TCity)}
                placeholder="Where do you want to meet?"
                className={styles.input}
                style={{
                  borderColor: darkMode ? colors.background[60] : '#DDDDDD',
                  color: colors.text[60],
                  marginBottom: '1em',
                }}
              ></input>
              <StaticMap latitude={15} longitude={50} zoom={15} />
            </div>

            <div className={styles.indoors} style={{ color: colors.text[60] }}>
              <p>Is this taking place indoors?</p>
              <Switch callback={() => console.log('switched')} />
            </div>
          </form>

          <Footer
            progress={50}
            leftSide={<p onClick={() => goBack()}>Back</p>}
            rightButton={<Button variant="primary" callback={goToNext} text="Next"></Button>}
          ></Footer>
        </>
      ) : step === 2 ? (
        /////////////////////////////// STEP 2
        <>
          <Header
            title="Let's figure out some more information"
            leftButton={
              <HeaderButton
                viewBox="0 0 10 10"
                callback={() => Router.back()}
                icon={
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M5.96126 5L8.89307 2.075C9.02146 1.94661 9.09359 1.77248 9.09359 1.59091C9.09359 1.40934 9.02146 1.23521 8.89307 1.10682C8.76468 0.978432 8.59055 0.906303 8.40898 0.906303C8.22741 0.906303 8.05328 0.978432 7.92489 1.10682L4.99989 4.03864L2.07489 1.10682C1.9465 0.978432 1.77237 0.906303 1.5908 0.906303C1.40923 0.906303 1.2351 0.978432 1.10671 1.10682C0.978321 1.23521 0.906193 1.40934 0.906193 1.59091C0.906193 1.77248 0.978321 1.94661 1.10671 2.075L4.03853 5L1.10671 7.925C1.0428 7.98839 0.992081 8.0638 0.957466 8.14688C0.922851 8.22997 0.905029 8.31908 0.905029 8.40909C0.905029 8.4991 0.922851 8.58822 0.957466 8.6713C0.992081 8.75439 1.0428 8.8298 1.10671 8.89318C1.17009 8.95709 1.2455 9.00781 1.32859 9.04243C1.41168 9.07704 1.50079 9.09486 1.5908 9.09486C1.68081 9.09486 1.76993 9.07704 1.85301 9.04243C1.9361 9.00781 2.01151 8.95709 2.07489 8.89318L4.99989 5.96137L7.92489 8.89318C7.98828 8.95709 8.06369 9.00781 8.14677 9.04243C8.22986 9.07704 8.31897 9.09486 8.40898 9.09486C8.49899 9.09486 8.58811 9.07704 8.67119 9.04243C8.75428 9.00781 8.82969 8.95709 8.89307 8.89318C8.95698 8.8298 9.0077 8.75439 9.04232 8.6713C9.07693 8.58822 9.09475 8.4991 9.09475 8.40909C9.09475 8.31908 9.07693 8.22997 9.04232 8.14688C9.0077 8.0638 8.95698 7.98839 8.89307 7.925L5.96126 5Z"
                  />
                }
              />
            }
          ></Header>
          <div className={styles.detailInfoForm}>
            <h4 className={styles.label} style={{ color: colors.text[80] }}>
              Participants
            </h4>
            {/* participants */}

            <div className={styles.participantsSection}>
              <div className={styles.participantsRow}>
                <label style={{ color: colors.text[60] }}>Minimum</label>
                <div className={styles.incrementButtons}>
                  <button
                    className={styles.incrementBtn}
                    onClick={decreaseMinAttendance}
                    style={{
                      color: colors.text[60],
                      boxShadow: shadows.small,
                    }}
                  >
                    -
                  </button>
                  <div>{attendanceMin}</div>
                  <button
                    className={styles.incrementBtn}
                    onClick={increaseMinAttendance}
                    style={{
                      color: colors.text[60],
                      boxShadow: shadows.small,
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className={styles.participantsRow}>
                <label style={{ color: colors.text[60] }}>Maximum</label>
                <div className={styles.incrementButtons}>
                  <button
                    className={styles.incrementBtn}
                    onClick={decreaseMaxAttendance}
                    style={{
                      color: colors.text[60],
                      boxShadow: shadows.small,
                    }}
                  >
                    -
                  </button>
                  <div>{attendanceMax}</div>
                  <button
                    className={styles.incrementBtn}
                    onClick={increaseMaxAttendance}
                    style={{
                      color: colors.text[60],
                      boxShadow: shadows.small,
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className={styles.participantsRow}>
                <label style={{ color: colors.text[60] }}>Skills level</label>
                <select
                  className={styles.selectInput}
                  onChange={(e) => setSkillLevel(e.target.value)}
                  style={{
                    borderColor: darkMode ? colors.background[60] : '#DDDDDD',
                    color: colors.text[60],
                  }}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              {/* optional costs */}
            </div>
            <h4 className={styles.label} style={{ color: colors.text[80] }}>
              Optional Costs
            </h4>
            <div className={styles.rentedCourt}>
              <p style={{ color: colors.text[60] }}>Is there a reserved court?</p>
              <Switch callback={() => console.log('switched')} />
            </div>
            <div className={styles.costRow}>
              <p style={{ color: colors.text[60] }}>Total Costs</p>
              <input
                style={{
                  borderColor: darkMode ? colors.background[60] : '#DDDDDD',
                  color: colors.text[60],
                }}
                type="currency"
                step="any"
                className={styles.costInput}
                placeholder="0.00€"
              />
            </div>
            {/* description */}
            <h4 className={styles.label} style={{ color: colors.text[80] }}>
              Description
            </h4>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className={styles.textarea}
              style={{
                borderColor: darkMode ? colors.background[60] : '#DDDDDD',
                backgroundColor: colors.background[80],
              }}
            />
            {/* image */}
            <h4 className={styles.label} style={{ color: colors.text[80] }}>
              Upload Image
            </h4>

            <div
              className={styles.uploadImageWrapper}
              style={{ borderColor: darkMode ? colors.background[60] : '#DDDDDD' }}
            >
              <div
                className={styles.inputImageBtn}
                style={
                  image
                    ? {
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPositionY: '50%',
                        backgroundPositionX: '50%',
                      }
                    : {}
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill={darkMode ? colors.background[60] : '#DDDDDD'}
                  viewBox="0 0 16 16"
                  style={{
                    color: colors.text[60],
                  }}
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                </svg>
                <input
                  className={styles.imageInput}
                  type="file"
                  onChange={(e) => {
                    setImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </div>
            </div>
            <Footer
              progress={75}
              leftSide={<p onClick={() => goBack()}>Back</p>}
              rightButton={<Button variant="primary" callback={goToNext} text="Next"></Button>}
            ></Footer>
          </div>
        </>
      ) : (
        /////////////////////////// SUMMARY
        <>
          <Header
            imageUrl={image}
            leftButton={
              <HeaderButton
                viewBox="0 0 10 10"
                callback={() => Router.back()}
                icon={
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M5.96126 5L8.89307 2.075C9.02146 1.94661 9.09359 1.77248 9.09359 1.59091C9.09359 1.40934 9.02146 1.23521 8.89307 1.10682C8.76468 0.978432 8.59055 0.906303 8.40898 0.906303C8.22741 0.906303 8.05328 0.978432 7.92489 1.10682L4.99989 4.03864L2.07489 1.10682C1.9465 0.978432 1.77237 0.906303 1.5908 0.906303C1.40923 0.906303 1.2351 0.978432 1.10671 1.10682C0.978321 1.23521 0.906193 1.40934 0.906193 1.59091C0.906193 1.77248 0.978321 1.94661 1.10671 2.075L4.03853 5L1.10671 7.925C1.0428 7.98839 0.992081 8.0638 0.957466 8.14688C0.922851 8.22997 0.905029 8.31908 0.905029 8.40909C0.905029 8.4991 0.922851 8.58822 0.957466 8.6713C0.992081 8.75439 1.0428 8.8298 1.10671 8.89318C1.17009 8.95709 1.2455 9.00781 1.32859 9.04243C1.41168 9.07704 1.50079 9.09486 1.5908 9.09486C1.68081 9.09486 1.76993 9.07704 1.85301 9.04243C1.9361 9.00781 2.01151 8.95709 2.07489 8.89318L4.99989 5.96137L7.92489 8.89318C7.98828 8.95709 8.06369 9.00781 8.14677 9.04243C8.22986 9.07704 8.31897 9.09486 8.40898 9.09486C8.49899 9.09486 8.58811 9.07704 8.67119 9.04243C8.75428 9.00781 8.82969 8.95709 8.89307 8.89318C8.95698 8.8298 9.0077 8.75439 9.04232 8.6713C9.07693 8.58822 9.09475 8.4991 9.09475 8.40909C9.09475 8.31908 9.07693 8.22997 9.04232 8.14688C9.0077 8.0638 8.95698 7.98839 8.89307 7.925L5.96126 5Z"
                  />
                }
              />
            }
          ></Header>
          <div className={styles.contentWrapper}>
            <MainInfo />

            {/*  ------BIG PILLS------  */}
            <div className={styles.bigPills}>
              <SkillsCard skillLevel={skillLevel}></SkillsCard>
              <SlotsCard slots={attendanceMax} attending={0}></SlotsCard>
            </div>

            <div
              className={styles.divider}
              style={{
                borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              }}
            ></div>

            <div
              className={styles.divider}
              style={{
                borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              }}
            ></div>

            {/*  ------ORGANIZER------  */}
            <OrganizerCard></OrganizerCard>

            <div
              className={styles.divider}
              style={{
                borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              }}
            ></div>

            {/*  ------PARTICIPATING PREVIEW------  */}
            <ParticipantsPreviewCard users={[]}></ParticipantsPreviewCard>
            <div
              className={styles.divider}
              style={{
                borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              }}
            ></div>

            {/*  ------DESCRIPTION PREVIEW------  */}
            <div className={styles.description}>
              <p style={{ color: colors.text[80] }} className="highlight-1">
                Description
              </p>
              <p style={{ color: colors.text[60] }}>
                {description}
                {description.length > 100 && <span style={{ color: colors.primary[100] }}> Read more</span>}
              </p>
            </div>

            <div
              className={styles.divider}
              style={{
                borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              }}
            ></div>

            <UpdatesPreviewCard updates={[]} organizerId={''}></UpdatesPreviewCard>

            <div
              className={styles.divider}
              style={{
                borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              }}
            ></div>

            <StaticMap longitude={13} latitude={52} zoom={12}></StaticMap>
          </div>
        </>
      )}
    </div>
  );
};
export default OrganizePage;
