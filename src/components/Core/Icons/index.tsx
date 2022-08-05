import { IoIosMenu } from 'react-icons/io';

export const icons = {
  menu: IoIosMenu,
};

interface IconCoreProps {
  name: keyof typeof icons;
  className?: string;
  size?: string | number;
  color?: string;
}

export default function IconCore({ name, ...props }: IconCoreProps) {
  const IconName = icons[name];
  return <IconName {...props} />;
}
