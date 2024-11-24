import Handshake from '/public/images/handshake.webp';
import InfoBox from '@/app/ui/info-box';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className='fixed z-0 opacity-10 blur self-center'><Image src={Handshake} alt={'Bakgrundsbild som föreställer en handskakning'} width={16384}></Image></div>

      <div className='flex flex-col items-center mt-32 md:mt-48 text-center'>
        <h1 className='title mb-8'><span className='font-normal'>Detta är</span> SponsorDirekt UF</h1>
        <div className='textbox-grid grid grid-rows-3 gap-12 mb-12 md:grid-rows-1 md:grid-cols-3'>
          <InfoBox question='Vad gör SponsorDirekt UF?' text='SponsorDirekt UF:s fokus är att underlätta och effektivisera processen för verksamheter och sponsorer att hitta rätt samarbeten, och därmed skapa mervärde för alla parter inblandade.' buttonText='Läs mer om oss!' buttonHref='/om-oss'/>

          <InfoBox question='Hur söker jag sponsor?' text='Om du behöver sponsorer för din verksamhet, fyll i vårt formulär och bli en del av ett nätverk av potentiella sponsorer – det tar bara ~5 minuter! Vi hjälper dig att hitta en bra matchning snabbt och enkelt.' buttonText='Sök sponsor' buttonHref='/ansokan/sok-sponsor'/>
          
          <InfoBox question='Hur blir jag en sponsor?' text='Vill ditt företag nå nya målgrupper? Fyll då i vårt formulär och anslut dig till vårt nätverk av verksamheter som söker sponsorer! Det tar bara ~5 minuter att komma igång och vi hjälper dig hitta rätt samarbeten för ditt varumärke.' buttonText='Bli sponsor' buttonHref='/ansokan/bli-sponsor'/>
        </div>
      </div>
    </div>
  );
}