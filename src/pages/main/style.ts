import styled from "@emotion/styled";

const breakpoints = {
    mobile: "480px",
    tablet: "768px",
    pc: "1024px",
};

const Section = styled.section`
    position: relative;
    :after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .bg {
        width: 100%;
        min-height: 100vh;
        object-fit: cover;
    }
    .inner {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        height: 100vh;
        padding: 4%;
        z-index: 10;
        @media (max-width: ${breakpoints.tablet}) {
            align-items: center;
            padding-top: 20vh;
        }
    }
`;
const Title = styled.h1`
    color: white;
    font-size: clamp(4rem, 6vw, 10rem);
    text-transform: uppercase;
    line-height: 1;
    font-weight: 700;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: clamp(2rem, 8vw, 7rem);
        text-align: center;
    }
`;

export { Section, Title };
