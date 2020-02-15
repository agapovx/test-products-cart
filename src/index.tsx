import React, { Suspense, StrictMode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { Page } from 'app/ui/components/page';



render(<Page />, document.getElementById('app'));
