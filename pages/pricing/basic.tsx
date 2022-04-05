import { MainLayout } from "../../components/layouts/MainLayout";

const HomePage = () => {
    return (
        <MainLayout>
            <h1 className={'title'}>
                Basic Plan
            </h1>
            <h1 className={'title'}>U$S 98</h1>
            <p className={'description'}>
                <code className={'code'}>pages/pricing/basic.js</code>
            </p>
        </MainLayout>
    )
}

export default HomePage;
