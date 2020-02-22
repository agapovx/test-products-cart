import React, { Suspense, StrictMode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ScrollToTop } from 'common/utils/scroll-to-top';
import { lazy } from 'common/utils/lazy';

import { PageHeader } from 'app/ui/components/navigation/header';
import { ErrorCatcher } from 'app/ui/components/fragments/error-catcher';

import { GlobalStyle } from 'app/ui/styles/global-styles';
import { Layout } from 'app/ui/styles/main-layout-styles';
import { ProductsCouponsCtxProvider, CartCtxProvider } from 'app/stores/data-provider';

const LazyNoMatch = lazy(() => import('app/ui/components/no-match'), 'NoMatch');
const LazyProductsList = lazy(() => import('app/ui/components/products/products-list'), 'ProductsList')

export const Page = () => {
  return (
    <StrictMode>
      <GlobalStyle />
      <ProductsCouponsCtxProvider>
        <CartCtxProvider>
          <Router>
            <ScrollToTop />
            <Layout>
              <PageHeader />
              <ErrorCatcher>
                <Suspense fallback="Loading...">
                  <Switch>

                    <Route path="/" exact>
                      <LazyProductsList />
                    </Route>



                    <Route>
                      <LazyNoMatch />
                    </Route>
                  </Switch>
                </Suspense>
              </ErrorCatcher>
            </Layout>
          </Router>
        </CartCtxProvider>
      </ProductsCouponsCtxProvider>
    </StrictMode>
  )
};
