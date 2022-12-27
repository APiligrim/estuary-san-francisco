// NOTE(jim)
// To use file system routing, you must have `page.tsx`.
import { headers } from 'next/headers';

import '@root/global.scss';

import EventPage from '@root/components/EventPage';

export default async function Page(props) {
  const currentHeaders = headers();

  return <EventPage />;
}
