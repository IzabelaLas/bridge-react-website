import PhotoGallery from '@/navigation/PhotoGallery.jsx'
export default function Wydarzenia() {
    return (
        <div className="m-2 p-3 text-center">
          <h2 className="font-bold text-4xl tracking-tight mb-8 text-gray-900 sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl">Galeria</h2>
          <div className="">
            <div className="text-4xl">
            OTP** Turniej Gryfa Kociewskiego
            </div>
            <div className="">
           <PhotoGallery />
            </div>
       
          </div>
        </div>
    )
}