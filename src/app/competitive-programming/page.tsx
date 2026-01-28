import CompetitiveProgramming from '@/components/cp/CompetitiveProgramming';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/competitive-programming'),
  title: 'Competitive Programming - Siddartha Karri',
  description: 'My competitive programming stats and profile.',
};

export default function CPPage() {
  return <CompetitiveProgramming />;
}
