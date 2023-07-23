import styled from 'styled-components'
// import coverImg from 'assets/img/cover_01.jpeg'

/**
 * 有两种方式可以引入图片
 * 1. 使用 import 导入之后, background: url(${coverImg}) center/cover;;
 * 2. 使用 require, background: url(${require('assets/img/cover_01.jpeg')})
 */

export const HomeBannerWapper = styled.div`
    height: 529px;
    background: url(${require('assets/img/cover_01.jpeg')}) center/cover;
`