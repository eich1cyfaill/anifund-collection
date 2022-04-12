

export const Main = ({children}: any): any => {
    return (
        <div>
                <header>
                    <h1>header</h1>
                </header>
                <main>
                    { children }
                </main>
        </div>
    );
};
