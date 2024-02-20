import { notFound } from 'next/navigation';
import PrivacyPolicy from '@/components/legal/PrivacyPolicy';
import Terms from '@/components/legal/Terms';

const LegalPage = ({ params }: { params: { legality: string } }) => {
    const pathname = params.legality;

    if (pathname === 'privacy') {
        return <PrivacyPolicy />;
    } else if (pathname === 'terms') {
        return <Terms />;
    } else {
        return notFound();
    }
};

export default LegalPage;
