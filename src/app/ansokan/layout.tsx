export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col'>
            <main className='flex-grow'>
                {children}
            </main>
        </div>
    );
}