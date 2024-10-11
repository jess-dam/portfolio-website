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
      <div className={`grid grid-cols-4 items-center bg-white text-black rounded-full p-5 w-[350px] md:w-[600px]`}>
          {
            // displays max two images
            imgs.length > 1 ? 
            <div className='flex flex-col col-span-1 p-5 items-center'> 
              <img className="rounded-full p-2" src={imgs[0].url} alt={imgs[0].alt} width={70} height={70}/> 
              <img className="rounded-full p-2" src={imgs[1].url} alt={imgs[1].alt} width={70} height={70}/>
            </div> :
            <img className="rounded-full border" src={imgs[0].url} alt={imgs[0].alt} width={90} height={90}/>
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
      imgs: [{ url: 'src/media/logos/esteem_charity_logo.jpeg', alt: 'Esteem logo' }],
      timePeriod: '2018 - 2019',
      roleTitle: 'Operations and Web Design Volunteer',
      orgName: 'ESTEEM',
    },
    {
      imgs: [{ url: 'src/media/logos/ideal_networks_ltd_logo.jpeg', alt: 'Ideal logo' }],
      timePeriod: '2019 - 2019',
      roleTitle: 'Summer Placement: Junior Database Analyst ',
      orgName: 'Ideal',
    },
    {
      imgs: [{ url: 'src/media/logos/starlingbank_logo.jpeg', alt: 'Starling Bank logo' }, { url: 'src/media/logos/multiverse_logo.jpeg', alt: 'Multiverse logo' }],
      timePeriod: '2019 - 2021',
      roleTitle: 'Software Engineeering Apprenticeship',
      orgName: 'Multiverse x Starling Bank',
    },
    {
      imgs: [{ url: 'src/media/logos/starlingbank_logo.jpeg', alt: 'Starling Bank logo' }],
      timePeriod: '2021 - 2023',
      roleTitle: 'Software Engineer',
      orgName: 'Starling Bank',
    },
    {
      imgs: [{ url: 'src/media/logos/gwx.jpeg', alt: 'Greenworkx logo' }],
      timePeriod: '2023 - 2024',
      roleTitle: 'Product Engineer',
      orgName: 'Greenworkx',
    },
  ];

  return (
    <SectionContainer bgColor="black" textColor="white">
      <h1 className="absolute z-0 py-20 md:pb-20 text-[2.5rem] md:text-[5rem] text-secondary font-climate-crisis">
        Experience
      </h1>
      <div className='z-10 flex flex-col gap-14 max-w-[1100px] md:min-w-[60vw] py-8 mt-40 md:mt-30 min-h-screen'>
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
