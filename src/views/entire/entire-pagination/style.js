import styled from 'styled-components'

export const PaginationWrapper = styled.div`
    margin-top: 30px;
    .pagination-info {
        display: flex;
        flex-direction: column;
        align-items: center;

        .desc {
            margin-top: 16px;
        }
        .MuiPaginationItem-page {
            margin: 0 5px;
        }
        .MuiPaginationItem-page:hover {
            text-decoration: underline;
        }
        .MuiPaginationItem-previousNext svg {
            font-size: 15px;
        }
        
        .MuiPaginationItem-page.Mui-selected {
            background-color: #000000;
            color: #ffffff;
        }
    }
`