
import { UiLayout } from '@/components/solana/ui/ui-layout';
import { ClusterProvider } from '@/components/solana/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import './styles.css';

const links: { label: string; path: string }[] = [
    { label: 'Account', path: '/solana/account' },
    { label: 'Clusters', path: '/solana/clusters' },
];

export default function SolanaLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <ClusterProvider>
            <SolanaProvider>
                <UiLayout links={links}>{children}</UiLayout>
            </SolanaProvider>
        </ClusterProvider>
    )
}