import React from 'react';
import TitleContent from './TitleContent';
import HelloMessage from './HelloMessage';
import TodoApp from './TodoApp';
import MarkdownEditor from './MarkdownEditor';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <div>
        <TitleContent title='A Simple Component' content={
          <HelloMessage name="Taylor" />
        } />
      </div>

      <div>
        <TitleContent title='A Stateful Component' content={
          <Timer />
        } />
      </div>

      <div>
        <TitleContent title='An Application' content={
          <TodoApp />
        } />
      </div>

      <div>
        <TitleContent title='A Component Using External Plugins' content={
          <MarkdownEditor />
        } />
      </div>
    </div>
  );
}

export default App;
