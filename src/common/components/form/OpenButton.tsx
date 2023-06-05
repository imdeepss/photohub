"use client";

import React, { useState } from 'react';
import { OpenIcon } from '../icons';
import { Modal } from '../ui/Modal';
import Image from 'next/image';

type ImageType = {
    src: string;
    alt: string;
};

const OpenButton = ({ src, alt }: ImageType) => {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <>
            <button
                type="button"
                className="absolute bottom-2 left-2 rounded-md bg-grey p-1 shadow-inner"
                onClick={() => { setModal(true) }}
            >
                <OpenIcon />
            </button>
            <Modal open={modal} onClose={() => setModal(false)} >
                <Image
                    width={500}
                    height={500}
                    className="h-auto max-w-full rounded-lg bg-grey"
                    src={src}
                    alt={alt}
                />
            </Modal>
        </>
    );
};

export default OpenButton;
