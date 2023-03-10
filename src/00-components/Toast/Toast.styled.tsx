
import theme from '@utils/theme'
import styled from 'styled-components'

const StyledToast = {
  Container: styled.div`
    position: absolute;
    top: 30px;
    right: 12px;
    z-index: 9999;
    width: auto;
    display: flex;
    padding: 6px 12px;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 50px;
    color: ${theme.gray[100]};
    background-color: ${theme.gray[900]};
    background-clip: padding-box;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    &.success {
      background-color: ${theme.green[500]};
    }
    &.error {
      background-color: ${theme.red[500]};
    }
    &.warning {
      background-color: ${theme.yellow[500]};
    }
    &.info {
      background-color: ${theme.blue[500]};
    }
  `,
  CloseButton: styled.button`
    color: ${theme.white};
    background-color: transparent;
    border: 0;
    border-radius: 0.25rem;
    opacity: 0.5;
    margin-left: 12px;
    &:hover {
      opacity: 1;
    }
  `
}

export default StyledToast
