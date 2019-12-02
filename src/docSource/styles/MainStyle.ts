import { css, CSSResultArray } from 'lit-element';

import { Header } from './Header';
import { SideBar } from './SideBar';

const Main = css`
  .sidebarBottomItems {
    bottom: 16px;
    margin-bottom: 24px;
    width: 100%;
    position: absolute;
  }

  .menu {
    height: 48px;
    display: flex;
    white-space: nowrap;
    font-weight: 400;
    color: var(--primary-text-color);
    background-color: var(--primary-background-color);
    font-size: 20px;
    align-items: center;
    border-bottom: 1px solid var(--divider-color);
  }

  .expanded {
    width: 254px !important;
  }

  .sidebar,
  .view {
    transition: all 0.4s ease-in-out;
  }

  .view {
    display: flex;
    margin-left: 55px;
    padding-top: 24px;
    background: var(--lovelace-background, var(--primary-background-color));
    height: calc(100vh - 96px);
  }

  .content {
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 24px;
  }

  docs-search {
    display: contents;
  }
`;

export const MainStyle: CSSResultArray = [Main, Header, SideBar];