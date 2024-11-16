export default function QuestionBox( 
    { text }: { text: string } ){
    return (
        <p className='question-box flex justify-center items-center'>{text}</p>
    );
}