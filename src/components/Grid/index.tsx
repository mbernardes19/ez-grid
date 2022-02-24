import React from 'react';
import './styles.css';
import clsx from 'clsx';

export interface GridProps {
    className?: string
    children?: any
}

const Grid = (props: GridProps) => {
    const {className, children} = props;

    return (
        <div className={clsx('grid', className && className)}>
            {children}
        </div>
    )
}

export default Grid;