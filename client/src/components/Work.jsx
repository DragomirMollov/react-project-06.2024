import WorkItem from "./WorkItem";

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 Years',
        details:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor assumenda ullam impedit necessitatibus eum sit ea et hic praesentium dicta aperiam voluptates asperiores, consequuntur quisquam distinctio corporis blanditiis eligendi!',
    },
    {
        year: 2017,
        title: 'Google',
        duration: '3 Years',
        details:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor assumenda ullam impedit necessitatibus eum sit ea et hic praesentium dicta aperiam voluptates asperiores, consequuntur quisquam distinctio corporis blanditiis eligendi!',
    },
    {
        year: 2015,
        title: 'Amazon',
        duration: '2 Years',
        details:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor assumenda ullam impedit necessitatibus eum sit ea et hic praesentium dicta aperiam voluptates asperiores, consequuntur quisquam distinctio corporis blanditiis eligendi!',
    },
    {
        year: 2012,
        title: 'Facebook',
        duration: '3 Years',
        details:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor assumenda ullam impedit necessitatibus eum sit ea et hic praesentium dicta aperiam voluptates asperiores, consequuntur quisquam distinctio corporis blanditiis eligendi!',
    },
];
export default function Work() {
   return (
       <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
        {data.map((item, id) => (
            <WorkItem 
                key={id} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details} 
            />
        ))}
       </div>
   );
};