import Widget from './Widget/Widget';
import Widgetsecond from '../components/Widgetsecond/Widgetsecond';
import WidgetThird from './WidgetThird/WidgetThird';
import WidgetFour from './WidgetFour/WidgetFour';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      Home work- Widget's.
      <Widget />
      <Widgetsecond />
      <WidgetThird />
      <WidgetFour />
    </div>
  );
};
