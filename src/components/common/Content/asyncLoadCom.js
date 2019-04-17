import React from 'react';
import Loadable from 'react-loadable';
const Loading = () => <div>Loading...</div>;
export const sort = Loadable({
    loader: () => import('../../main/sort/sort'),
   loading: Loading,
   loading:()=>{return null}
});
export const goodfood = Loadable({
    loader: () => import('../../main/goodfood/goodfood'),
   loading: Loading,
   loading:()=>{return null}
});
export const cash = Loadable({
    loader: () => import('../../main/cash/cash'),
   loading: Loading,
   loading:()=>{return null}
});
export const eat = Loadable({
    loader: () => import('../../main/eat/eat'),
   loading: Loading,
   loading:()=>{return null}
});
export const cookie = Loadable({
    loader: () => import('../../main/cookie/cookie'),
   loading: Loading,
   loading:()=>{return null}
});
export const soup = Loadable({
    loader: () => import('../../main/soup/soup'),
   loading: Loading,
   loading:()=>{return null}
});
export const vegetarian = Loadable({
    loader: () => import('../../main/vegetarian/vegetarian'),
   loading: Loading,
   loading:()=>{return null}
});
export const mens = Loadable({
    loader: () => import('../../main/mens/mens'),
   loading: Loading,
   loading:()=>{return null}
});
export const detail = Loadable({
    loader: () => import('../../main/detail/detail'),
   loading: Loading,
   loading:()=>{return null}
});

export const order = Loadable({
    loader: () => import('../../main/user/order'),
   loading: Loading,
   loading:()=>{return null}
});