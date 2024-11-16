import InfoBox from "@/app/ui/info-box";

export default function Page() {
    return (
        <div className="flex flex-col content-center items-center pb-20">
            <div className="h-60"></div>
            <h1 className='title mb-2'>SponsorDirekt UF<span className='font-normal'> tar gärna emot din ansökan!</span></h1>
            <h1 className="title !font-normal !text-3xl mb-16">Vill du bli sponsor eller söka sponsor?</h1>
            <div className="textbox-grid grid grid-cols-2 gap-12 mb-12" id='ansokan-grid'>
                <InfoBox question='Söker du sponsor?' text='Behöver du en sponsor för din verksamhet? Fyll i vårt formulär och bli en del av ett nätverk av potentiella sponsorer här!' buttonText='Sök sponsor' buttonHref='/ansokan/sok-sponsor'/>
                <InfoBox question='Vill du bli sponsor?' text='Vill du bli sponsor till en verksamhet? Fyll i vårt formulär och bli en del av ett nätverk av ivriga verksamheter här!' buttonText='Bli sponsor' buttonHref='/ansokan/bli-sponsor'/>
            </div>
            <p>SponsorDirekt UF ser fram emot att få dig som en del av nätverket!</p>
        </div>
    );
}