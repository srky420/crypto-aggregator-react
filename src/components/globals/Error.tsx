import { useRouteError } from "react-router-dom"


export const Error = () => {

    const error: any = useRouteError();
    console.log(error);

    return (
        <div className="flex flex-col justify-center items-center text-center min-h-screen">
            <h2 className="font-rubik font-bold text-4xl">An Error Occured</h2>
            <p className="italic text-xl">{ error.statusText || error.message }</p>
        </div>
    )
}