import { Leads } from 'pages';
import { IRoutesProps } from 'routes';

export default [
  {
    id: crypto.randomUUID(),
    path: '/leads',
    element: <Leads />,
    isPrivate: true,
  },
] as IRoutesProps[];
