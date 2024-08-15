import { Navigate } from 'react-router-dom';

interface IProps {
  isPrivate: boolean;
  profiles: string[];
  path: string;
  children: JSX.Element;
}

export default function ConfigRoute({ isPrivate, children }: IProps) {
  const user = JSON.parse(localStorage.getItem('@user') || 'null');

  if (isPrivate) {
    if (!user) {
      return <Navigate to="/" replace />;
    }

    return children;
  }

  return children;
}
