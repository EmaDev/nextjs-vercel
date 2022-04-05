import { MainLayout } from '../components/layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <h1 className={'title'}>
          Home
        </h1>
        <p className={'description'}>
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLayout>
  )
}

export default HomePage;
