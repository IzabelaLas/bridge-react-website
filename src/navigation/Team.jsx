import people from '@/images/people.jpg'
import people2 from '@/images/people.jpg'
import people3 from '@/images/people.jpg'
import people4 from '@/images/people.jpg'
import people5 from '@/images/people.jpg'
import people6 from '@/images/people.jpg'
import people7 from '@/images/people.jpg'
import people8 from '@/images/people.jpg'


export default function Team() {

   const pictures = [
  { foto: people, name: 'John, Warsaw' },
  { foto: people2, name: 'Mark, Warsaw' },
  { foto: people3, name: 'Bob, Warsaw' },
  { foto: people4, name: 'Amy, Warsaw' },
  { foto: people5, name: 'John, Warsaw' },
  { foto: people6, name: 'Mark, Warsaw' },
  { foto: people7, name: 'Bob, Warsaw' },
  { foto: people8, name: 'Amy, Warsaw' },
];

    return (
      <div className="text-center">
        <h2 className="font-bold text-4xl tracking-tight text-gray-900 sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl">Team members</h2>
        <div className="grid grid-cols-2 gap-1 m-1"> 

        {pictures.map((picture, index)  => (
          <div key={index}>
               <img src={picture.foto} alt="team member" />
               <p>{picture.name}</p>
          </div>
        ))}
        </div>
        </div>
    )
}