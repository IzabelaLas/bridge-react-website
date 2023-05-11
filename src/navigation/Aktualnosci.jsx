import cardsPicture from '@/images/cardsPicture.jpg'

export default function Aktualnosci() {
    return (
        <div className="text-center">
          <h2 className="font-bold text-4xl tracking-tight text-gray-900 sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl">Aktualności</h2>
          <div className="items-center grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              <div className='m-4 p-2 sm:p-5 md:m-6 md:p-5 lg:p-8 xl:m-10 xl:p-10'>
                <img src={cardsPicture} alt="Zdjęcie kart w ręce kobiety" />
              </div>
              <div className='m-4 p-2 sm:p-5 md:m-6 md:p-5 lg:p-8'>
                <h3 className='text-2xl font-bold mb-2 tracking-tight text-gray-900 sm:text-2xl'>Lorem ipsum dolor sit,</h3>
                <p className='p-2 text-[15px] xs:text-[10px] sm:text-[11px] md:text-sm lg:text-[19px]'> amet consectetur adipisicing elit. Ipsum quasi sunt, voluptates odit vitae laborum veritatis officiis ea, unde ducimus praesentium. Consequatur quo et nesciunt blanditiis corporis sed doloremque fuga! amet consectetur adipisicing elit. Ipsum quasi sunt, voluptates odit vitae laborum veritatis officiis ea, unde ducimus praesentium. Consequatur quo et nesciunt blanditiis corporis sed doloremque fuga! amet consectetur adipisicing elit. Ipsum quasi sunt, voluptates odit vitae laborum veritatis officiis ea, unde ducimus praesentium. Consequatur quo et nesciunt blanditiis corporis sed doloremque fuga! amet consectetur adipisicing elit. Ipsum quasi sunt, voluptates odit vitae laborum veritatis officiis ea, unde ducimus praesentium. Consequatur quo et nesciunt blanditiis corporis sed doloremque fuga! amet consectetur adipisicing elit. Ipsum quasi sunt, voluptates odit vitae laborum veritatis officiis ea, unde ducimus praesentium. Consequatur quo et nesciunt blanditiis corporis sed doloremque fuga!</p>
              </div>
          </div>
        </div>
    )
}