import SectionContainer from '../components/SectionContainer';


interface TimelineImage {
  url: string,
  alt: string,
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
      <div className={`grid grid-cols-4 bg-white text-black rounded-full p-5 w-[350px] md:w-[600px]`}>
          {
            imgs.length > 1 ? 
            <div className='col-span-1 p-5'>
              <img className="rounded-full" src={imgs[0].url} alt={imgs[0].alt} width={18} height={18}/> ? 
              <img className="rounded-full p-5" src={imgs[1].url} alt={imgs[1].alt} width={18} height={18}/>
            </div> :
            <img className="rounded-full" src={imgs[0].url} alt={imgs[0].alt} width={40} height={40}/>
          }
          
          <div className="col-span-3">
            <p className="text-lg">{timePeriod}</p>
            <h2 className="tracking-normal">
              {roleTitle}
            </h2>
            <h3 className="tracking-normal font-medium">
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
      imgs: [{ url: '', alt: 'Esteem logo' }],
      timePeriod: '2018 - 2019',
      roleTitle: 'Operations and Web Design Volunteer',
      orgName: 'ESTEEM',
    },
    {
      imgs: [{ url: '', alt: 'Ideal logo' }],
      timePeriod: '2019 - 2019',
      roleTitle: 'Summer Placement: Junior Database Analyst ',
      orgName: 'Ideal',
    },
    {
      imgs: [{ url: '', alt: 'Starling Bank logo' }, { url: '', alt: 'Multiverse logo' }],
      timePeriod: '2019 - 2021',
      roleTitle: 'Software Engineeering Apprenticeship',
      orgName: 'Multiverse x Starling Bank',
    },
    {
      imgs: [{ url: '', alt: 'Starling Bank logo' }],
      timePeriod: '2021 - 2023',
      roleTitle: 'Software Engineer',
      orgName: 'Starling Bank',
    },
    {
      imgs: [{ url: '', alt: 'Greenworkx logo' }],
      timePeriod: '2023 - 2024',
      roleTitle: 'Product Engineer',
      orgName: 'Greenworkx',
    },
  ];

  return (
    <SectionContainer bgColor="black" textColor="white">
      <h1 className="absolute z-0 md:right-8 py-20 md:pb-20 text-[2.5rem] md:text-[5rem] text-secondary font-climate-crisis">
        Experience
      </h1>
      <div className='z-10 flex flex-col gap-14 py-8 mt-40 md:mt-20 min-h-screen min-w-[95vw]'>
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
