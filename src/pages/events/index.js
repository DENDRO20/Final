import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps(){
  const { events_categories } = await import('/data/data.json');
  
    return {
      props:{
        data: events_categories,
      },
    };
  }

const Page = ({data}) => {
    return (
        <div className='events_page'>
          {data.map((ev)=>(
            <Link className='card' href={`/events/${ev.id}`}>
                          <h2>{ev.title}</h2>
                          <Image alt={ev.title} width={380} height={300} src={ev.image}/>
                        </Link>

                ))}
           
        </div>
    )   
}

export default Page;

