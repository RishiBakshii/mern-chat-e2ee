import { ChatList } from "./ChatList"
import { IChatWithUnreadMessages } from "../../interfaces/chat"
import { SearchInput } from "../ui/SearchInput"

type PropTypes = {
    chats:Array<IChatWithUnreadMessages>
}

export const ChatListWithSearch = ({chats}:PropTypes) => {
  return (
    <div className="flex flex-col gap-y-5">
    <SearchInput/>
    <ChatList chats={chats}/>
    </div>
  )
}
