'use client';

import { usePathname } from 'next/navigation';
import PrivacyPolicy from '../../components/legal/PrivacyPolicy';
import PageWrapper from 'src/components/page-wrapper/PageWrapper';
import Terms from 'src/components/legal/Terms';

const LegalPage = () => {
    const pathname = usePathname();

    return (
        <PageWrapper title={pathname === '/privacy' ? 'Privacy Policy' : 'Terms and Conditions'}>
            {pathname === '/privacy' ? <PrivacyPolicy /> : <Terms />}
        </PageWrapper>
    );
};

export default LegalPage;
