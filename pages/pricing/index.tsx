import Link from 'next/link';
import { MainLayout } from "../../components/layouts/MainLayout";

const HomePage = () => {
    return (
        <MainLayout>
            <h1 className={'title'}>
                Pricing
            </h1>

            <div className={'liksPricing'}>
            <Link href="/pricing/basic">Basic Plan</Link>
            <Link href="/pricing/full">Full Plan</Link>
            </div>
            <p className={'description'}>
                <code className={'code'}>pages/pricing/index.js</code>
            </p>
        </MainLayout>
    )
}

export default HomePage;
