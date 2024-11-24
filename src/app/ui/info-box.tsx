import QuestionBox from '@/app/ui/question-box';
import RedirectButton from '@/app/ui/redirect-button';

export default function InfoBox(props: {question: string, text: string, buttonText: string, buttonHref: string}) {
    return (
        <div className='gridbox p-6 rounded-2xl bg-white bg-opacity-85 drop-shadow-lg flex flex-col justify-between w-full md:w-100'>
            <div className='flex justify-center items-center'>
              <QuestionBox text={props.question} />
            </div>
            <p>{props.text}</p>
            <div className='flex justify-center items-center'>
            <RedirectButton text={props.buttonText} href={props.buttonHref}/>
            </div>
          </div>
    );
}