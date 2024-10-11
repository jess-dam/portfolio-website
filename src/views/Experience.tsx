import SectionContainer from '../components/SectionContainer';


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
      <div className={`grid grid-cols-4 gap-4 items-center bg-white text-black rounded-full p-5 md:min-h-[210px] w-[350px] md:w-[600px]`}>
          {
            // displays max two images
            imgs.length > 1 ? 
            <div className='flex flex-col col-span-1 p-5 items-center'> 
              <img className="rounded-full m-2 shadow-xl" src={imgs[0].url} alt={imgs[0].alt} width={50} height={50}/> 
              <img className="rounded-full m-2 shadow-xl md:p-2" src={imgs[1].url} alt={imgs[1].alt} width={50} height={50}/>
            </div> :
            <img className="rounded-full shadow-xl" src={imgs[0].url} alt={imgs[0].alt} width={70} height={70}/>
          }
          
          <div className="col-span-3">
            <label className="text-lg">{timePeriod}</label>
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
      imgs: [{ url: 'assets/logos/gwx.ico' }],
      timePeriod: '2023 - 2024',
      roleTitle: 'Product Engineer',
      orgName: 'Greenworkx',
    },
    {
      imgs: [{ url: 'assets/logos/starlingbank.svg' }],
      timePeriod: '2021 - 2023',
      roleTitle: 'Software Engineer',
      orgName: 'Starling Bank',
    },
    {
      imgs: [{ url: 'assets/logos/starlingbank.svg' }, { url: 'public/assets/logos/multiverse.svg' }],
      timePeriod: '2019 - 2021',
      roleTitle: 'Software Engineeering Apprenticeship',
      orgName: 'Multiverse x Starling Bank',
    },
    {
      imgs: [{ url: 'assets/logos/ideal_networks_ltd_logo.jpeg' }],
      timePeriod: '2019 - 2019',
      roleTitle: 'Summer Placement: Junior Database Analyst ',
      orgName: 'Ideal',
    },
    {
      imgs: [{ url: 'assets/logos/esteem_charity_logo.jpeg' }],
      timePeriod: '2018 - 2019',
      roleTitle: 'Operations and Web Design Volunteer',
      orgName: 'ESTEEM',
    },
  ];

  return (
    <SectionContainer bgColor="black" textColor="white">
      <h1 className="absolute justify-self-start z-0 py-20 md:pb-20 text-[2.5rem] md:text-[5rem] text-secondary font-climate-crisis">
        Experience
      </h1>
      <div className='z-10 flex flex-col gap-14 max-w-[1100px] md:min-w-[60vw] py-8 mt-40 md:mt-60 min-h-screen'>
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
