import { ShowToast } from '@myTypes/ToastTypes';
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import StyledToast from './Toast.styled';

interface Props {
  show: boolean;
  hideToast: () => void;
  children: React.ReactNode;
  toastTimeOut?: number;
  toastType: ShowToast;
}

const Toast = ({ show, hideToast, children, toastTimeOut, toastType }: Props) => {
  const [node] = useState(document.createElement('div'))
  const removeNode = () => {
    if (document.querySelector('#toast')?.children.length) {
      document.querySelector('#toast')?.childNodes[0].remove()
    }
  }

  const composeToast = () => (
    <StyledToast.Container className={toastType}>
      {children}
      <StyledToast.CloseButton type="button" className="close" aria-label="Close" onClick={hideToast}>
        <span aria-hidden="true">&times;</span>
      </StyledToast.CloseButton>
    </StyledToast.Container>
  )

  useEffect(() => {
    if (show) {
      document.querySelector('#toast')?.appendChild(node)
      setTimeout(() => {
        removeNode()
        hideToast()
      }, toastTimeOut || 2000)
    } else {
      removeNode()
    }

    return () => removeNode()
  }, [node, children, show])

  return ReactDOM.createPortal(composeToast(), node)
}

export default Toast
