

export default function Certificat({image}: {image: string}) {
    return (
        <div className="w-96 h-64 rounded-md mr-10">
            <img src={image} alt="" />
        </div>
    )
}