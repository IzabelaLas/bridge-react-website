import people from '@/images/people.jpg'
import people2 from '@/images/people.jpg'
import people3 from '@/images/people.jpg'
import people4 from '@/images/people.jpg'
import people5 from '@/images/people.jpg'
import people6 from '@/images/people.jpg'


export default function Team() {

   const pictures = [
  { foto: people, name: 'John, Warsaw' },
  { foto: people2, name: 'Mark, Warsaw' },
  { foto: people3, name: 'Bob, Warsaw' },
  { foto: people4, name: 'Amy, Warsaw' },
  { foto: people5, name: 'John, Warsaw' },
  { foto: people6, name: 'Mark, Warsaw' },
];

    return (
      <div className="text-center">
        <h2 className="font-bold text-4xl tracking-tight text-gray-900 sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl">Team</h2>
        <div className="grid grid-cols-3 gap-10 m-[90px]"> 

        {pictures.map((picture, index)  => (
          <div key={index}>
            <div className='overflow-hidden'><img className="rounded-3xl opacity-70 w-full hover:opacity-100 hover:scale-125" src={picture.foto} alt="team member" /></div>
               <div className="text-white font-bold translate-y-[-30px]"><p>{picture.name}</p></div>
          </div>
        ))}
        </div>
        </div>
    )
}