import { MainLayout } from '../components/layouts/MainLayout';

const AboutPage = () => {
  return (
    <MainLayout>
      <h1 className={'title'}>
        About
      </h1>
      <p className={'description'}>
        <code className={'code'}>pages/about.js</code>
      </p>
    </MainLayout>
  )
}

export default AboutPage;
