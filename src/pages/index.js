import { Inter } from 'next/font/google'
import { HomePage } from '../components/home/home-page';

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(){
    const {events_categories} = await import('/data/data.json');
    
      return {
        props:{
          data: events_categories,
        },
      };
    }

export default function Home({data}) {
  return (
    <main>
        <HomePage data={data}/>
    </main>
  )
}

