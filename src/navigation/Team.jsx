import people from '@/images/people.jpg'

export default function Team() {
    return (
      <div className="text-center">
        <h2 className="font-bold text-4xl tracking-tight text-gray-900 sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl">Team members</h2>
        <div className="grid grid-cols-2 gap-1 m-1"> 
          <div>
            <img src={people} alt="team member" />
            <p>John, Warsaw</p>
          </div>
           <div>
            <img src={people} alt="team member" />
            <p>Mark, Warsaw</p>
          </div>
          <div>
            <img src={people} alt="team member" />
            <p>Amy, Warsaw</p>
          </div>
          <div>
            <img src={people} alt="team member" />
            <p>Bob, Warsaw</p>
          </div>
          <div>
            <img src={people} alt="team member" />
            <p>John, Warsaw</p>
          </div>
           <div>
            <img src={people} alt="team member" />
            <p>John, Warsaw</p>
          </div>
          <div>
            <img src={people} alt="team member" />
            <p>John, Warsaw</p>
          </div>
          <div>
            <img src={people} alt="team member" />
            <p>John, Warsaw</p>
          </div>
        </div>
        </div>
    )
}