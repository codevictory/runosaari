import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import shared from '../../styles/Shared.module.scss';
import styles from '../../styles/Performer.module.scss';
import PerformersData from '../../data/performers/2024';
import Performer from '../../types/Performer';
import Image from 'next/image';

const PerformerPage = () => {
    const router = useRouter()

    const [performer, setPerformer] = useState<Performer>({
        name: '',
        paragraphs: [],
        id: ''
    });

    useEffect(() => {
        setPerformer(PerformersData.find(p => p.id === router.query.id) ?? {
            name: '',
            paragraphs: [],
            id: ''
        });
    }, [router.query.id])

    return (
        performer.name == '' ?
            (<div>Esiintyjää tunnisteella {router.query.id} ei löydy.</div>)
            : (
                <div className={styles.performerContainer}>
                    <Image
                        className={styles.performerImage}
                        src={'/performers/2024/' + performer.id + '.jpg'}
                        width={300}
                        height={300}
                        layout='fixed'
                        alt={performer.name}
                    />
                    <h2>{performer.name}</h2>
                    <div>
                        {performer.paragraphs.map((parag, index) => (
                            <p key={index}>{parag.toString()}</p>
                        ))}
                    </div>
                </div>
            )
    );
}

export default PerformerPage;
