import fetch from 'utils/fetch';
import Vue from 'vue';

export function loginByEmail(usercode, password) {
    // const data = {
    //     usercode,
    //     password
    // };
    var param_act = 'login'
    return fetch({
        url: 'http://172.16.72.250:8085/logon.htm?param_act=login',
        // url: 'http://build.solr.ericdress.com:8080/getProductData?pids=12248858',
        method: 'get',
        params:{param_act, usercode, password}
    });
}

export function logout() {
    return fetch({
        url: '/login/logout',
        method: 'post'
    });
}

export function getInfo(token) {
    return fetch({
        url: '/user/info',
        method: 'get',
        params: { token }
    });
}