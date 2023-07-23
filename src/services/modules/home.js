import request from '../request/index'

export function getHomeGoodPriceData() {
    return request.get({
        url: '/home/goodprice'
    })
}