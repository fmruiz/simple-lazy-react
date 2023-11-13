import React, { lazy } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    link: string;
    path: string;
    name: string;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyOne = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyOne" */ '../lazyload/pages/LazyPageOne'
        )
);
const LazyTwo = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyTwo" */ '../lazyload/pages/LazyPageTwo'
        )
);
const LazyThree = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyThree" */ '../lazyload/pages/LazyPageThree'
        )
);

export const routes: Route[] = [
    {
        link: '/lazyone',
        path: 'lazyone',
        name: 'lazy one',
        Component: LazyOne,
    },
    {
        link: '/lazytwo',
        path: 'lazytwo',
        name: 'lazy two',
        Component: LazyTwo,
    },
    {
        link: '/lazythree',
        path: 'lazythree',
        name: 'lazy three',
        Component: LazyThree,
    },
];
