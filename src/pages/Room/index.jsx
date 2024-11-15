import { useParams } from "react-router-dom"

export default function Room() {
    const { roomId } = useParams()
    return (
        <div>
            <h1>Room {roomId}</h1>
        </div>
    )
}