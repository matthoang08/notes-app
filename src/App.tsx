import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  EuiButton,
  EuiHeader,
  EuiIcon,
  EuiHeaderSection,
  EuiHeaderSectionItem,
} from '@elastic/eui';
import icon from '../assets/icon.svg';
import './App.global.css';
// import '@elastic/eui/dist/eui_theme_light.css';
import { MainContent } from './ui/components/MainContent/MainContent';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <EuiButton type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </EuiButton>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <EuiButton type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </EuiButton>
        </a>
      </div>
    </div>
  );
};

export default function App(): JSX.Element {
  return (
    <>
      <EuiHeader theme="dark">
        <EuiHeaderSection grow>
          <EuiHeaderSectionItem border="none">
            <EuiIcon
              style={{ marginLeft: '10px' }}
              size="xl"
              type="logoWebhook"
            />
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem border="none">test</EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>
      <Router>
        <Switch>
          <Route path="/" component={MainContent} />
        </Switch>
      </Router>
    </>
  );
}
