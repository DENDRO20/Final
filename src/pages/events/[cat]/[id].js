import Image from 'next/image';
import EventCard from '../eventCard';
const Page = ({ data }) => {
    return (
        <EventCard data={data}/>
    )
}

export default Page;

export async function getStaticPaths(){
    const {allEvents} = await import('/data/data.json');

    const allPaths = allEvents.map((path)=>{
    return {
        params:{
            cat: path.city,
            id:path.id,
        },
    };
});

    return {
        paths: allPaths,
        fallback:false,
    };
}

export async function getStaticProps(context){
    console.log(context);
    const { allEvents } = await import('/data/data.json');
    const id = context.params.id;
    const data = allEvents.find((ev) => (
        id === ev.id
    ));
    return{
        props:{data: data}
    }
}