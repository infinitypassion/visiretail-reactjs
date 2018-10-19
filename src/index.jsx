import React from 'react';
import { render } from 'react-dom';

// Theme Styles
import './_assets/css/animate.css';
import './_assets/css/style.css';
import './_assets/css/responsive.css';
import './_assets/css/hack.css';

// App Component
import { App } from './App';

render(
    <App />,
    document.getElementById('app')
);