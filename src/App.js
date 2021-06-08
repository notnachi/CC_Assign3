import {Content} from './components/layouts/Content'
import {SubjectsProvider, SelectedSubjectProvider } from './context/index'

export const App = () => {
  return (

    <SelectedSubjectProvider>
      <SubjectsProvider>
        <div className="App">
          <Content />
        </div>
      </SubjectsProvider>
    </SelectedSubjectProvider>


    
  );
}
