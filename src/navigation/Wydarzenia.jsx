import PhotoGallery from '@/navigation/PhotoGallery.jsx'

export default function Wydarzenia() {
    return (
        <div className="m-2 p-3 text-center">
          <h2 className="font-bold text-4xl tracking-tight text-gray-900 sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl">Wydarzenia</h2>
          <div className="grid grid-cols-2 p-12">
            <div className="grid grid-cols-2 gap-2">
           <PhotoGallery />
            </div>
            <div className="text-2xl pt-40 pl-20">
            OTP** Turniej Gryfa Kociewskiego
            </div>
          </div>
        </div>
    )
}