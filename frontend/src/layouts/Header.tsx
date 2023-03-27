import { FC } from "react";

export const Header: FC<any> = ({ children }) => {
  return (
    <div className="w-full p-6 flex justify-end border border-zinc-800 border-b-zinc-500">
      {children}
    </div>
  );
};
