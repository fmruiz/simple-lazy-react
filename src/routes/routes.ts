import { LazyPageOne, LazyPageTwo, LazyPageThree } from '../lazyload/pages';

interface Route {
    link: string;
    path: string;
    name: string;
    Component: () => JSX.Element;
}

export const routes: Route[] = [
    {
        link: '/lazyone',
        path: 'lazyone',
        name: 'lazy one',
        Component: LazyPageOne,
    },
    {
        link: '/lazytwo',
        path: 'lazytwo',
        name: 'lazy two',
        Component: LazyPageTwo,
    },
    {
        link: '/lazythree',
        path: 'lazythree',
        name: 'lazy three',
        Component: LazyPageThree,
    },
];
