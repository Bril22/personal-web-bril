export interface IconProps {
  className?: string;
  size?: number;
}
export const IconBar3Outline = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={props.size ? props.size : 24}
      height={props.size ? props.size : 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={` ${props.className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
