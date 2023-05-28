import wyniki1 from '@/images/wyniki1.png';
import wyniki2 from '@/images/wyniki2.png';
import wyniki3 from '@/images/wyniki3.png';



export default function Wyniki() {
    return (
        <div className="text-center">
          <h2 className="font-bold mb-10 text-4xl tracking-tight text-gray-900 sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl">Wyniki</h2>
         <div> 
             <div className='text-2xl mt-6 font-bold'>
               XXIX Ogólnopolska Olimpiada Młodzieży Turniej Par Na Maxy Dziewcząt
             </div>
             <div className="p-6">
               <img src={wyniki1} alt="olimpiada"  className="mx-auto shadow-2xl shadow-slate-400"/>
             </div>
              <div className="text-lime-800 mb-8">
              <a href="https://zzbs.pl/wyniki/2023/oom/dmax/">Szczegóły tutaj</a>
             </div>
         </div>
              <div> 
             <div className='text-2xl mt-6 font-bold'>
               Turniej o Puchar Wójta Gminy Bielsk
             </div>
             <div className="p-6">
               <img src={wyniki2} alt="olimpiada"  className="mx-auto  shadow-2xl shadow-slate-400"/>
             </div>
              <div className="text-lime-800 mb-8">
              <a href="http://www.brydz.ciechanow24.pl/turnieje/230506/">Szczegóły tutaj</a>
             </div>
         </div>
              <div> 
             <div className='text-2xl mt-6 font-bold'>
               OTP** Memoriał Profesora Jana Janowskiego, MAXy
             </div>
             <div className="p-6">
               <img src={wyniki3} alt="olimpiada"  className="mx-auto shadow-2xl shadow-slate-400"/>
             </div>
              <div className="text-lime-800 mb-8">
              <a href="https://mzbs.pl/files/2021/wyniki/zs/23/hutnik/rektor/">Szczegóły tutaj</a>
             </div>
         </div>
       
        </div>
    )
}