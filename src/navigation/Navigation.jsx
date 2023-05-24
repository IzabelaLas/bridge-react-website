import { useState, useRef } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import bridgeLogo from '@/poker-cards.png'
import Team from '@/navigation/Team'
import Aktualnosci from '@/navigation/Aktualnosci'
import Wydarzenia from '@/navigation/Wydarzenia'
import Wyniki from './Wyniki'

const navigation = [
  { name: 'Aktualności', href: '#aktualnosciTarget', value: 'aktualnosciTargetRef'  },
  { name: 'Team', href: '#teamTarget', value: 'teamTargetRef' },
  { name: 'Wydarzenia', href: '#wydarzeniaTarget', value: 'wydarzeniaTargetRef' },
  { name: 'Wyniki', href: '#wynikiTarget', value: 'wynikiTargetRef' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const aktualnosciTargetRef = useRef(null);
  const teamTargetRef = useRef(null);
  const wydarzeniaTargetRef = useRef(null);
  const wynikiTargetRef = useRef(null);

  const handleClick = (event, value) => {
    event.preventDefault();
    console.log(value);

   const refNames = {'aktualnosciTargetRef': aktualnosciTargetRef,
  'teamTargetRef': teamTargetRef,
  'wydarzeniaTargetRef': wydarzeniaTargetRef,
  'wynikiTargetRef': wynikiTargetRef,
  };

  refNames[value].current.scrollIntoView({ behavior: 'smooth' });
  

};


  return (

    <div>
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 xl:px-8" aria-label="Global">
          <div className="flex lg:flex-1 xl:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Brydz Sieradz</span>
              <img
                className="h-8 w-auto"
                src={bridgeLogo}
                alt="logo z kartami"
              />
            </a>
          </div>
          <div className="flex lg:hidden xl:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 xl:flex xl:gap-x-12">
            {navigation.map(({ name, href, value }) => (
              <a key={name} href={href} onClick={(event) => handleClick(event, value)} className="text-sm font-semibold leading-6 text-gray-900">
                {name} 
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end xl:flex xl:flex-1 xl:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Link <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden xl:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed top-0 inset-y-80 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src={bridgeLogo}
                  alt="Logo z kartami"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Zamknij menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map(({name, href}) => (
                    <a
                      key={name}
                      href={href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[56.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0E9F4C] to-[#00662B] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
              Brydż sportowy w Sieradzu
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Znajdą tu Państwo najważniejsze informacje dotyczące brydża i dokonań naszej drużyny. Zapraszamy serdecznie do zapoznania się z aktualnościami.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#00662B] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(80%+3rem)] aspect-[1155/678] w-[60.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0E9F4C] to-[#00662B] sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
      <div ref={aktualnosciTargetRef} id="aktualnosciTarget">
        <Aktualnosci />
      </div>
     <div ref={teamTargetRef} id="teamTarget" >
      <Team />
     </div>
     <div ref={wydarzeniaTargetRef} id="wydarzeniaTarget">
      <Wydarzenia />
     </div> 
     <div ref={wynikiTargetRef} id="wynikiTarget">
      <Wyniki />
     </div>
    </div>
  )
}