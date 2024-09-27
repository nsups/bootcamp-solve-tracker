import { VscBracketError } from "react-icons/vsc";
const ErrorPage = () => {
    return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
        <div className="text-9xl"><VscBracketError /></div>
        <div className="text-center">
          <h1 className="text-6xl my-2">Whoops!</h1>
          <h2 className="text-2xl">{"Something is broken :')"}</h2>
        </div>
    </div>
    )
}

export default ErrorPage;