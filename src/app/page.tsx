import QuestionBox from '@/app/ui/question-box';
import RedirectButton from '@/app/ui/redirect-button';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className='flex flex-col items-center flex-grow mt-72'>
        <h1 className='title mb-8'><span className='font-normal'>Detta är</span> SponsorDirekt <span className='sponsor-blue'>UF</span></h1>
        <div className='grid grid-cols-3 gap-12 mb-12' id="textbox-grid">
          <div className='gridbox p-6 rounded-2xl bg-blue-100 drop-shadow-lg flex flex-col justify-between'>
            <div className='w-100 flex justify-center items-center'>
              <QuestionBox text='Vad gör SponsorDirekt UF?' />
            </div>
            <p>SponsorDirekt UF:s huvudfokus är att underlätta och effektivisera processen för parter att hitta rätt samarbeten, vilket skapar mervärde för alla. </p>
            <div className='w-100 flex justify-center items-center'>
            <RedirectButton text='Läs mer om oss!' href='/om-oss'/>
            </div>
          </div>
          <div className='gridbox p-6 rounded-2xl bg-blue-100 drop-shadow-lg flex flex-col justify-between'>
            <div className='w-100 flex justify-center items-center'>
            <QuestionBox text='Hur söker jag sponsor?' />
            </div>
            <p>Om du behöver sponsorer för din verksamhet, fyll i vårt formulär och bli en del av ett nätverk av potentiella sponsorer – det tar bara ~5 minuter! Vi hjälper dig att hitta en bra matchning snabbt och enkelt.</p>
            <div className='w-100 flex justify-center items-center'>
            <RedirectButton text='Sök sponsor' href='/ansokan/sok-sponsor'/>
            </div>
          </div>
          <div className='gridbox p-6 rounded-2xl bg-blue-100 drop-shadow-lg flex flex-col justify-between'>
            <div className='w-100 flex justify-center items-center'>
            <QuestionBox text='Hur blir jag en sponsor?' />
            </div>
            <p>Vill ditt företag nå nya målgrupper? Fyll då i vårt formulär och anslut dig till vårt nätverk av verksamheter som söker sponsorer! Det tar bara ~5 minuter att komma igång och vi hjälper dig hitta rätt samarbeten för ditt varumärke.</p>
            <div className='w-100 flex justify-center items-center'>
            <RedirectButton text='Bli sponsor' href='/ansokan/bli-sponsor'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}