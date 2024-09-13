import { MouseEventHandler } from 'react';

export const RemoveIcon = ({
  onClick,
}: {
  onClick: MouseEventHandler<SVGSVGElement>;
}) => (
  <svg
    onClick={onClick}
    width="25px"
    height="25px"
    viewBox="0 0 24 24"
    fill="#fc6d3e"
    xmlns="http://www.w3.org/2000/svg"
    className="transition hover:scale-110"
  >
    <path
      fill="#fc6d3e"
      d="M9.525 13.765a.5.5 0 0 0 .71.71c.59-.59 1.175-1.18 1.765-1.76l1.765 1.76a.5.5 0 0 0 .71-.71c-.59-.58-1.18-1.175-1.76-1.765c.41-.42.82-.825 1.23-1.235c.18-.18.35-.36.53-.53a.5.5 0 0 0-.71-.71L12 11.293l-1.765-1.768a.5.5 0 0 0-.71.71L11.293 12Z"
    />
    <path
      fill="#fc6d3e"
      d="M12 21.933A9.933 9.933 0 1 1 21.934 12A9.945 9.945 0 0 1 12 21.933Zm0-18.866A8.933 8.933 0 1 0 20.934 12A8.944 8.944 0 0 0 12 3.067Z"
    />
  </svg>
);
