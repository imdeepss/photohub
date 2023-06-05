import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "../../icons";
import { useLockBodyScroll } from "@/common/hooks";

type BackDropProps = {
    onClick: () => void;
};

const BackDrop = ({ onClick }: BackDropProps) => {
    return (
        <div
            role="presentation"
            className="fixed inset-0 z-30 h-screen w-screen overflow-hidden bg-[#000000] bg-opacity-70"
            onClick={() => { onClick() }}
        />
    );
};

type ModalOverlayProps = {
    onClose: () => void;
    children: ReactNode;
};

const ModalOverlay = ({ onClose, children }: ModalOverlayProps) => {
    return (
        <div className="modal fixed md:w-auto w-full top-[200px] md:top-[150px] left-1/2 z-40 mx-auto -translate-x-1/2 rounded-md px-4 outline-none lg:px-0">
            <div className="modal-dialog pointer-events-none relative w-auto overflow-hidden rounded-md shadow-xl">
                <div className="modal-content pointer-events-auto relative flex w-full flex-col border-none shadow-xl max-h-[calc(100vh-170px)]">
                    <div className="modal-header relative">
                        <button
                            type="button"
                            className="absolute right-6 top-6 text-white z-50 bg-white rounded-full outline-none"
                            onClick={onClose}
                        >
                            <CloseIcon />
                        </button>
                    </div>
                    <div className="modal-body modalScrollBar relative overflow-y-auto overflow-x-hidden bg-white border-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
};

const Modal = ({ open, onClose, children }: ModalProps) => {
    const modalDiv = document.getElementById("modalOverlay");

    useLockBodyScroll(open);
    if (!modalDiv || !open) return null;


    return ReactDOM.createPortal(
        <>
            <BackDrop onClick={onClose} />
            <ModalOverlay onClose={onClose}>{children}</ModalOverlay>
        </>,
        modalDiv
    );
};

export default Modal;
