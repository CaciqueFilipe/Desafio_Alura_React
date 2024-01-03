import styled from 'styled-components';

export const AssinaturaNewsletter = styled.div`
    background-color: #ffe29a;
    padding: 16px;
    margin-top: 16px;
    position: relative;
    @media (min-width: 920px) {
          background-color: transparent;
          margin-top: 155px;
        .assinaturaNewsletter:after {
            content: "";
            display: block;
            width: 787px;
            height: 975px;
            background-image: url('/images/hero-image.png');
            position: absolute;
            --baseDistance: -287px;
            top: calc(var(--baseDistance) + 50px);
            right: 0;
            z-index: -1;
            pointer-events: none;
        }
`