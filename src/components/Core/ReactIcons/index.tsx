import * as MaterialDesign from 'react-icons/md';

export const icons = {
  chevronLeft: MaterialDesign.MdChevronLeft,
  chevronRight: MaterialDesign.MdChevronRight,
};

export type IconComponentProps = {
  name: keyof typeof icons;
  className?: string;
  size?: string | number;
  color?: string;
};

export default function IconComponent({ name, ...props }: IconComponentProps) {
  const IconFromName = icons[name];
  return <IconFromName {...props} />;
}
