import styled from 'styled-components';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

export const Link = styled(RouterLink) <LinkProps>`
  color: rgba(0,0,0,.7);

  font-size:14px;
`;
