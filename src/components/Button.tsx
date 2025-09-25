import { cn } from "../lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <>
      <button
        className={cn(
          "  text-white px-11 py-3.75 rounded-full font-semibold text-[clamp(14px,2vw,20px)] ",
          className
        )}
      >
        {children}
      </button>
    </>
  );
}
