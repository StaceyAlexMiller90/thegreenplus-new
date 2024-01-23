import PrivacyPolicy from '@/components/legal/PrivacyPolicy';
import PageWrapper from '@/components/page-wrapper/PageWrapper';
import Terms from '@/components/legal/Terms';

const LegalPage = ({ params }: { params: { legality: string } }) => {
    const pathname = params.legality;

    return (
        <PageWrapper title={pathname === '/privacy' ? 'Privacy Policy' : 'Terms and Conditions'}>
            {pathname === '/privacy' ? <PrivacyPolicy /> : <Terms />}
        </PageWrapper>
    );
};

export default LegalPage;
