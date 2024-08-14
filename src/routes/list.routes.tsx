import { SignUP } from 'pages';
import { IRoutesProps } from 'routes';

export default [
  {
    id: crypto.randomUUID(),
    path: '/administration',
    element: <SignUP />,
    isPrivate: true,
    profiles: ['admin', 'superAdmin'],
  },
] as IRoutesProps[];
