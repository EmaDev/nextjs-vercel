import { MainLayout } from "../../components/layouts/MainLayout";

const HomePage = () => {
    return (
        <MainLayout>
            <h1 className={'title'}>
                Full Plan
            </h1>
            <h1 className={'title'}>U$S 198</h1>
            <p className={'description'}>
                <code className={'code'}>pages/pricing/full.js</code>
            </p>
        </MainLayout>
    )
}

export default HomePage;
