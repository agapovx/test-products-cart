import React, { Suspense, StrictMode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ScrollToTop } from 'common/utils/scroll-to-top';
import { lazy } from 'common/utils/lazy';

import { PageHeader } from 'app/ui/components/navigation/header';
import { ErrorCatcher } from 'app/ui/components/fragments/error-catcher';

import { GlobalStyle } from 'app/ui/styles/global-styles';
import { Layout } from 'app/ui/styles/main-layout-styles';

const LazyNoMatch = lazy(() => import('app/ui/components/no-match'), 'NoMatch');

export const Page = () => {
  return (
    <StrictMode>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Layout>
          <PageHeader />
          <ErrorCatcher>
            <Suspense fallback="Loading...">
              <Switch>


                <Route>
                  <LazyNoMatch />
                </Route>
              </Switch>
            </Suspense>
          </ErrorCatcher>
        </Layout>
      </Router>
    </StrictMode>
  )
};
