import React from 'react'
import cx from 'classnames'
import styles from './modal.module.css'
import defaultAnimations from './modalDefaultAnimations.module.css'
import { Portal, Backdrop } from 'components'
import { useShift, IClassNames } from 'hooks/useShift'
import { useFloat } from 'components/Float'
import { useCombinedRefs } from 'hooks/useCombinedRefs'
import { useClickOutside } from 'hooks/useClickOutside'

interface ModalBodyProps {
  containerClassName?: string
  classes?: string
  children?: React.ReactNode
  onClose?: () => void
}

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ containerClassName, classes, children, onClose }, ref) => {
    const { ref: floatRef, isTopFloat } = useFloat()
    const combinedRef = useCombinedRefs([floatRef, ref])
    const handleClickOitside = () => {
      if (onClose) {
        onClose()
      }
    }
    useClickOutside([combinedRef], isTopFloat() ? handleClickOitside : null)
    return (
      <div className={styles.wrapper}>
        <div ref={combinedRef} className={cx(classes, containerClassName)}>
          {children}
        </div>
      </div>
    )
  },
)

interface Props {
  isOpen: boolean
  onClose?: () => void
  target?: HTMLElement
  children?: React.ReactNode
  containerClassName?: string
  backdrop?: boolean
  animations?: IClassNames
}

const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  target,
  children,
  backdrop = true,
  containerClassName,
  animations,
}) => {
  const { isRender, classes, ref } = useShift(
    isOpen,
    animations || defaultAnimations,
  )

  return (
    <>
      {isRender && (
        <Portal to={target}>
          {backdrop && <Backdrop />}
          <ModalBody
            ref={ref}
            containerClassName={containerClassName}
            classes={classes}
            onClose={onClose}
          >
            {children}
          </ModalBody>
        </Portal>
      )}
    </>
  )
}

export { Modal }
