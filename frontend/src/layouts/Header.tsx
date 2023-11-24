import { FC } from "react";

export const Header: FC<any> = ({ children }) => {
  return (
    <div className="bg-zinc-700 w-full p-6 flex items-center justify-between border border-zinc-800 border-b-zinc-500">
      {children}
    </div>
  );
};
