import * as C from "./style";

interface ExperienceLevelProps {
  title: string;
  description: string;
  isSelected?: boolean | undefined;
  onClick: () => void;
}

export const ExperienceLevel = ({
  description,
  title,
  isSelected,
  onClick,
}: ExperienceLevelProps) => {
  return (
    <C.Container onClick={onClick}>
      <h1>{title}</h1>
      <p>{description}</p>
    </C.Container>
  );
};
