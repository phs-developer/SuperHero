import { css, Global } from "@emotion/react";

const GlobalStyles = () => {
    return <Global styles={styles} />;
};

const styles = css`
    * {
        margin: 0;
        padding: 0;
        font: inherit;
        color: inherit;
    }
    *,
    :after,
    :before {
        box-sizing: border-box;
    }
    html,
    body {
        height: 100%;
    }
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }
    button {
        background: none;
        border: 0;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    ul {
        list-style: none;
    }
    body {
        font-family: "Noto Sans KR", "Roboto", sans-serif, system-ui;
    }
`;

export default GlobalStyles;
