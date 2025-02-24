interface ButtonProperty {
    text: String
    styles: "isLogin" | "isRegister" | "isSearch"
}


export default function Logbutton({ text, styles }: ButtonProperty) {

    let style = {
        "isRegister": "bg-sky-500 text-white",
        "isLogin": "border-sky-500 text-sky-500",
        "isSearch": "border-none text-black bg-white font-medium"
    }

    return (
        <div>
            <button className={`rounded border ${style[styles]}  font-bold px-6 py-1`}>
                {styles === "isSearch" && <i className="ri-search-line mr-4"></i>}
                {text}
            </button>
        </div>
    )
}