import { css } from "@emotion/css";

export const title = css`
  border-bottom: 1px solid var(--color);
  padding-bottom: 6px;
  padding-top: 6px;
`;

export const form = css`
  background: var(--bg);
  color: var(--color2);
  font-family: courier;
  margin: 0 36px 27px;
  text-align: center;
  transform: scale(1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const button = css`
    cursor: pointer;
    padding: 6px 6px;
    margin: auto 1.2vw;
    border: 1px solid transparent;
    border-radius: 9px;
    transition: 150ms border-color;

    &:hover {
        border-color: var(--color)};
      }
    
    &[disabled]: {
    background: var(--bg);
    }
`;
