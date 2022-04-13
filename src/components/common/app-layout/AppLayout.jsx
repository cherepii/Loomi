import Footer from '../footer';
import Navbar from '../navbar';
import { AppWrapper } from './styles';

const AppLayout = ({left, right, isLarge}) => {
  return (
    <>
      <Navbar />
      <AppWrapper isLarge={isLarge}>
        {left}
        {right}
      </AppWrapper>
      <Footer />
    </>
  )
};

export default AppLayout
