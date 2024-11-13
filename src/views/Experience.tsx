import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import { motion } from 'framer-motion';

interface TimelineImage {
  url: string;
  alt?: string;
}

interface TimelineItem {
  imgs: TimelineImage[];
  timePeriod: string;
  roleTitle: string;
  orgName: string;
}

const TimelineCard = ({
  index,
  role,
}: {
  index: number;
  role: TimelineItem;
}) => {
  const { imgs, timePeriod, roleTitle, orgName } = role;
  const xAxisOffset = index % 2 != 0 ? 'justify-end' : 'justify-start';

  return (
    <div className={`flex px-2 md:px-0 ${xAxisOffset}`}>
      <div
        className={`grid grid-cols-3 md:grid-cols-6 gap-4 items-center bg-white text-black rounded-full border border-black p-5 px-2 max-w-[90vw] md:min-h-[150px] w-[350px] md:w-[600px]`}
      >
        {
          // displays max two images
          imgs.length > 1 ? (
            <div className="relative pl-8 md:col-span-2 flex flex-col md:flex-row justify-self-center">
              <img
                className="justify-center z-10 rounded-full m-2 p-2 shadow-sm border border-black bg-white w-[40px] md:w-[50px]"
                src={imgs[0].url}
                alt={imgs[0].alt ?? ''}
                width={50}
              />
              <img
                className="absolute right-10 rounded-full m-2 shadow-sm border border-black bg-white w-[35px] md:w-[45px]"
                src={imgs[1].url}
                alt={imgs[1].alt ?? ''}
                width={45}
              />
            </div>
          ) : (
            <div className="flex px-4 content-center justify-start">
              <img
                className="rounded-full shadow-sm border border-black bg-white w-[45px] md:w-[70px]"
                src={imgs[0].url}
                alt={imgs[0].alt ?? ''}
                width={70}
                height={70}
              />
            </div>
          )
        }

        <div className="col-span-2 md:col-span-3">
          <label className="text-sm md:text-md">{timePeriod}</label>
          <h2 className="tracking-normal text-sm md:text-lg">{roleTitle}</h2>
          <h3 className="tracking-normal font-medium text-sm md:text-lg">
            {orgName}
          </h3>
        </div>
      </div>
    </div>
  );
};

function Experience() {
  const items: TimelineItem[] = [
    {
      imgs: [{ url: '/assets/images/gwx.ico', alt: 'Greenworkx Logo' }],
      timePeriod: '2023 - 2024',
      roleTitle: 'Product Engineer',
      orgName: 'Greenworkx',
    },
    {
      imgs: [
        { url: '/assets/images/starlingbank.svg', alt: 'Starling Bank Logo' },
      ],
      timePeriod: '2021 - 2023',
      roleTitle: 'Software Engineer',
      orgName: 'Starling Bank',
    },
    {
      imgs: [
        { url: 'assets/images/multiverse.svg', alt: '' },
        { url: '/assets/images/starlingbank.svg', alt: '' },
      ],
      timePeriod: '2019 - 2021',
      roleTitle: 'Software Engineeering Apprenticeship',
      orgName: 'Multiverse x Starling Bank',
    },
    {
      imgs: [
        {
          url: '/assets/images/ideal_networks_ltd_logo.jpeg',
          alt: 'Ideal Networks Logo',
        },
      ],
      timePeriod: '2019 - 2019',
      roleTitle: 'Summer Placement: Junior Database Analyst ',
      orgName: 'Ideal',
    },
    {
      imgs: [
        { url: '/assets/images/esteem_charity_logo.jpeg', alt: 'Esteem Logo' },
      ],
      timePeriod: '2018 - 2019',
      roleTitle: 'Operations and Web Design Volunteer',
      orgName: 'ESTEEM',
    },
  ];

  return (
    <ContentSectionContainer
      id={SECTION_REFS.EXPERIENCE}
      bgColor="white"
      textColor="black"
    >
      <div className="flex flex-col w-full h-fit">
        <motion.h1
          initial={{ opacity: 0, y: '-50%' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            ease: 'easeInOut',
          }}
          exit={{ opacity: 0 }}
          className="z-0 py-20 text-[3rem] break-words md:text-[5rem] font-climate-crisis justify-start text-left md:pl-[20vw]"
        >
          Experience
        </motion.h1>
        <div className="relative flex flex-col items-center h-fit">
          <div className="z-10 flex flex-col gap-10 px-2 md:w-[60vw] md:max-w-[900px] py-8 my-10 md:my-24">
            {items.map((role, index) => {
              return <TimelineCard index={index} role={role} />;
            })}
          </div>
          <svg
            className="absolute top-0 h-[900px] md:h-[1200px]"
            width="29"
            height="1700"
            viewBox="0 0 29 1153"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="15.5" y1="24.0009" x2="13.5" y2="1140" stroke="black" />
            <circle cx="13.5" cy="1139.5" r="13.5" fill="black" />
            <circle cx="15.5" cy="13.5" r="13.5" fill="black" />
          </svg>
          <h3 className="absolute bottom-[-30px] md:bottom-[-40px]">Present</h3>
        </div>
      </div>
    </ContentSectionContainer>
  );
}

export default Experience;
