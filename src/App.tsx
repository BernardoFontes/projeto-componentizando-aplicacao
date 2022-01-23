import './styles/global.scss';
import { Content } from './components/Content';

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Content />
    </div>
  )
}