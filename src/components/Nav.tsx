import Logbutton from "../ui/Logbutton";


export default function Nav() {
    return <div className="w-full p-3 md:py-3 md:px-20 shadow-md flex justify-between">
        this is a nav

        <div className="flex justify-between items-center gap-5">
            <Logbutton text={"Search"} styles={"isSearch"} />
            <Logbutton text={"Login"} styles={"isLogin"} />
            <Logbutton text={"Candidate Sign-up"} styles={"isRegister"} />
            <Logbutton text={"Employer Sign-up"} styles={"isRegister"} />
        </div>
    </div>
}