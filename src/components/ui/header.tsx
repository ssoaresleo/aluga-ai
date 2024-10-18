import logo from "../../assets/logo.svg";
import { Avatar, AvatarFallback } from "./avatar";

export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between container mx-auto">
        <img src={logo} alt="Aluga.ai" />

        <div className="flex items-center gap-3">
          <div className="flex items-end justify-end gap-1 flex-col">
            <h3 className="font-medium text-sm">John Doe</h3>
            <span className="text-zinc-400 text-xs">john@aluga.ai</span>
          </div>
          <Avatar>
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
