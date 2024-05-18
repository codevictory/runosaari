import React from 'react';
import { useRouter } from 'next/router'
import shared from '../styles/Shared.module.scss';
import styles from '../styles/Performer.module.scss';

const Performer = () => {
    const router = useRouter()
    return (
        <div>{router.query.name}</div>
    );
}

export default Performer;
