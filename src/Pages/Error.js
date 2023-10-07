import MainNavigation from "../Components/MainNavigation";


const Error = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <h1 style={{textAlign:'center',color:'red'}}>An error occured</h1>
                <p style={{textAlign:'center',color:'red'}}>Couldnt found the page!</p>
            </main>
        </>
    );
}

export default Error;