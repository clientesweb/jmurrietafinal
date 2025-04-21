import Link from "next/link"
import { Phone } from "lucide-react"

export function ChatBubbles() {
  return (
    <div className="chat-bubbles">
      <ul className="chat-bubbles__list">
        <li className="chat-bubbles__list-item">
          <Link href="https://wa.me/5493515371671" target="_blank">
            <div className="chat__bubble chat__bubble--whatsapp">
              <Phone className="h-5 w-5" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
