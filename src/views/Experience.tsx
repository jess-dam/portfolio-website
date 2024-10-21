import SectionContainer from '../components/SectionContainer';
import { SECTION_REFS } from '../pageRefs';


interface TimelineImage {
  url: string,
  alt?: string,
}

interface TimelineItem {
  imgs: TimelineImage[];
  timePeriod: string;
  roleTitle: string;
  orgName: string;
}

const TimelineCard = ({ index, role }: { index: number, role: TimelineItem} ) => {
  const { imgs, timePeriod, roleTitle, orgName } = role;
  const xAxisOffset = ((index % 2) != 0) ? 'justify-end' : 'justify-start';

  return (
    <div className={`w-full flex px-2 md:px-0 ${xAxisOffset}`}>
      <div className={`grid grid-cols-3 md:grid-cols-6 gap-4 items-center bg-black text-white rounded-full border border-white p-5 md:min-h-[150px] w-[350px] md:w-[600px]`}>
          {
            // displays max two images
            imgs.length > 1 ? 
            <div className='md:col-span-2 flex flex-col md:flex-row p-5 content-center justify-start'> 
              <img className="rounded-full m-2 shadow-xl bg-white" src={imgs[0].url} alt={imgs[0].alt} width={40} height={40}/> 
              <img className="rounded-full m-2 shadow-xl md:p-2 bg-white" src={imgs[1].url} alt={imgs[1].alt} width={40} height={40}/>
            </div> :
            <div className='flex px-4 content-center justify-start'>
              <img className="rounded-full shadow-xl bg-white" src={imgs[0].url} alt={imgs[0].alt} width={70} height={70}/>
            </div>
          }
          
          <div className="col-span-2 md:col-span-3">
            <label className="text-sm">{timePeriod}</label>
            <h2 className="tracking-normal text-sm">
              {roleTitle}
            </h2>
            <h3 className="tracking-normal font-medium text-sm">
              {orgName}
            </h3>
          </div>
        </div>
    </div>
    
  );
}

function Experience() {
  const items: TimelineItem[] = [
    {
      imgs: [{ url: '/assets/images/gwx.ico' }],
      timePeriod: '2023 - 2024',
      roleTitle: 'Product Engineer',
      orgName: 'Greenworkx',
    },
    {
      imgs: [{ url: '/assets/images/starlingbank.svg' }],
      timePeriod: '2021 - 2023',
      roleTitle: 'Software Engineer',
      orgName: 'Starling Bank',
    },
    {
      imgs: [{ url: '/assets/images/starlingbank.svg' }, { url: 'assets/images/multiverse.svg' }],
      timePeriod: '2019 - 2021',
      roleTitle: 'Software Engineeering Apprenticeship',
      orgName: 'Multiverse x Starling Bank',
    },
    {
      imgs: [{ url: '/assets/images/ideal_networks_ltd_logo.jpeg' }],
      timePeriod: '2019 - 2019',
      roleTitle: 'Summer Placement: Junior Database Analyst ',
      orgName: 'Ideal',
    },
    {
      imgs: [{ url: '/assets/images/esteem_charity_logo.jpeg' }],
      timePeriod: '2018 - 2019',
      roleTitle: 'Operations and Web Design Volunteer',
      orgName: 'ESTEEM',
    },
  ];

  return (
    <SectionContainer id={SECTION_REFS.EXPERIENCE} bgColor="black" textColor="white">
      <h1 className="absolute justify-self-start z-0 py-20 md:pb-20 text-[2.5rem] md:text-[5rem] text-secondary font-climate-crisis">
        Experience
      </h1>
      <div className='z-10 flex flex-col gap-10 md:w-[60vw] md:max-w-[900px] py-8 mt-40 md:mt-60'>
        {
          items.map((role, index) => {
            return <TimelineCard index={index} role={role}  />
          })
        }
      </div>
    </SectionContainer>
  );
}

export default Experience;
