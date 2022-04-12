import Header from "../pages/header";


export const Main = ({children}: any): any => {
    return (
        <div>
                <Header />
                <main>
                    { children }
                </main>
        </div>
    );
};
